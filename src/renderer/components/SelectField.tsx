import React from 'react';

interface SelectFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-900 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
