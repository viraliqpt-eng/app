import fs from 'node:fs/promises';
import path from 'node:path';

export class CreditStore {
  constructor(filePath, freeCredits = 10) {
    this.filePath = filePath;
    this.freeCredits = freeCredits;
    this.wallets = new Map();
    this.writeQueue = Promise.resolve();
  }

  async initialize() {
    await fs.mkdir(path.dirname(this.filePath), { recursive: true });
    try {
      const content = await fs.readFile(this.filePath, 'utf8');
      const wallets = JSON.parse(content);
      if (!Array.isArray(wallets)) throw new Error('Formato de créditos inválido');
      for (const wallet of wallets) this.wallets.set(wallet.id, wallet);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      await this.persist();
    }
  }

  async getOrCreate(id) {
    const existing = this.wallets.get(id);
    if (existing) return existing;
    const now = new Date().toISOString();
    const wallet = {
      id,
      balance: this.freeCredits,
      lifetimeGranted: this.freeCredits,
      lifetimeUsed: 0,
      createdAt: now,
      updatedAt: now,
      transactions: [{
        id: `welcome-${id}`,
        type: 'welcome',
        amount: this.freeCredits,
        description: 'Créditos gratuitos de boas-vindas',
        createdAt: now
      }]
    };
    this.wallets.set(id, wallet);
    await this.persist();
    return wallet;
  }

  async debit(id, amount, description, referenceId) {
    const wallet = await this.getOrCreate(id);
    if (wallet.balance < amount) return null;
    const now = new Date().toISOString();
    wallet.balance -= amount;
    wallet.lifetimeUsed += amount;
    wallet.updatedAt = now;
    wallet.transactions.unshift({
      id: `debit-${referenceId}`,
      type: 'debit',
      amount: -amount,
      description,
      referenceId,
      createdAt: now
    });
    await this.persist();
    return wallet;
  }

  async refund(id, amount, description, referenceId) {
    const wallet = await this.getOrCreate(id);
    if (wallet.transactions.some(item => item.id === `refund-${referenceId}`)) return wallet;
    const now = new Date().toISOString();
    wallet.balance += amount;
    wallet.lifetimeUsed = Math.max(0, wallet.lifetimeUsed - amount);
    wallet.updatedAt = now;
    wallet.transactions.unshift({
      id: `refund-${referenceId}`,
      type: 'refund',
      amount,
      description,
      referenceId,
      createdAt: now
    });
    await this.persist();
    return wallet;
  }

  toPublic(wallet) {
    return {
      balance: wallet.balance,
      lifetimeGranted: wallet.lifetimeGranted,
      lifetimeUsed: wallet.lifetimeUsed,
      transactions: wallet.transactions.slice(0, 20)
    };
  }

  async persist() {
    const payload = JSON.stringify([...this.wallets.values()], null, 2);
    const temporaryPath = `${this.filePath}.tmp`;
    this.writeQueue = this.writeQueue.then(async () => {
      await fs.writeFile(temporaryPath, payload, 'utf8');
      await fs.rename(temporaryPath, this.filePath);
    });
    return this.writeQueue;
  }
}
