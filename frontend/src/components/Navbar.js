// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-300">GuardChain</Link>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/pricing" className="hover:text-blue-300">Pricing</Link>
          <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
          <Link to="/wallets" className="hover:text-blue-300">Wallets</Link>
          <Link to="/governance" className="hover:text-blue-300">Governance</Link>
          <Link to="/alerts" className="hover:text-blue-300">Alerts</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/login" className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-gray-200">Login</Link>
          <Link to="/signup" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Sign Up</Link>
        </div>
        <button className="md:hidden text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;