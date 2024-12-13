import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell, Shield, Activity, AlertTriangle, ChevronDown, Sun, Moon, Search } from 'lucide-react';

const contractActivityData = [
  { month: 'JAN', transactions: 1200, anomalies: 3 },
  { month: 'FEB', transactions: 2100, anomalies: 2 },
  { month: 'MAR', transactions: 1800, anomalies: 4 },
  { month: 'APR', transactions: 2400, anomalies: 1 },
  { month: 'MAY', transactions: 1900, anomalies: 2 },
  { month: 'JUN', transactions: 2800, anomalies: 3 },
  { month: 'JUL', transactions: 3200, anomalies: 2 }
];

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

        {/* Sidebar Navigation */}
        <div className="space-y-1">
          <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mb-4`}>DASHBOARD</div>
          <Link to="/dashboard" className="flex items-center space-x-3 text-blue-500 bg-blue-50 w-full p-3 rounded-lg">
            <Activity className="w-4 h-4" />
            <span>Overview</span>
          </Link>
          <Link to="/milestones" className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'} w-full p-3 rounded-lg`}>
            <Shield className="w-4 h-4" />
            <span>Milestones</span>
          </Link>
          <Link to="/proof-of-work" className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'} w-full p-3 rounded-lg`}>
            <Activity className="w-4 h-4" />
            <span>Proof of Work</span>
          </Link>
          <Link to="/disputes" className={`flex items-center space-x-3 ${isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'} w-full p-3 rounded-lg`}>
            <AlertTriangle className="w-4 h-4" />
            <span>Disputes</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <div className={`p-6 border-b ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} w-5 h-5`} />
              <input
                type="text"
                placeholder="Search contracts or transactions"
                className={`pl-10 pr-4 py-2 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-900'} rounded-lg text-sm w-64 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <button onClick={toggleTheme} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Overview */}
          <div className="grid grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-lg font-semibold mb-4">Milestones</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">105</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">23</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>In Progress</p>
                </div>
              </div>
            </div>
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-lg font-semibold mb-4">Payments</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">$2.4M</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Paid out</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">$0.8M</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pending</p>
                </div>
              </div>
            </div>
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-lg font-semibold mb-4">Disputes</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">12</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Resolved</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">4</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pending</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Activity Chart */}
          <div className={`mt-6 p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Contract Activity</h2>
              <select className={`text-sm rounded-lg px-3 py-2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'}`}>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={contractActivityData}>
                  <XAxis dataKey="month" stroke={isDarkMode ? "#4B5563" : "#9CA3AF"} />
                  <YAxis stroke={isDarkMode ? "#4B5563" : "#9CA3AF"} />
                  <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#374151' : '#FFFFFF', borderColor: isDarkMode ? '#4B5563' : '#E5E7EB' }} />
                  <Line type="monotone" dataKey="transactions" stroke="#3B82F6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="anomalies" stroke="#EF4444" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className={`mt-6 rounded-xl p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <Link to="/activity-log" className={`flex items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                All activities <ChevronDown className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Smart Contract Update', category: 'Contract', status: 'Verified', color: 'green' },
                { name: 'Governance Proposal', category: 'Governance', status: 'Pending', color: 'yellow' },
                { name: 'Wallet Integration', category: 'Security', status: 'Completed', color: 'blue' }
              ].map((activity, index) => (
                <div key={index} className={`flex items-center justify-between py-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <Shield className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium">{activity.name}</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{activity.category}</div>
                    </div>
                  </div>
                  <div className={`text-sm text-${activity.color}-500`}>
                    {activity.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;