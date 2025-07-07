import fs from 'fs';
import path from 'path';
import { app } from 'electron';

const SESSION_FILE = path.join(app.getPath('userData'), 'session.json');

// Retrieve session data from disk
export function getSessionData(): Record<string, any> {
  try {
    if (!fs.existsSync(SESSION_FILE)) return {};
    const data = fs.readFileSync(SESSION_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to read session data:', err);
    return {};
  }
}

// Save session data to disk
export function saveSessionData(data: Record<string, any>): boolean {
  try {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Failed to save session data:', err);
    return false;
  }
}
