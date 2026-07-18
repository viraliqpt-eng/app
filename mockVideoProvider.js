import fs from 'node:fs/promises';

const API_BASE = 'https://open.tiktokapis.com';

function apiError(payload, fallback) {
  const message = payload?.error?.message || payload?.message || fallback;
  const error = new Error(message);
  error.status = 502;
  error.code = payload?.error?.code;
  return error;
}

export class TikTokClient {
  constructor({ clientKey, clientSecret, redirectUri }) {
    this.clientKey = clientKey;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
  }

  get configured() {
    return Boolean(this.clientKey && this.clientSecret && this.redirectUri);
  }

  authorizationUrl({ state, scopes }) {
    const url = new URL('https://www.tiktok.com/v2/auth/authorize/');
    url.search = new URLSearchParams({
      client_key: this.clientKey,
      response_type: 'code',
      scope: scopes,
      redirect_uri: this.redirectUri,
      state
    });
    return url.toString();
  }

  async exchangeCode(code) {
    return this.tokenRequest({
      client_key: this.clientKey,
      client_secret: this.clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: this.redirectUri
    });
  }

  async refresh(refreshToken) {
    return this.tokenRequest({
      client_key: this.clientKey,
      client_secret: this.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    });
  }

  async revoke(accessToken) {
    await fetch(`${API_BASE}/v2/oauth/revoke/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_key: this.clientKey, client_secret: this.clientSecret, token: accessToken })
    });
  }

  async tokenRequest(parameters) {
    const response = await fetch(`${API_BASE}/v2/oauth/token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(parameters)
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.access_token) throw apiError(payload, 'Não foi possível autenticar com o TikTok');
    return payload;
  }

  async getUser(accessToken) {
    return this.request('/v2/user/info/?fields=open_id,union_id,avatar_url,display_name', accessToken, { method: 'GET' })
      .then(payload => payload.data?.user || {});
  }

  async getCreatorInfo(accessToken) {
    return this.request('/v2/post/publish/creator_info/query/', accessToken, {
      method: 'POST', body: JSON.stringify({})
    }).then(payload => payload.data);
  }

  async initializeVideo(accessToken, input) {
    return this.request('/v2/post/publish/video/init/', accessToken, {
      method: 'POST', body: JSON.stringify(input)
    }).then(payload => payload.data);
  }

  async uploadVideo(uploadUrl, filePath, size) {
    const video = await fs.readFile(filePath);
    const response = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': String(size),
        'Content-Range': `bytes 0-${size - 1}/${size}`
      },
      body: video
    });
    if (!response.ok) throw apiError({}, `O envio do vídeo ao TikTok respondeu com ${response.status}`);
  }

  async getPublishStatus(accessToken, publishId) {
    return this.request('/v2/post/publish/status/fetch/', accessToken, {
      method: 'POST', body: JSON.stringify({ publish_id: publishId })
    }).then(payload => payload.data);
  }

  async request(path, accessToken, options) {
    const response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...(options.method !== 'GET' ? { 'Content-Type': 'application/json; charset=UTF-8' } : {})
      }
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || (payload.error?.code && payload.error.code !== 'ok')) {
      throw apiError(payload, 'O TikTok não conseguiu concluir o pedido');
    }
    return payload;
  }
}
