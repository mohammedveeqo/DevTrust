import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, AlertTriangle, CheckCircle, X } from 'lucide-react';

const ProofOfWork = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [submissions, setSubmissions] = useState([
    { id: 1, project: 'Project Alpha', link: 'http://github.com/project-alpha', date: '2023-12-01', status: 'Approved' },
    { id: 2, project: 'Project Beta', link: 'http://github.com/project-beta', date: '2023-12-05', status: 'Pending' },
    { id: 3, project: 'Project Gamma', link: 'http://github.com/project-gamma', date: '2023-12-10', status: 'Rejected' },
  ]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-[#0B1120] text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Sidebar */}
      <aside className={`w-64 p-6 border-r ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center space-x-2 mb-10">
          <Shield className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">DevTrust</span>
        </div>
        <div className="space-y-1">
          <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mb-4`}>DASHBOARD</div>
          <Link
            to="/dashboard"
            className={`flex items-center space-x-3 ${
              isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
            } w-full p-3 rounded-lg`}
          >
            <Activity className="w-4 h-4" />
            <span>Overview</span>
          </Link>
          <Link to="/proof-of-work" className="flex items-center space-x-3 text-blue-500 bg-blue-50 w-full p-3 rounded-lg">
            <Activity className="w-4 h-4" />
            <span>Proof of Work</span>
          </Link>
          {/* Add other sidebar links if needed */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className={`p-6 border-b ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Proof of Work</h1>
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {isDarkMode ? <Shield className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Proof of Work Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className={`p-4 rounded-lg border ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    : 'bg-white border-gray-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-medium">{submission.project}</h2>
                  {submission.status === 'Approved' && (
                    <div className="flex items-center space-x-1 text-green-500">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Approved</span>
                    </div>
                  )}
                  {submission.status === 'Pending' && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Activity className="w-4 h-4" />
                      <span className="text-sm">Pending</span>
                    </div>
                  )}
                  {submission.status === 'Rejected' && (
                    <div className="flex items-center space-x-1 text-red-500">
                      <X className="w-4 h-4" />
                      <span className="text-sm">Rejected</span>
                    </div>
                  )}
                </div>
                <a
                  href={submission.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-500'} hover:underline`}
                >
                  View Submission
                </a>
                <p className="text-sm text-gray-500">Submitted on: {submission.date}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProofOfWork;
