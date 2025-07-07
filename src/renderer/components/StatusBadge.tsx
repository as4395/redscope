import React from 'react';

interface Props {
  status: 'success' | 'error' | 'running' | 'idle';
}

const statusMap = {
  success: { text: 'Success', color: 'bg-green-600' },
  error: { text: 'Error', color: 'bg-red-600' },
  running: { text: 'Running', color: 'bg-yellow-500' },
  idle: { text: 'Idle', color: 'bg-gray-400' },
};

const StatusBadge: React.FC<Props> = ({ status }) => {
  const { text, color } = statusMap[status];

  return (
    <span
      className={`text-white text-xs font-medium px-2 py-1 rounded ${color}`}
    >
      {text}
    </span>
  );
};

export default StatusBadge;
