import React from 'react';

interface StatusBadgeProps {
  status: 'pending' | 'running' | 'success' | 'error';
}

const statusMap: Record<string, { label: string; color: string }> = {
  pending: { label: 'Pending', color: 'bg-yellow-500' },
  running: { label: 'Running', color: 'bg-blue-500' },
  success: { label: 'Success', color: 'bg-green-600' },
  error: { label: 'Error', color: 'bg-red-600' },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const badge = statusMap[status];

  return (
    <span
      className={`text-xs text-white px-2 py-1 rounded-full ${badge.color}`}
    >
      {badge.label}
    </span>
  );
};

export default StatusBadge;
