import React from 'react';

interface FormGroupProps {
  label: string;
  htmlFor?: string;
  error?: string;
  children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, htmlFor, error, children }) => (
  <div className="mb-4">
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-200">
      {label}
    </label>
    <div className="mt-1">{children}</div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default FormGroup;
