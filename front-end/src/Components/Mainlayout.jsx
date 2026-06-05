import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const Mainlayout = () => {
  return (
    <div className="flex bg-[#13131a] min-h-screen w-full overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 p-8 min-w-0">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Mainlayout;