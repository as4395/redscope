import React from 'react';
import { ScanSession } from '../lib/hooks/useSession';
import StatusBadge from './StatusBadge';

interface Props {
  sessions: ScanSession[];
}

const SessionTable: React.FC<Props> = ({ sessions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="bg-gray-100 dark:bg-gray-800 uppercase text-xs font-bold">
          <tr>
            <th className="py-2 px-4">Target</th>
            <th className="py-2 px-4">Result</th>
            <th className="py-2 px-4">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr
              key={session.id}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <td className="py-2 px-4">{session.target}</td>
              <td className="py-2 px-4">
                <StatusBadge status="success" />
              </td>
              <td className="py-2 px-4">
                {new Date(session.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SessionTable;
