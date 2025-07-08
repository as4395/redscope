import React from 'react';
import clsx from 'clsx';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, className, ariaLabel }) => (
  <button
    onClick={onClick}
    className={clsx(
      'p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2',
      className
    )}
    aria-label={ariaLabel}
  >
    {icon}
  </button>
);

export default IconButton;
