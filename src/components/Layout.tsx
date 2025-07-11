import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Stars from './Stars';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-japanese-shiro dark:bg-japanese-navy text-gray-900 dark:text-white relative">
      <Stars />
      <Header />
      <main className="pt-16 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;