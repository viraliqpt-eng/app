export class SupabaseGenerationStore {
  constructor({ client, table = 'prompt10_generations' }) {
    this.client = client;
    this.table = table;
    this.records = new Map();
    this.writeQueue = Promise.resolve();
  }

  endpoint(query = '') {
    return `${this.client.url}/rest/v1/${encodeURIComponent(this.table)}${query}`;
  }

  async initialize() {
    const response = await this.client.fetch(
      this.endpoint('?select=payload&order=created_at.desc&limit=500'),
      { headers: this.client.headers() }
    );
    const rows = await this.client.parse(response, 'Não foi possível carregar o histórico persistente');
    if (!Array.isArray(rows)) throw new Error('Resposta inválida do histórico persistente');

    this.records.clear();
    for (const row of rows) {
      if (row?.payload?.id) this.records.set(row.payload.id, row.payload);
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
    try {
      await this.enqueueWrite(async () => {
        const response = await this.client.fetch(this.endpoint(), {
          method: 'POST',
          headers: this.client.headers({
            'Content-Type': 'application/json',
            Prefer: 'resolution=merge-duplicates,return=minimal'
          }),
          body: JSON.stringify({
            id: record.id,
            payload: record,
            created_at: record.createdAt,
            updated_at: record.updatedAt
          })
        });
        await this.client.parse(response, 'Não foi possível guardar a geração');
      });
      return record;
    } catch (error) {
      this.records.delete(record.id);
      throw error;
    }
  }

  async update(id, changes) {
    const current = this.get(id);
    if (!current) return null;
    const next = { ...current, ...changes, updatedAt: new Date().toISOString() };
    this.records.set(id, next);

    try {
      await this.enqueueWrite(async () => {
        const response = await this.client.fetch(
          this.endpoint(`?id=eq.${encodeURIComponent(id)}`),
          {
            method: 'PATCH',
            headers: this.client.headers({
              'Content-Type': 'application/json',
              Prefer: 'return=minimal'
            }),
            body: JSON.stringify({ payload: next, updated_at: next.updatedAt })
          }
        );
        await this.client.parse(response, 'Não foi possível atualizar a geração');
      });
      return next;
    } catch (error) {
      this.records.set(id, current);
      throw error;
    }
  }

  enqueueWrite(operation) {
    this.writeQueue = this.writeQueue.then(operation, operation);
    return this.writeQueue;
  }
}
