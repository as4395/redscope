import React from 'react';

interface FormGroupProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  description?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, htmlFor, children, description }) => {
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      {description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
      )}
      <div className="mt-1">{children}</div>
    </div>
  );
};

export default FormGroup;
