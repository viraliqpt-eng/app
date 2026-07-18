import crypto from 'node:crypto';

export class TikTokSessionStore {
  constructor() {
    this.sessions = new Map();
    this.states = new Map();
  }

  createSession() {
    const id = crypto.randomBytes(32).toString('base64url');
    this.sessions.set(id, { createdAt: Date.now() });
    return id;
  }

  get(id) { return id ? this.sessions.get(id) : null; }
  delete(id) { if (id) this.sessions.delete(id); }

  createState(sessionId) {
    this.prune();
    const state = crypto.randomBytes(32).toString('base64url');
    this.states.set(state, { sessionId, expiresAt: Date.now() + 10 * 60 * 1000 });
    return state;
  }

  consumeState(state) {
    const value = this.states.get(state);
    this.states.delete(state);
    return value && value.expiresAt > Date.now() ? value.sessionId : null;
  }

  setTikTok(id, tokens, profile) {
    const current = this.sessions.get(id) || { createdAt: Date.now() };
    this.sessions.set(id, {
      ...current, tokens, profile,
      accessExpiresAt: Date.now() + Number(tokens.expires_in || 0) * 1000
    });
  }

  prune() {
    for (const [key, value] of this.states) if (value.expiresAt <= Date.now()) this.states.delete(key);
  }
}
