import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
    {subtitle && (
      <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;
