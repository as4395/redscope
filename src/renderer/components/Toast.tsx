import React from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

const toastColors: Record<string, string> = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
};

const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
  return (
    <div className={`fixed bottom-4 right-4 px-4 py-2 text-white rounded shadow ${toastColors[type]}`}>
      {message}
    </div>
  );
};

export default Toast;
