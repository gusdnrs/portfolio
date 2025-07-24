import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">

      <Header></Header>

      <main>
        {children}
      </main>

      <Footer></Footer>
      
    </div>
  );
};

export default Layout;
