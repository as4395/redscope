import React from 'react';

interface ErrorBannerProps {
  message: string;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-700 p-3 rounded mb-4 border border-red-400">
      {message}
    </div>
  );
};

export default ErrorBanner;
