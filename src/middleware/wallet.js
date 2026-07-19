import crypto from 'node:crypto';

const COOKIE_NAME = 'prompt10_wallet';

function cookieValue(header, name) {
  const entries = String(header || '').split(';');
  for (const entry of entries) {
    const [key, ...value] = entry.trim().split('=');
    if (key === name) return decodeURIComponent(value.join('='));
  }
  return '';
}

function validWalletId(value) {
  return /^[0-9a-f-]{36}$/.test(value) ? value : '';
}

export function walletMiddleware({ secure }) {
  return (request, response, next) => {
    let walletId = validWalletId(cookieValue(request.headers.cookie, COOKIE_NAME));
    if (!walletId) {
      walletId = crypto.randomUUID();
      const parts = [
        `${COOKIE_NAME}=${encodeURIComponent(walletId)}`,
        'Path=/',
        'HttpOnly',
        'SameSite=Lax',
        'Max-Age=31536000'
      ];
      if (secure) parts.push('Secure');
      response.append('Set-Cookie', parts.join('; '));
    }
    request.walletId = walletId;
    next();
  };
}
