import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { CreditStore } from '../src/storage/creditStore.js';

test('atribui, debita e reembolsa créditos', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'prompt10-credits-'));
  const store = new CreditStore(path.join(directory, 'credits.json'), 10);
  await store.initialize();
  const wallet = await store.getOrCreate('wallet-test');
  assert.equal(wallet.balance, 10);

  const charged = await store.debit('wallet-test', 10, 'Geração', 'generation-1');
  assert.equal(charged.balance, 0);
  assert.equal(await store.debit('wallet-test', 10, 'Geração', 'generation-2'), null);

  const refunded = await store.refund('wallet-test', 10, 'Falhou', 'generation-1');
  assert.equal(refunded.balance, 10);
});
