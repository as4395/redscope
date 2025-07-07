import React from 'react';

interface ErrorBannerProps {
  message: string;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-800 border border-red-400 px-4 py-2 rounded mb-4 text-sm">
      <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorBanner;
