import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-600" />
      <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">Loading...</span>
    </div>
  );
};

export default LoadingIndicator;
