import React from 'react';

interface CommandOutputProps {
  output: string;
}

export const CommandOutput: React.FC<CommandOutputProps> = ({ output }) => {
  return (
    <div className="bg-zinc-900 text-green-400 font-mono text-sm p-4 rounded shadow overflow-y-auto h-64 whitespace-pre-wrap">
      {output || 'No output yet.'}
    </div>
  );
};
