import fs from 'node:fs/promises';
import path from 'node:path';
import { Router } from 'express';

const COOKIE = 'prompt10_session';
const PRIVACY = new Set(['PUBLIC_TO_EVERYONE', 'MUTUAL_FOLLOW_FRIENDS', 'FOLLOWER_OF_CREATOR', 'SELF_ONLY']);

function cookies(header = '') {
  return Object.fromEntries(header.split(';').map(value => value.trim().split('=').map(decodeURIComponent)).filter(pair => pair.length === 2));
}

function sessionId(request) { return cookies(request.headers.cookie)[COOKIE]; }

function setCookie(response, id, secure) {
  response.append('Set-Cookie', `${COOKIE}=${encodeURIComponent(id)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000${secure ? '; Secure' : ''}`);
}

function clearCookie(response, secure) {
  response.append('Set-Cookie', `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure ? '; Secure' : ''}`);
}

function requireTikTok(sessionStore, request) {
  const id = sessionId(request);
  const session = sessionStore.get(id);
  if (!session?.tokens?.access_token) {
    const error = new Error('Liga primeiro a tua conta TikTok');
    error.status = 401;
    throw error;
  }
  return { id, session };
}

export function createTikTokRouter({ client, sessionStore, generationService, config }) {
  const router = Router();
  const secure = config.publicBaseUrl.startsWith('https://');

  async function activeSession(request) {
    const found = requireTikTok(sessionStore, request);
    if (found.session.accessExpiresAt > Date.now() + 10 * 60 * 1000) return found;
    const tokens = await client.refresh(found.session.tokens.refresh_token);
    sessionStore.setTikTok(found.id, tokens, found.session.profile);
    return { id: found.id, session: sessionStore.get(found.id) };
  }

  router.get('/login', (request, response, next) => {
    try {
      if (!client.configured) {
        const error = new Error('A integração TikTok ainda não foi configurada no servidor');
        error.status = 503;
        throw error;
      }
      let id = sessionId(request);
      if (!sessionStore.get(id)) id = sessionStore.createSession();
      setCookie(response, id, secure);
      response.redirect(client.authorizationUrl({ state: sessionStore.createState(id), scopes: config.tiktokScopes }));
    } catch (error) { next(error); }
  });

  router.get('/callback', async (request, response) => {
    const id = sessionStore.consumeState(String(request.query.state || ''));
    if (!id || request.query.error) return response.redirect('/tiktok-publish.html?error=oauth');
    try {
      const tokens = await client.exchangeCode(String(request.query.code || ''));
      const profile = await client.getUser(tokens.access_token);
      sessionStore.setTikTok(id, tokens, profile);
      setCookie(response, id, secure);
      response.redirect('/tiktok-publish.html?connected=1');
    } catch (error) {
      console.error(`TikTok OAuth: ${error.message}`);
      response.redirect('/tiktok-publish.html?error=token');
    }
  });

  router.get('/status', (request, response) => {
    const session = sessionStore.get(sessionId(request));
    response.json({ configured: client.configured, connected: Boolean(session?.tokens), profile: session?.profile || null });
  });

  router.post('/disconnect', async (request, response) => {
    const id = sessionId(request);
    const session = sessionStore.get(id);
    if (session?.tokens?.access_token) await client.revoke(session.tokens.access_token).catch(() => {});
    sessionStore.delete(id);
    clearCookie(response, secure);
    response.json({ disconnected: true });
  });

  router.get('/creator-info', async (request, response, next) => {
    try {
      const { session } = await activeSession(request);
      response.json({ creator: await client.getCreatorInfo(session.tokens.access_token) });
    } catch (error) { next(error); }
  });

  router.post('/publish', async (request, response, next) => {
    try {
      const { session } = await activeSession(request);
      const generation = generationService.get(String(request.body.generationId || ''));
      if (!generation || generation.status !== 'succeeded') {
        const error = new Error('Seleciona um vídeo concluído'); error.status = 400; throw error;
      }
      const privacy = String(request.body.privacyLevel || '');
      if (!PRIVACY.has(privacy) || request.body.consent !== true) {
        const error = new Error('Escolhe a privacidade e confirma o consentimento'); error.status = 400; throw error;
      }
      const creator = await client.getCreatorInfo(session.tokens.access_token);
      if (!creator?.privacy_level_options?.includes(privacy)) {
        const error = new Error('A privacidade escolhida não está disponível nesta conta'); error.status = 400; throw error;
      }
      if (Number(creator.max_video_post_duration_sec || 0) < 10) {
        const error = new Error('Esta conta não permite publicar um vídeo de 10 segundos'); error.status = 400; throw error;
      }
      if (!generation.outputUrl?.startsWith('/media/')) {
        const error = new Error('O ficheiro local já não está disponível. Gera novamente o vídeo'); error.status = 410; throw error;
      }
      const filePath = path.join(config.outputsDir, path.basename(generation.outputUrl));
      const stat = await fs.stat(filePath);
      const initialized = await client.initializeVideo(session.tokens.access_token, {
        post_info: {
          title: String(request.body.title || '').trim().slice(0, 2200),
          privacy_level: privacy,
          disable_duet: Boolean(request.body.disableDuet),
          disable_stitch: Boolean(request.body.disableStitch),
          disable_comment: Boolean(request.body.disableComment),
          brand_content_toggle: Boolean(request.body.brandContent),
          brand_organic_toggle: Boolean(request.body.brandOrganic),
          is_aigc: true
        },
        source_info: { source: 'FILE_UPLOAD', video_size: stat.size, chunk_size: stat.size, total_chunk_count: 1 }
      });
      await client.uploadVideo(initialized.upload_url, filePath, stat.size);
      response.status(202).json({ publishId: initialized.publish_id, status: 'PROCESSING_UPLOAD' });
    } catch (error) { next(error); }
  });

  router.get('/publish/:id', async (request, response, next) => {
    try {
      const { session } = await activeSession(request);
      response.json({ publication: await client.getPublishStatus(session.tokens.access_token, request.params.id) });
    } catch (error) { next(error); }
  });

  return router;
}
