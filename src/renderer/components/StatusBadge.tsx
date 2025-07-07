import React from 'react';

interface StatusBadgeProps {
  status: 'pending' | 'running' | 'success' | 'error';
}

const statusColors: Record<StatusBadgeProps['status'], string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  running: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  error: 'bg-red-100 text-red-800',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[status]}`}>
      {status.toUpperCase()}
    </span>
  );
};

export default StatusBadge;
