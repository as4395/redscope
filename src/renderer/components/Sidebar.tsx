import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/session', label: 'Sessions' },
  { path: '/settings', label: 'Settings' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-48 bg-gray-900 text-white h-screen p-4 fixed left-0 top-0">
      <h1 className="text-2xl font-bold mb-6">RedScope</h1>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block py-2 px-3 rounded hover:bg-red-700 transition ${
              location.pathname === item.path ? 'bg-red-600' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
