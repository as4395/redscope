import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseStyle = 'px-4 py-2 rounded font-medium focus:outline-none';
  const variantStyle =
    variant === 'primary'
      ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600';

  return (
    <button {...props} className={`${baseStyle} ${variantStyle}`}>
      {children}
    </button>
  );
};

export default Button;
