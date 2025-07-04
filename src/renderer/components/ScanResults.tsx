import React from 'react';

interface ScanResultsProps {
  results: string;
}

const ScanResults: React.FC<ScanResultsProps> = ({ results }) => {
  if (!results) {
    return <p className="text-gray-400">Scan results will appear here.</p>;
  }

  return (
    <div className="bg-gray-900 p-4 rounded-lg overflow-auto text-sm text-white border border-gray-700">
      <pre>{results}</pre>
    </div>
  );
};

export default ScanResults;
