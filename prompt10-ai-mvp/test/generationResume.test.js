import assert from 'node:assert/strict';
import test from 'node:test';
import { GenerationService } from '../src/services/generationService.js';

test('retoma uma tarefa externa sem criar uma segunda geração', async () => {
  const record = {
    id: 'generation-one',
    status: 'processing',
    progress: 60,
    providerJobId: 'runway-job-one',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  const store = {
    get: () => record,
    list: () => [record],
    update: async (id, changes) => Object.assign(record, changes)
  };
  let createCalls = 0;
  let getCalls = 0;
  const provider = {
    createGeneration: async () => {
      createCalls += 1;
      return { id: 'unexpected', status: 'queued', progress: 2 };
    },
    getGeneration: async id => {
      getCalls += 1;
      assert.equal(id, 'runway-job-one');
      return { id, status: 'succeeded', progress: 100, outputUrl: '/media/resumed.mp4' };
    }
  };
  const service = new GenerationService({
    store,
    provider,
    pollIntervalMs: 1,
    maxGenerationMs: 100,
    outputsDir: null
  });

  await service.run(record.id);

  assert.equal(createCalls, 0);
  assert.equal(getCalls, 1);
  assert.equal(record.status, 'succeeded');
  assert.equal(record.outputUrl, '/media/resumed.mp4');
});
