import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from './ui/toaster';
import CustomCursor from './CustomCursor';

const Layout = () => {
  return (
    <>
      {/* <CustomCursor /> */}
      <div className="min-h-screen bg-[#0C0D0D] text-white overflow-x-hidden flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default Layout;