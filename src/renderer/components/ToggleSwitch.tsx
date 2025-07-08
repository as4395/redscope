import React from 'react';

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
          checked ? 'bg-red-600' : 'bg-gray-300 dark:bg-zinc-600'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            checked ? 'translate-x-6' : ''
          }`}
        />
      </button>
    </div>
  );
};
