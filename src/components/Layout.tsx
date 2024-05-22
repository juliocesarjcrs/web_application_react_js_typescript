import React, { ReactNode } from 'react';
import UserSelect from './UserSelect';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h3>Aplicación web</h3>
        <Navbar />
        <UserSelect />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
