function normalizeUrl(value) {
  return String(value || '').replace(/\/$/, '');
}

export function encodeObjectPath(value) {
  return String(value)
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/');
}

export class SupabaseClient {
  constructor({ url, serviceRoleKey, fetchImpl = fetch }) {
    this.url = normalizeUrl(url);
    this.serviceRoleKey = String(serviceRoleKey || '');
    this.fetch = fetchImpl;

    if (!this.url || !this.serviceRoleKey) {
      throw new Error('SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY são obrigatórios');
    }
  }

  headers(extra = {}) {
    return {
      apikey: this.serviceRoleKey,
      Authorization: `Bearer ${this.serviceRoleKey}`,
      ...extra
    };
  }

  async parse(response, fallbackMessage) {
    if (response.ok) {
      if (response.status === 204) return null;
      const contentType = response.headers.get('content-type') || '';
      return contentType.includes('application/json') ? response.json() : null;
    }

    const body = await response.json().catch(() => ({}));
    const message = body.message || body.error || fallbackMessage || `Supabase respondeu com ${response.status}`;
    const error = new Error(typeof message === 'string' ? message : JSON.stringify(message));
    error.status = response.status;
    throw error;
  }
}
