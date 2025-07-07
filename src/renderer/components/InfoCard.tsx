import React from 'react';

interface InfoCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-gray-800 rounded shadow p-4 flex items-center justify-between">
    <div>
      <h4 className="text-sm text-gray-500 dark:text-gray-400">{title}</h4>
      <p className="text-xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
    {icon && <div className="text-2xl text-red-600">{icon}</div>}
  </div>
);

export default InfoCard;
