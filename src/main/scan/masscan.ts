import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

/**
 * Basic Masscan wrapper (JSON-style result returned).
 */
export async function runMasscanScan(target: string, options: string[] = []): Promise<any> {
  const args = ['-p0-65535', '--rate', '1000', '-oJ', '-', target, ...options];

  const { stdout } = await execFileAsync('masscan', args, { timeout: 15000 });
  return JSON.parse(stdout);
}
