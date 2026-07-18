import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { GenerationStore } from '../src/storage/generationStore.js';

test('guarda e atualiza uma geração', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'prompt10-'));
  const file = path.join(directory, 'generations.json');
  const store = new GenerationStore(file);
  await store.initialize();

  await store.create({ id: 'one', status: 'queued', createdAt: new Date().toISOString() });
  await store.update('one', { status: 'succeeded', progress: 100 });

  assert.equal(store.get('one').status, 'succeeded');
  assert.equal(store.get('one').progress, 100);

  const saved = JSON.parse(await fs.readFile(file, 'utf8'));
  assert.equal(saved.length, 1);
  assert.equal(saved[0].id, 'one');
});
