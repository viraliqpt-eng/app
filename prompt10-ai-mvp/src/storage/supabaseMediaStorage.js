import { encodeObjectPath } from './supabaseClient.js';

const MAX_VIDEO_BYTES = 250 * 1024 * 1024;

export class SupabaseMediaStorage {
  constructor({ client, bucket = 'prompt10-media' }) {
    this.client = client;
    this.bucket = bucket;
  }

  async persistFromUrl({ id, sourceUrl }) {
    if (!sourceUrl || sourceUrl.startsWith('/')) return sourceUrl || null;

    const source = await this.client.fetch(sourceUrl, { redirect: 'follow' });
    if (!source.ok || !source.body) {
      throw new Error(`O download do vídeo respondeu com ${source.status}`);
    }

    const declaredSize = Number(source.headers.get('content-length'));
    if (Number.isFinite(declaredSize) && declaredSize > MAX_VIDEO_BYTES) {
      throw new Error('O vídeo ultrapassa 250 MB');
    }

    const objectPath = `generations/${id}.mp4`;
    const encodedBucket = encodeURIComponent(this.bucket);
    const encodedPath = encodeObjectPath(objectPath);
    const response = await this.client.fetch(
      `${this.client.url}/storage/v1/object/${encodedBucket}/${encodedPath}`,
      {
        method: 'POST',
        headers: this.client.headers({
          'Content-Type': source.headers.get('content-type') || 'video/mp4',
          'x-upsert': 'true'
        }),
        body: source.body,
        duplex: 'half'
      }
    );
    await this.client.parse(response, 'Não foi possível guardar o vídeo no armazenamento persistente');

    return `${this.client.url}/storage/v1/object/public/${encodedBucket}/${encodedPath}`;
  }
}
