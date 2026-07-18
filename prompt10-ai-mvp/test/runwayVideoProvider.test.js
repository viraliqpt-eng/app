import assert from 'node:assert/strict';
import test from 'node:test';
import { RunwayVideoProvider } from '../src/providers/runwayVideoProvider.js';

function response(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

test('cria uma geração vertical de 10 segundos no Runway', async () => {
  let request;
  const provider = new RunwayVideoProvider({
    apiSecret: 'runway_test_secret',
    fetchImpl: async (url, options) => {
      request = { url, options };
      return response({ id: 'task_123' });
    }
  });

  const created = await provider.createGeneration({
    prompt: 'Uma cidade futurista',
    aspectRatio: '9:16',
    inputImagePath: null
  });

  const payload = JSON.parse(request.options.body);
  assert.equal(created.id, 'task_123');
  assert.equal(payload.model, 'gen4.5');
  assert.equal(payload.duration, 10);
  assert.equal(payload.ratio, '720:1280');
  assert.equal(payload.promptText, 'Uma cidade futurista');
  assert.equal(payload.promptImage, undefined);
  assert.equal(request.options.headers['X-Runway-Version'], '2024-11-06');
});

test('normaliza uma tarefa Runway concluída', async () => {
  const provider = new RunwayVideoProvider({
    apiSecret: 'runway_test_secret',
    fetchImpl: async () => response({
      id: 'task_123',
      status: 'SUCCEEDED',
      output: ['https://cdn.example.com/video.mp4']
    })
  });

  const result = await provider.getGeneration('task_123');
  assert.equal(result.status, 'succeeded');
  assert.equal(result.progress, 100);
  assert.equal(result.outputUrl, 'https://cdn.example.com/video.mp4');
});

test('usa Gen 4 Turbo no modo económico com imagem', async () => {
  let request;
  const provider = new RunwayVideoProvider({
    apiSecret: 'runway_test_secret',
    fetchImpl: async (url, options) => {
      request = { url, options };
      return response({ id: 'task_turbo' });
    }
  });

  await provider.createGeneration({
    prompt: 'Produto numa mesa',
    aspectRatio: '9:16',
    runwayModel: 'gen4_turbo',
    inputImagePath: new URL('../README.md', import.meta.url),
    inputImageMimeType: 'image/png'
  });

  const payload = JSON.parse(request.options.body);
  assert.equal(payload.model, 'gen4_turbo');
  assert.match(payload.promptImage, /^data:image\/png;base64,/);
});

test('modo económico explica que a imagem é obrigatória', async () => {
  const provider = new RunwayVideoProvider({
    apiSecret: 'runway_test_secret',
    fetchImpl: async () => response({ id: 'unused' })
  });

  await assert.rejects(
    provider.createGeneration({
      prompt: 'Produto sem referência',
      aspectRatio: '9:16',
      runwayModel: 'gen4_turbo',
      inputImagePath: null
    }),
    /precisa de uma imagem/
  );
});

test('explica a limitação de 1:1 sem imagem no Gen 4.5', async () => {
  const provider = new RunwayVideoProvider({
    apiSecret: 'runway_test_secret',
    fetchImpl: async () => response({ id: 'unused' })
  });

  await assert.rejects(
    provider.createGeneration({
      prompt: 'Cena quadrada',
      aspectRatio: '1:1',
      inputImagePath: null
    }),
    /requer uma imagem/
  );
});
