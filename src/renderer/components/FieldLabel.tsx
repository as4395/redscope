import React from 'react';

interface FieldLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export const FieldLabel: React.FC<FieldLabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {children}
    </label>
  );
};
