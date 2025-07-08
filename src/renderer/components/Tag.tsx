import React from 'react';

interface TagProps {
  label: string;
  color?: 'blue' | 'green' | 'red' | 'gray';
}

const colorMap = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  gray: 'bg-gray-200 text-gray-800',
};

export const Tag: React.FC<TagProps> = ({ label, color = 'gray' }) => {
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded ${colorMap[color]}`}>
      {label}
    </span>
  );
};
