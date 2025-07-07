import React from 'react';
import { useTheme } from '../lib/hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-sm border px-3 py-1 rounded-md transition-all bg-white dark:bg-gray-800 dark:text-white"
    >
      {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </button>
  );
};

export default ThemeToggle;
