// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, AlertTriangle, ChevronRight, Menu, X, Check, ExternalLink } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">GuardChain</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/features" className="text-gray-600 hover:text-blue-600 font-medium">Features</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</Link>
              <Link to="/docs" className="text-gray-600 hover:text-blue-600 font-medium">Docs</Link>
            </div>
  
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
              <Link to="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </Link>
            </div>
  
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
  
          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link to="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/features" className="block text-gray-600 hover:text-blue-600">Features</Link>
              <Link to="/pricing" className="block text-gray-600 hover:text-blue-600">Pricing</Link>
              <Link to="/docs" className="block text-gray-600 hover:text-blue-600">Docs</Link>
              <div className="pt-4 space-y-2">
                <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>
                <Link to="/signup" className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
                  Start Free Trial
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };

export default Navbar;