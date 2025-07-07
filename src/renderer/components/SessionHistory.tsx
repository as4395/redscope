import React from 'react';

interface SessionItem {
  id: string;
  timestamp: string;
  target: string;
}

interface Props {
  sessions: SessionItem[];
  onSelect: (sessionId: string) => void;
}

const SessionHistory: React.FC<Props> = ({ sessions, onSelect }) => {
  if (sessions.length === 0) {
    return <p className="text-gray-500 text-sm">No sessions found.</p>;
  }

  return (
    <div className="space-y-2">
      {sessions.map((s) => (
        <div
          key={s.id}
          onClick={() => onSelect(s.id)}
          className="cursor-pointer p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <div className="font-semibold">{s.target}</div>
          <div className="text-xs text-gray-500">{s.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default SessionHistory;
