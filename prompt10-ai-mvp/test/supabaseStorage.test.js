import assert from 'node:assert/strict';
import test from 'node:test';
import { SupabaseClient } from '../src/storage/supabaseClient.js';
import { SupabaseGenerationStore } from '../src/storage/supabaseGenerationStore.js';
import { SupabaseMediaStorage } from '../src/storage/supabaseMediaStorage.js';

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

test('carrega, cria e atualiza gerações no Supabase', async () => {
  const calls = [];
  const existing = {
    id: '11111111-1111-4111-8111-111111111111',
    status: 'succeeded',
    createdAt: '2026-07-18T10:00:00.000Z',
    updatedAt: '2026-07-18T10:00:00.000Z'
  };
  const fetchImpl = async (url, options = {}) => {
    calls.push({ url, options });
    if (!options.method) return jsonResponse([{ payload: existing }]);
    return new Response(null, { status: 204 });
  };
  const client = new SupabaseClient({
    url: 'https://project.supabase.co/',
    serviceRoleKey: 'secret',
    fetchImpl
  });
  const store = new SupabaseGenerationStore({ client });

  await store.initialize();
  assert.equal(store.get(existing.id).status, 'succeeded');

  const created = {
    id: '22222222-2222-4222-8222-222222222222',
    status: 'queued',
    createdAt: '2026-07-18T11:00:00.000Z',
    updatedAt: '2026-07-18T11:00:00.000Z'
  };
  await store.create(created);
  await store.update(created.id, { status: 'processing', progress: 25 });

  assert.equal(store.get(created.id).progress, 25);
  assert.equal(calls[1].options.method, 'POST');
  assert.equal(calls[2].options.method, 'PATCH');
  assert.match(calls[2].url, /id=eq\.22222222/);
});

test('transfere o vídeo para um bucket público persistente', async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push({ url, options });
    if (url === 'https://runway.example/video.mp4') {
      return new Response(Buffer.from('video-data'), {
        status: 200,
        headers: {
          'Content-Type': 'video/mp4',
          'Content-Length': '10'
        }
      });
    }
    return jsonResponse({ Key: 'generations/job.mp4' });
  };
  const client = new SupabaseClient({
    url: 'https://project.supabase.co',
    serviceRoleKey: 'secret',
    fetchImpl
  });
  const storage = new SupabaseMediaStorage({ client, bucket: 'prompt10-media' });

  const url = await storage.persistFromUrl({
    id: 'job',
    sourceUrl: 'https://runway.example/video.mp4'
  });

  assert.equal(
    url,
    'https://project.supabase.co/storage/v1/object/public/prompt10-media/generations/job.mp4'
  );
  assert.equal(calls[1].options.method, 'POST');
  assert.equal(calls[1].options.headers['x-upsert'], 'true');
});
