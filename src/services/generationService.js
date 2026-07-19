import crypto from 'node:crypto';
import { createWriteStream } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { buildPublicationKit, buildTikTokShopPrompt } from './tiktokShopPrompt.js';

const TERMINAL_STATUSES = new Set(['succeeded', 'failed']);

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export class GenerationService {
  constructor({ store, provider, pollIntervalMs, maxGenerationMs, outputsDir, creditStore }) {
    this.store = store;
    this.provider = provider;
    this.pollIntervalMs = pollIntervalMs;
    this.maxGenerationMs = maxGenerationMs;
    this.outputsDir = outputsDir;
    this.creditStore = creditStore;
    this.running = new Set();
  }

  async initialize() {
    const unfinished = this.store.list(200).filter(job => !TERMINAL_STATUSES.has(job.status));
    for (const job of unfinished) {
      await this.store.update(job.id, {
        status: 'queued',
        progress: 0,
        providerJobId: null,
        error: null
      });
      this.enqueue(job.id);
    }
  }

  async create(input) {
    const now = new Date().toISOString();
    const providerPrompt = buildTikTokShopPrompt(input);
    const requestedMode = input.costMode || 'automatico';
    const runwayModel = requestedMode === 'premium' || !input.inputImagePath
      ? 'gen4.5'
      : 'gen4_turbo';
    const costMode = runwayModel === 'gen4_turbo' ? 'economico' : 'premium';
    const record = {
      id: input.id || crypto.randomUUID(),
      walletId: input.walletId || null,
      creditsCharged: Number(input.creditsCharged) || 0,
      prompt: providerPrompt,
      originalPrompt: input.prompt,
      aspectRatio: input.aspectRatio,
      style: input.style,
      camera: input.camera,
      durationSeconds: 10,
      requestedMode,
      costMode,
      runwayModel,
      estimatedCostUsd: runwayModel === 'gen4_turbo' ? 0.50 : 1.20,
      tiktokShop: Boolean(input.tiktokShop),
      productName: input.productName || null,
      sellingPoint: input.sellingPoint || null,
      salesAngle: input.salesAngle || null,
      cta: input.cta || null,
      publicationKit: buildPublicationKit(input),
      hasImage: Boolean(input.inputImagePath),
      inputImageName: input.inputImageName || null,
      inputImagePath: input.inputImagePath || null,
      inputImageMimeType: input.inputImageMimeType || null,
      status: 'queued',
      progress: 0,
      providerJobId: null,
      outputUrl: null,
      error: null,
      createdAt: now,
      updatedAt: now
    };

    await this.store.create(record);
    this.enqueue(record.id);
    return this.toPublic(record);
  }

  get(id, walletId = null) {
    const record = this.store.get(id);
    if (record && walletId && record.walletId && record.walletId !== walletId) return null;
    return record ? this.toPublic(record) : null;
  }

  list(limit, walletId = null) {
    return this.store.list(200)
      .filter(record => !walletId || !record.walletId || record.walletId === walletId)
      .slice(0, limit)
      .map(record => this.toPublic(record));
  }

  enqueue(id) {
    if (this.running.has(id)) return;
    this.running.add(id);
    setImmediate(() => this.run(id));
  }

  async run(id) {
    try {
      const record = this.store.get(id);
      if (!record) return;

      await this.store.update(id, { status: 'processing', progress: 2, error: null });
      const external = await this.provider.createGeneration(record);
      const initialOutput = external.status === 'succeeded'
        ? await this.persistOutput(id, external.outputUrl)
        : null;
      await this.store.update(id, {
        providerJobId: external.id,
        status: external.status === 'succeeded' ? 'succeeded' : 'processing',
        progress: external.progress || 4,
        outputUrl: initialOutput
      });

      if (external.status === 'succeeded') return;

      const deadline = Date.now() + this.maxGenerationMs;
      while (Date.now() < deadline) {
        await wait(this.pollIntervalMs);
        const result = await this.provider.getGeneration(external.id);

        if (result.status === 'failed') {
          throw new Error(result.error || 'O motor de vídeo não conseguiu concluir a geração');
        }

        const outputUrl = result.status === 'succeeded'
          ? await this.persistOutput(id, result.outputUrl)
          : null;

        await this.store.update(id, {
          status: result.status,
          progress: result.progress,
          outputUrl
        });

        if (result.status === 'succeeded') return;
      }

      throw new Error('A geração excedeu o tempo máximo permitido');
    } catch (error) {
      const failedRecord = this.store.get(id);
      if (failedRecord?.walletId && failedRecord.creditsCharged > 0 && this.creditStore) {
        await this.creditStore.refund(
          failedRecord.walletId,
          failedRecord.creditsCharged,
          'Reembolso automático de geração falhada',
          id
        );
      }
      await this.store.update(id, {
        status: 'failed',
        error: error.message || 'Erro inesperado na geração'
      });
    } finally {
      this.running.delete(id);
    }
  }

  async persistOutput(id, outputUrl) {
    if (!outputUrl || outputUrl.startsWith('/')) return outputUrl || null;
    if (!this.outputsDir) return outputUrl;

    await fs.mkdir(this.outputsDir, { recursive: true });
    const finalPath = path.join(this.outputsDir, `${id}.mp4`);
    const temporaryPath = `${finalPath}.tmp`;

    try {
      const response = await fetch(outputUrl, { redirect: 'follow' });
      if (!response.ok || !response.body) {
        throw new Error(`download respondeu com ${response.status}`);
      }

      const declaredSize = Number(response.headers.get('content-length'));
      if (Number.isFinite(declaredSize) && declaredSize > 250 * 1024 * 1024) {
        throw new Error('o vídeo ultrapassa 250 MB');
      }

      await pipeline(Readable.fromWeb(response.body), createWriteStream(temporaryPath));
      await fs.rename(temporaryPath, finalPath);
      return `/media/${path.basename(finalPath)}`;
    } catch (error) {
      await fs.unlink(temporaryPath).catch(() => {});
      console.error(`Não foi possível guardar localmente o vídeo ${id}: ${error.message}`);
      return outputUrl;
    }
  }

  toPublic(record) {
    const {
      inputImagePath,
      inputImageMimeType,
      providerJobId,
      ...publicRecord
    } = record;
    return publicRecord;
  }
}
