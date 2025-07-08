import React from 'react';

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '' }) => (
  <hr className={`border-t border-gray-300 dark:border-zinc-700 my-4 ${className}`} />
);
