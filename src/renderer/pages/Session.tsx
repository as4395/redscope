import React, { useEffect, useState } from 'react';

interface SessionData {
  timestamp: string;
  target: string;
  results: string;
}

const Session: React.FC = () => {
  const [sessions, setSessions] = useState<SessionData[]>([]);

  useEffect(() => {
    window.electronAPI.invoke('session:get').then((data) => {
      setSessions(data || []);
    });
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Saved Sessions</h1>
      {sessions.length === 0 ? (
        <p className="text-gray-400">No sessions saved yet.</p>
      ) : (
        <ul className="space-y-4">
          {sessions.map((session, index) => (
            <li key={index} className="p-4 border border-gray-600 rounded">
              <p className="text-red-400 font-medium">Target: {session.target}</p>
              <p className="text-sm text-gray-300">Date: {new Date(session.timestamp).toLocaleString()}</p>
              <pre className="mt-2 bg-gray-800 p-2 text-sm overflow-x-auto">{session.results}</pre>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Session;
