import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    features: [
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Monitoring', href: '/monitoring' },
      { name: 'Governance', href: '/governance' },
      { name: 'Security', href: '/security' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API', href: '/api' },
      { name: 'Status', href: '/status' },
      { name: 'Blog', href: '/blog' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
      { name: 'GitHub', href: '#', icon: Github },
    ]
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">GuardChain</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              Secure blockchain monitoring and governance platform.
            </p>
            <div className="mt-6">
              <a href="mailto:contact@guardchain.io" className="flex items-center text-sm text-gray-500 hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2" />
                contact@guardchain.io
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="col-span-2 md:col-span-6 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase">Features</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.features.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-gray-500 hover:text-blue-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase">Resources</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-gray-500 hover:text-blue-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-gray-500 hover:text-blue-600">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-2 md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Stay Updated</h3>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="mt-2 w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                Subscribe
              </button>
            </div>
            <div className="mt-6 flex space-x-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} GuardChain. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;