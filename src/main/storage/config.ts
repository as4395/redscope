import fs from 'fs';
import path from 'path';
import { app } from 'electron';

const CONFIG_FILE = path.join(app.getPath('userData'), 'config.json');

export function loadConfig(): Record<string, any> {
  try {
    if (!fs.existsSync(CONFIG_FILE)) return {};
    const data = fs.readFileSync(CONFIG_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to load config:', err);
    return {};
  }
}

export function saveConfig(config: Record<string, any>): boolean {
  try {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Failed to save config:', err);
    return false;
  }
}
