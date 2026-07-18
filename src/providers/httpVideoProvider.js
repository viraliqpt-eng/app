import fs from 'node:fs/promises';

const STATUS_VALUES = new Set(['queued', 'processing', 'succeeded', 'failed']);

export class HttpVideoProvider {
  constructor({ baseUrl, apiKey }) {
    if (!baseUrl) throw new Error('VIDEO_API_URL é obrigatório para o fornecedor http');
    this.baseUrl = baseUrl.replace(/\/$/, '');
    this.apiKey = apiKey;
  }

  headers() {
    return {
      'Content-Type': 'application/json',
      ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {})
    };
  }

  async createGeneration(input) {
    let imageDataUrl = null;
    if (input.inputImagePath) {
      const buffer = await fs.readFile(input.inputImagePath);
      imageDataUrl = `data:${input.inputImageMimeType};base64,${buffer.toString('base64')}`;
    }

    const response = await fetch(`${this.baseUrl}/generations`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        prompt: input.prompt,
        image: imageDataUrl,
        durationSeconds: 10,
        aspectRatio: input.aspectRatio,
        style: input.style,
        camera: input.camera,
        costMode: input.costMode
      })
    });

    return this.parseResponse(response);
  }

  async getGeneration(id) {
    const response = await fetch(`${this.baseUrl}/generations/${encodeURIComponent(id)}`, {
      headers: this.headers()
    });
    return this.parseResponse(response);
  }

  async parseResponse(response) {
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(body.message || `O motor de vídeo respondeu com ${response.status}`);
    }

    if (!body.id || !STATUS_VALUES.has(body.status)) {
      throw new Error('Resposta inválida do motor de vídeo');
    }

    return {
      id: String(body.id),
      status: body.status,
      progress: Math.max(0, Math.min(100, Number(body.progress) || 0)),
      outputUrl: body.outputUrl || null,
      error: body.error || null
    };
  }
}
