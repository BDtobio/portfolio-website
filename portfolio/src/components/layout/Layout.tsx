import React from 'react';
import NavBar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-[3.5rem]">
        <Outlet />
      </main>
     
    </div>
  );
};

export default Layout;
