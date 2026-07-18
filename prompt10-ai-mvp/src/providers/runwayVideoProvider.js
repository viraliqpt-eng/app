import fs from 'node:fs/promises';

const RUNWAY_API = 'https://api.dev.runwayml.com/v1';
const RUNWAY_VERSION = '2024-11-06';

const RATIO_MAP = Object.freeze({
  '9:16': '720:1280',
  '16:9': '1280:720',
  '1:1': '960:960'
});

const FAILED_STATUSES = new Set(['FAILED', 'CANCELLED']);

export class RunwayVideoProvider {
  constructor({ apiSecret, model = 'gen4.5', fetchImpl = fetch }) {
    if (!apiSecret) throw new Error('RUNWAY_API_SECRET é obrigatório para o fornecedor runway');
    this.apiSecret = apiSecret;
    this.model = model;
    this.fetch = fetchImpl;
    this.pollCounts = new Map();
  }

  headers() {
    return {
      Authorization: `Bearer ${this.apiSecret}`,
      'Content-Type': 'application/json',
      'X-Runway-Version': RUNWAY_VERSION
    };
  }

  async createGeneration(input) {
    const model = input.runwayModel || this.model;

    if (model === 'gen4_turbo' && !input.inputImagePath) {
      throw new Error('O modo Económico precisa de uma imagem do produto');
    }

    if (input.aspectRatio === '1:1' && !input.inputImagePath && model === 'gen4.5') {
      throw new Error('O formato 1:1 no Gen 4.5 requer uma imagem de referência');
    }

    const body = {
      model,
      promptText: input.prompt,
      ratio: RATIO_MAP[input.aspectRatio] || RATIO_MAP['9:16'],
      duration: 10
    };

    if (input.inputImagePath) {
      const buffer = await fs.readFile(input.inputImagePath);
      body.promptImage = `data:${input.inputImageMimeType};base64,${buffer.toString('base64')}`;
    }

    const response = await this.fetch(`${RUNWAY_API}/image_to_video`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(body)
    });
    const result = await this.parseResponse(response);
    if (!result.id) throw new Error('O Runway não devolveu o identificador da tarefa');
    this.pollCounts.set(String(result.id), 0);
    return { id: String(result.id), status: 'queued', progress: 3 };
  }

  async getGeneration(id) {
    const response = await this.fetch(`${RUNWAY_API}/tasks/${encodeURIComponent(id)}`, {
      headers: this.headers()
    });
    const task = await this.parseResponse(response);
    const status = String(task.status || '').toUpperCase();

    if (FAILED_STATUSES.has(status)) {
      return {
        id,
        status: 'failed',
        progress: 0,
        error: task.failure || task.failureCode || 'O Runway não conseguiu gerar o vídeo'
      };
    }

    if (status === 'SUCCEEDED') {
      const outputUrl = Array.isArray(task.output) ? task.output[0] : task.output;
      return { id, status: 'succeeded', progress: 100, outputUrl };
    }

    const polls = (this.pollCounts.get(id) || 0) + 1;
    this.pollCounts.set(id, polls);
    const reported = Number(task.progress);
    const normalized = Number.isFinite(reported)
      ? Math.round((reported <= 1 ? reported * 100 : reported))
      : Math.min(92, 8 + polls * 6);

    return {
      id,
      status: status === 'PENDING' || status === 'THROTTLED' ? 'queued' : 'processing',
      progress: Math.max(4, Math.min(95, normalized))
    };
  }

  async parseResponse(response) {
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = body.error || body.message || `O Runway respondeu com ${response.status}`;
      const error = new Error(typeof message === 'string' ? message : JSON.stringify(message));
      error.status = response.status;
      throw error;
    }
    return body;
  }
}
