import React from 'react';

interface SessionInfoProps {
  lastScan: string | null;
  target: string | null;
}

const SessionInfo: React.FC<SessionInfoProps> = ({ lastScan, target }) => {
  return (
    <div className="mb-4 text-sm text-gray-700 dark:text-gray-300">
      <p><strong>Target:</strong> {target || 'N/A'}</p>
      <p><strong>Last Scan:</strong> {lastScan || 'N/A'}</p>
    </div>
  );
};

export default SessionInfo;
