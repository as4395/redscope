export function saveToLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.warn(`Failed to store "${key}" in localStorage`);
  }
}

export function loadFromLocalStorage<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : null;
  } catch {
    console.warn(`Failed to read "${key}" from localStorage`);
    return null;
  }
}

export function removeFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
