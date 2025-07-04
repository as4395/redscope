import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-300">Welcome to RedScope. Begin a scan or view previous sessions.</p>
      {/* Add stats cards or recent scan summaries here */}
    </div>
  );
};

export default Dashboard;
