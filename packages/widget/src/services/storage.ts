const STORAGE_PREFIX = 'ai_support_widget_';

export function getItem<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
}

export function setItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage might be full or disabled
  }
}

export function removeItem(key: string): void {
  try {
    localStorage.removeItem(STORAGE_PREFIX + key);
  } catch {
    // Ignore
  }
}

export function getSessionData(): { sessionToken: string; customerId: string; conversationId: string | null } | null {
  return getItem('session');
}

export function setSessionData(data: { sessionToken: string; customerId: string; conversationId: string | null }): void {
  setItem('session', data);
}

export function clearSessionData(): void {
  removeItem('session');
}
