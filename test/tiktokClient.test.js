import test from 'node:test';
import assert from 'node:assert/strict';
import { TikTokClient } from '../src/integrations/tiktokClient.js';
import { TikTokSessionStore } from '../src/services/tiktokSessionStore.js';

test('cria o URL OAuth TikTok com state e scopes', () => {
  const client = new TikTokClient({ clientKey: 'key', clientSecret: 'secret', redirectUri: 'https://app.test/api/tiktok/callback' });
  const url = new URL(client.authorizationUrl({ state: 'safe-state', scopes: 'user.info.basic,video.publish' }));
  assert.equal(url.origin, 'https://www.tiktok.com');
  assert.equal(url.searchParams.get('client_key'), 'key');
  assert.equal(url.searchParams.get('state'), 'safe-state');
  assert.equal(url.searchParams.get('scope'), 'user.info.basic,video.publish');
});

test('o state OAuth só pode ser consumido uma vez', () => {
  const store = new TikTokSessionStore();
  const session = store.createSession();
  const state = store.createState(session);
  assert.equal(store.consumeState(state), session);
  assert.equal(store.consumeState(state), null);
});
