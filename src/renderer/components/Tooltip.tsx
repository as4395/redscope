import React, { useState } from 'react';

interface TooltipProps {
  message: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {visible && (
        <div className="absolute z-10 mt-2 w-max px-2 py-1 text-sm text-white bg-gray-900 rounded shadow">
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
