import fs from 'node:fs/promises';
import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { config } from './src/config.js';
import { GenerationStore } from './src/storage/generationStore.js';
import { MockVideoProvider } from './src/providers/mockVideoProvider.js';
import { HttpVideoProvider } from './src/providers/httpVideoProvider.js';
import { GenerationService } from './src/services/generationService.js';
import { createGenerationsRouter } from './src/routes/generations.js';
import { apiNotFound, errorHandler } from './src/middleware/errors.js';

await Promise.all([
  fs.mkdir(config.uploadsDir, { recursive: true }),
  fs.mkdir(config.outputsDir, { recursive: true }),
  fs.mkdir(config.publicDir, { recursive: true })
]);

const store = new GenerationStore(config.dataFile);
await store.initialize();

const provider = config.provider === 'http'
  ? new HttpVideoProvider({ baseUrl: config.videoApiUrl, apiKey: config.videoApiKey })
  : new MockVideoProvider();

const generationService = new GenerationService({
  store,
  provider,
  pollIntervalMs: config.pollIntervalMs,
  maxGenerationMs: config.maxGenerationMs
});
await generationService.initialize();

const app = express();
app.disable('x-powered-by');
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'blob:'],
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

app.use('/api/generations', createGenerationsRouter({ service: generationService, config }));
app.use('/media', express.static(config.outputsDir, { immutable: false, maxAge: '1h' }));
app.use(express.static(config.publicDir));
app.use(apiNotFound);
app.get('*splat', (request, response) => response.sendFile(`${config.publicDir}/index.html`));
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`PROMPT10 AI disponível em http://localhost:${config.port}`);
  console.log(`Motor de vídeo ativo: ${config.provider}`);
});
