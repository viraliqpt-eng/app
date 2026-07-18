import fs from 'node:fs/promises';
import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { config } from './src/config.js';
import { GenerationStore } from './src/storage/generationStore.js';
import { MockVideoProvider } from './src/providers/mockVideoProvider.js';
import { HttpVideoProvider } from './src/providers/httpVideoProvider.js';
import { RunwayVideoProvider } from './src/providers/runwayVideoProvider.js';
import { GenerationService } from './src/services/generationService.js';
import { createGenerationsRouter } from './src/routes/generations.js';
import { createTikTokRouter } from './src/routes/tiktok.js';
import { TikTokClient } from './src/integrations/tiktokClient.js';
import { TikTokSessionStore } from './src/services/tiktokSessionStore.js';
import { apiNotFound, errorHandler } from './src/middleware/errors.js';

await Promise.all([
  fs.mkdir(config.uploadsDir, { recursive: true }),
  fs.mkdir(config.outputsDir, { recursive: true }),
  fs.mkdir(config.publicDir, { recursive: true })
]);

const store = new GenerationStore(config.dataFile);
await store.initialize();

const providers = {
  mock: () => new MockVideoProvider(),
  runway: () => new RunwayVideoProvider({
    apiSecret: config.runwayApiSecret,
    model: config.runwayModel
  }),
  http: () => new HttpVideoProvider({
    baseUrl: config.videoApiUrl,
    apiKey: config.videoApiKey
  })
};

if (!providers[config.provider]) {
  throw new Error(`VIDEO_PROVIDER inválido: ${config.provider}`);
}

const provider = providers[config.provider]();

const generationService = new GenerationService({
  store,
  provider,
  pollIntervalMs: config.pollIntervalMs,
  maxGenerationMs: config.maxGenerationMs,
  outputsDir: config.outputsDir
});
await generationService.initialize();

const app = express();
const tiktokClient = new TikTokClient({
  clientKey: config.tiktokClientKey,
  clientSecret: config.tiktokClientSecret,
  redirectUri: config.tiktokRedirectUri || `${config.publicBaseUrl}/api/tiktok/callback`
});
const tiktokSessionStore = new TikTokSessionStore();
app.disable('x-powered-by');
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'blob:', 'https:'],
      mediaSrc: ["'self'", 'blob:', 'https:'],
      connectSrc: ["'self'"]
    }
  }
}));
app.use(express.json({ limit: '1mb' }));

app.use('/api', rateLimit({
  windowMs: 60 * 1000,
  limit: 60,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { message: 'Demasiados pedidos. Tenta novamente dentro de um minuto.' }
}));

app.get('/api/health', (request, response) => {
  response.json({
    status: 'ok',
    provider: config.provider,
    durationSeconds: 10,
    now: new Date().toISOString()
  });
});

app.get('/api/public-config', (request, response) => {
  response.json({ supportEmail: config.supportEmail });
});

app.use('/api/generations', createGenerationsRouter({ service: generationService, config }));
app.use('/api/tiktok', createTikTokRouter({
  client: tiktokClient,
  sessionStore: tiktokSessionStore,
  generationService,
  config
}));
app.use('/media', express.static(config.outputsDir, { immutable: false, maxAge: '1h' }));
app.use(express.static(config.publicDir));
app.use(apiNotFound);
app.get('*splat', (request, response) => response.sendFile(`${config.publicDir}/index.html`));
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`PROMPT10 AI disponível em http://localhost:${config.port}`);
  console.log(`Motor de vídeo ativo: ${config.provider}`);
});
