import { useState } from 'react';
import { ScanResult, ScanOptions } from '../../types';

export function useScan() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runScan = async (target: string, options: ScanOptions) => {
    setLoading(true);
    setError(null);
    try {
      const res: ScanResult = await window.electron.invoke('scan:run', {
        target,
        options,
      });
      setResult(res);
    } catch (err) {
      console.error(err);
      setError('Scan failed. Please check your input or try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, result, error, runScan };
}
