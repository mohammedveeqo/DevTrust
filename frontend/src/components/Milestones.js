import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, CheckCircle, X } from 'lucide-react';

const Milestones = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [milestones, setMilestones] = useState([
    { id: 1, name: 'Project Alpha', status: 'Completed', dueDate: '2024-01-15', payment: '$5,000' },
    { id: 2, name: 'Project Beta', status: 'In Progress', dueDate: '2024-02-20', payment: '$10,000' },
    { id: 3, name: 'Project Gamma', status: 'Pending', dueDate: '2024-03-10', payment: '$8,000' },
  ]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-[#0B1120] text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Sidebar */}
      <aside className={`w-64 p-6 border-r ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        {/* Sidebar content */}
        <div className="flex items-center space-x-2 mb-10">
          <Shield className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">DevTrust</span>
        </div>
        <div className="space-y-1">
          <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mb-4`}>DASHBOARD</div>
          <Link to="/dashboard" className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'} w-full p-3 rounded-lg`}>
            <Activity className="w-4 h-4" />
            <span>Overview</span>
          </Link>
          <Link to="/milestones" className="flex items-center space-x-3 text-blue-500 bg-blue-50 w-full p-3 rounded-lg">
            <Shield className="w-4 h-4" />
            <span>Milestones</span>
          </Link>
          {/* Other sidebar links */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className={`p-6 border-b ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Milestones</h1>
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {isDarkMode ? <Shield className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Milestones Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className={`p-4 rounded-lg border ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    : 'bg-white border-gray-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-medium">{milestone.name}</h2>
                  {milestone.status === 'Completed' && (
                    <div className="flex items-center space-x-1 text-green-500">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Completed</span>
                    </div>
                  )}
                  {milestone.status === 'In Progress' && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Activity className="w-4 h-4" />
                      <span className="text-sm">In Progress</span>
                    </div>
                  )}
                  {milestone.status === 'Pending' && (
                    <div className="flex items-center space-x-1 text-gray-500">
                      <X className="w-4 h-4" />
                      <span className="text-sm">Pending</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500">Due Date: {milestone.dueDate}</p>
                <p className="text-sm text-gray-500">Payment: {milestone.payment}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Milestones;