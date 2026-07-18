import crypto from 'node:crypto';

export class MockVideoProvider {
  constructor() {
    this.jobs = new Map();
  }

  async createGeneration(input) {
    const id = crypto.randomUUID();
    this.jobs.set(id, {
      input,
      startedAt: Date.now()
    });
    return { id, status: 'queued', progress: 4 };
  }

  async getGeneration(id) {
    const job = this.jobs.get(id);
    if (!job) throw new Error('Tarefa demonstrativa não encontrada');

    const elapsed = Date.now() - job.startedAt;
    const progress = Math.min(100, Math.round((elapsed / 7000) * 100));

    if (progress >= 100) {
      return {
        id,
        status: 'succeeded',
        progress: 100,
        outputUrl: '/media/demo-prompt10.mp4'
      };
    }

    return {
      id,
      status: progress < 12 ? 'queued' : 'processing',
      progress
    };
  }
}
