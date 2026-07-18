import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(sourceDir, '..');

function positiveNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export const config = Object.freeze({
  rootDir,
  port: positiveNumber(process.env.PORT, 3000),
  nodeEnv: process.env.NODE_ENV || 'development',
  provider: (process.env.VIDEO_PROVIDER || 'mock').toLowerCase(),
  runwayApiSecret: process.env.RUNWAY_API_SECRET || '',
  runwayModel: process.env.RUNWAY_MODEL || 'gen4.5',
  videoApiUrl: process.env.VIDEO_API_URL || '',
  videoApiKey: process.env.VIDEO_API_KEY || '',
  maxImageBytes: positiveNumber(process.env.MAX_IMAGE_MB, 3) * 1024 * 1024,
  maxGenerationMs: positiveNumber(process.env.MAX_GENERATION_MINUTES, 20) * 60 * 1000,
  pollIntervalMs: positiveNumber(process.env.GENERATION_POLL_MS, 2000),
  dataFile: path.join(rootDir, 'data', 'generations.json'),
  uploadsDir: path.join(rootDir, 'storage', 'uploads'),
  outputsDir: path.join(rootDir, 'storage', 'outputs'),
  publicDir: path.join(rootDir, 'public'),
  publicBaseUrl: (process.env.PUBLIC_BASE_URL || 'http://localhost:3000').replace(/\/$/, ''),
  supportEmail: process.env.SUPPORT_EMAIL || '',
  tiktokClientKey: process.env.TIKTOK_CLIENT_KEY || '',
  tiktokClientSecret: process.env.TIKTOK_CLIENT_SECRET || '',
  tiktokRedirectUri: process.env.TIKTOK_REDIRECT_URI || '',
  tiktokScopes: process.env.TIKTOK_SCOPES || 'user.info.basic,video.publish'
});
