import assert from 'node:assert/strict';
import test from 'node:test';
import { MockVideoProvider } from '../src/providers/mockVideoProvider.js';

test('cria uma tarefa demonstrativa válida', async () => {
  const provider = new MockVideoProvider();
  const created = await provider.createGeneration({ prompt: 'Cena de teste' });
  const current = await provider.getGeneration(created.id);

  assert.equal(created.status, 'queued');
  assert.ok(['queued', 'processing'].includes(current.status));
  assert.ok(current.progress >= 0 && current.progress < 100);
});
