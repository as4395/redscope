import fs from 'fs/promises';
import path from 'path';

const SESSION_FILE = path.join(__dirname, '../../storage/session.json');

export interface SessionData {
  recentTargets: string[];
  settings: {
    theme: 'dark' | 'light';
    saveLogs: boolean;
  };
}

/**
 * Loads the current user session from disk, or creates a default one.
 */
export async function loadSession(): Promise<SessionData> {
  try {
    const data = await fs.readFile(SESSION_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {
      recentTargets: [],
      settings: {
        theme: 'dark',
        saveLogs: true,
      },
    };
  }
}

/**
 * Saves the current session state to disk.
 */
export async function saveSession(session: SessionData): Promise<void> {
  await fs.writeFile(SESSION_FILE, JSON.stringify(session, null, 2));
}
