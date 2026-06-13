import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const Mainlayout = () => {
  return (
    <div className="bg-[#13131a] min-h-screen w-full">
      <Sidebar />
      {/* ml-[175px] matches the sidebar's fixed w-[175px] exactly */}
      <main className="ml-[175px] min-h-screen bg-[#13131a] text-white font-sans">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Mainlayout;