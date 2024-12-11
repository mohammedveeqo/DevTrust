// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About GuardChain</h3>
            <p className="text-sm">
              GuardChain offers comprehensive blockchain monitoring and governance tools to ensure transparency, security, and performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 4.5a9.79 9.79 0 0 1-2.82.77 4.93 4.93 0 0 0 2.17-2.71 9.86 9.86 0 0 1-3.1 1.19 4.92 4.92 0 0 0-8.38 4.48A13.93 13.93 0 0 1 1.64 3.15 4.92 4.92 0 0 0 3.2 9.86a4.88 4.88 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.83 4.92 4.92 0 0 1-2.21.08 4.92 4.92 0 0 0 4.6 3.41 9.87 9.87 0 0 1-6.1 2.11c-.4 0-.79 0-1.17-.04A13.94 13.94 0 0 0 7.55 21c9 0 13.92-7.47 13.92-13.93 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 24 4.5z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.54 6.42c-.77.34-1.6.57-2.47.67a4.33 4.33 0 0 0 1.88-2.37 8.68 8.68 0 0 1-2.75 1.05 4.3 4.3 0 0 0-7.36 3.91A12.23 12.23 0 0 1 2 4.72a4.3 4.3 0 0 0 1.33 5.74 4.3 4.3 0 0 1-1.94-.54v.05a4.3 4.3 0 0 0 3.45 4.22 4.32 4.32 0 0 1-1.93.07 4.31 4.31 0 0 0 4.02 2.98A8.65 8.65 0 0 1 2 19.54 12.2 12.2 0 0 0 6.65 21c7.94 0 12.29-6.58 12.29-12.29 0-.19 0-.39-.02-.58a8.77 8.77 0 0 0 2.14-2.22z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.54 0H2.46A2.46 2.46 0 0 0 0 2.46v19.08A2.46 2.46 0 0 0 2.46 24h10.26v-8.94H9.83v-3.45h2.89V9.41c0-2.86 1.75-4.42 4.3-4.42 1.22 0 2.27.09 2.57.13v2.98l-1.76.01c-1.38 0-1.65.66-1.65 1.62v2.12h3.29l-.43 3.45h-2.86V24h5.62A2.46 2.46 0 0 0 24 21.54V2.46A2.46 2.46 0 0 0 21.54 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} GuardChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;