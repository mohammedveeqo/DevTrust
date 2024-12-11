// Dashboard.js

import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Welcome to Your Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold">Active Contracts</h2>
          <p className="text-5xl font-bold mt-2">15</p>
          <p className="mt-4">Monitor your deployed contracts for integrity.</p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold">Anomalies Detected</h2>
          <p className="text-5xl font-bold mt-2">3</p>
          <p className="mt-4">Identify and resolve security risks quickly.</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold">Wallet Interactions</h2>
          <p className="text-5xl font-bold mt-2">245</p>
          <p className="mt-4">Analyze recent wallet activities.</p>
        </div>
      </div>

      {/* Charts and Graphs */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800">Contract Health Over Time</h2>
          <div className="mt-4">
            {/* Replace with a chart library like Chart.js or Recharts */}
            <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800">Wallet Activity Heatmap</h2>
          <div className="mt-4">
            {/* Replace with a chart library */}
            <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            <li className="py-4 flex justify-between items-center">
              <span className="text-gray-600">Wallet 0x123...abc interacted with Contract 0x456...def</span>
              <span className="text-sm text-gray-500">5 minutes ago</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span className="text-gray-600">Anomaly detected in Contract 0x789...xyz</span>
              <span className="text-sm text-gray-500">10 minutes ago</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span className="text-gray-600">Proposal approved: Increase staking rewards</span>
              <span className="text-sm text-gray-500">1 hour ago</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Alerts</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            <li className="py-4 flex justify-between items-center">
              <span className="text-red-600 font-bold">Critical</span>
              <span className="text-gray-600">Anomaly detected in Contract 0x789...xyz</span>
              <span className="text-sm text-gray-500">5 minutes ago</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span className="text-yellow-600 font-bold">Warning</span>
              <span className="text-gray-600">Wallet 0x123...abc showing unusual activity</span>
              <span className="text-sm text-gray-500">15 minutes ago</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span className="text-green-600 font-bold">Info</span>
              <span className="text-gray-600">Contract 0x456...def successfully deployed</span>
              <span className="text-sm text-gray-500">1 hour ago</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-16 bg-blue-600 text-white py-10 text-center rounded-lg">
        <h2 className="text-3xl font-bold">Stay Ahead of Blockchain Threats</h2>
        <p className="mt-4">Monitor, analyze, and secure your blockchain operations in real-time.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200">Explore More Features</button>
      </div>
    </div>
  );
};

export default Dashboard;
