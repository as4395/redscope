import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
    {title}
  </h2>
);

export default SectionHeader;
