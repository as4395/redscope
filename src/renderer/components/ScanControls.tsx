import React, { useState } from 'react';

interface ScanControlsProps {
  onScanComplete: (result: string) => void;
}

const ScanControls: React.FC<ScanControlsProps> = ({ onScanComplete }) => {
  const [target, setTarget] = useState('');
  const [scanning, setScanning] = useState(false);

  const handleScan = async () => {
    if (!target) return;
    setScanning(true);
    try {
      const result = await window.electronAPI.invoke('scan:run', {
        target,
        options: ['-T4', '-F']
      });

      await window.electronAPI.invoke('session:save', {
        timestamp: new Date().toISOString(),
        target,
        results: result,
      });

      onScanComplete(result);
    } catch (error) {
      console.error('Scan failed:', error);
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="flex gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Target (e.g. 192.168.0.1)"
        className="px-4 py-2 rounded text-black w-full"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        disabled={scanning}
      />
      <button
        className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white"
        onClick={handleScan}
        disabled={scanning}
      >
        {scanning ? 'Scanning...' : 'Start Scan'}
      </button>
    </div>
  );
};

export default ScanControls;
