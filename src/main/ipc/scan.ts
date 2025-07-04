import { runNmapScan } from '../scan/nmap';
import { runMasscanScan } from '../scan/masscan';
import { logScanResult } from '../storage/logging';

interface ScanRequest {
  target: string;
  options?: string[];
}

/**
 * Runs a scan and logs results. Uses Nmap by default, falls back to Masscan.
 */
export async function runScan({ target, options = [] }: ScanRequest): Promise<any> {
  if (!target || typeof target !== 'string' || !target.trim()) {
    throw new Error('Invalid scan target.');
  }

  try {
    const result = await runNmapScan(target, options);
    await logScanResult({ engine: 'nmap', target, options, result });
    return result;
  } catch (nmapError) {
    console.warn(`Nmap scan failed for ${target}. Falling back to Masscan.`);

    try {
      const result = await runMasscanScan(target, options);
      await logScanResult({ engine: 'masscan', target, options, result });
      return result;
    } catch (masscanError) {
      console.error(`Masscan scan failed for ${target}.`);
      throw new Error('All scan engines failed.');
    }
  }
}
