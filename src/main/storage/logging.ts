import fs from 'fs/promises';
import path from 'path';

const LOG_FILE = path.join(__dirname, '../../storage/scans.log.json');

interface ScanLogEntry {
  timestamp: string;
  engine: 'nmap' | 'masscan';
  target: string;
  options: string[];
  result: any;
}

/**
 * Appends a scan result to the persistent log file.
 */
export async function logScanResult(entry: ScanLogEntry): Promise<void> {
  let logs: ScanLogEntry[] = [];

  try {
    const existing = await fs.readFile(LOG_FILE, 'utf-8');
    logs = JSON.parse(existing);
  } catch {
    // Start fresh if file is empty or doesn't exist
    logs = [];
  }

  logs.push({
    ...entry,
    timestamp: new Date().toISOString(),
  });

  await fs.writeFile(LOG_FILE, JSON.stringify(logs, null, 2));
}
