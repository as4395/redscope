import React from 'react';
import StatusBadge from './StatusBadge';

interface ScanCardProps {
  target: string;
  status: 'pending' | 'running' | 'success' | 'error';
  resultPreview?: string;
  onClick?: () => void;
}

const ScanCard: React.FC<ScanCardProps> = ({ target, status, resultPreview, onClick }) => {
  return (
    <div
      className="border dark:border-gray-700 rounded p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">{target}</h4>
        <StatusBadge status={status} />
      </div>
      {resultPreview && (
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{resultPreview}</p>
      )}
    </div>
  );
};

export default ScanCard;
