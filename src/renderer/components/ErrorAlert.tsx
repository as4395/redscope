import React from 'react';

interface Props {
  message: string;
}

const ErrorAlert: React.FC<Props> = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded mb-4 text-sm">
      <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorAlert;
