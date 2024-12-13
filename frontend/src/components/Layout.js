import React, { useState } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-[#0B1120] text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;