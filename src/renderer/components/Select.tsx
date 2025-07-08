import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  id: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ id, value, options, onChange }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
