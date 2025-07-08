import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
}

const Textarea: React.FC<TextareaProps> = ({ id, ...props }) => {
  return (
    <textarea
      id={id}
      {...props}
      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white"
    />
  );
};

export default Textarea;
