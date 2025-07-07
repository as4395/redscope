import React from 'react';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className="text-center py-12 text-gray-500 dark:text-gray-400 text-sm">
      {message}
    </div>
  );
};

export default EmptyState;
