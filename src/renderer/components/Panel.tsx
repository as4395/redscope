import React from 'react';

interface PanelProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({ title, description, children }) => {
  return (
    <div className="p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded shadow-sm mb-4">
      {title && <h2 className="text-lg font-semibold mb-1">{title}</h2>}
      {description && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{description}</p>}
      {children}
    </div>
  );
};
