import fs from 'node:fs/promises';
import path from 'node:path';

export class GenerationStore {
  constructor(filePath) {
    this.filePath = filePath;
    this.records = new Map();
    this.writeQueue = Promise.resolve();
  }

  async initialize() {
    await fs.mkdir(path.dirname(this.filePath), { recursive: true });
    try {
      const content = await fs.readFile(this.filePath, 'utf8');
      const records = JSON.parse(content);
      if (!Array.isArray(records)) throw new Error('Formato de dados inválido');
      for (const record of records) this.records.set(record.id, record);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      await this.persist();
    }
  }

  get(id) {
    return this.records.get(id) || null;
  }

  list(limit = 20) {
    return [...this.records.values()]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, limit);
  }

  async create(record) {
    this.records.set(record.id, record);
    await this.persist();
    return record;
  }

  async update(id, changes) {
    const current = this.get(id);
    if (!current) return null;
    const next = { ...current, ...changes, updatedAt: new Date().toISOString() };
    this.records.set(id, next);
    await this.persist();
    return next;
  }

  async persist() {
    const payload = JSON.stringify([...this.records.values()], null, 2);
    const temporaryPath = `${this.filePath}.tmp`;
    this.writeQueue = this.writeQueue.then(async () => {
      await fs.writeFile(temporaryPath, payload, 'utf8');
      await fs.rename(temporaryPath, this.filePath);
    });
    return this.writeQueue;
  }
}
