import React from 'react';

interface ConnectionStatusProps {
  status: 'online' | 'offline' | 'scanning' | 'idle';
}

const statusColorMap: Record<string, string> = {
  online: 'bg-green-500',
  offline: 'bg-red-500',
  scanning: 'bg-yellow-500',
  idle: 'bg-gray-400',
};

export const ConnectionStatus: React.FC<ConnectionStatusProps> = ({ status }) => {
  const color = statusColorMap[status] || 'bg-gray-400';

  return (
    <div className="flex items-center space-x-2 text-sm">
      <span className={`inline-block w-3 h-3 rounded-full ${color}`} />
      <span className="capitalize text-gray-600 dark:text-gray-300">{status}</span>
    </div>
  );
};
