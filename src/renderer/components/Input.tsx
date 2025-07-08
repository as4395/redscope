import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input: React.FC<InputProps> = ({ id, ...props }) => {
  return (
    <input
      id={id}
      {...props}
      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white"
    />
  );
};

export default Input;
