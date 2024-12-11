// Governance.js

import React from 'react';

const Governance = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Governance</h1>

      <div className="bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Active Proposals</h2>
        <ul className="space-y-4">
          <li className="bg-gray-50 p-4 rounded border-l-4 border-blue-600">
            <p className="text-gray-800 font-bold">Proposal #1: Increase staking rewards</p>
            <p className="text-gray-600 mt-2">Status: <span className="text-blue-600 font-semibold">Approved</span></p>
          </li>
          <li className="bg-gray-50 p-4 rounded border-l-4 border-yellow-600">
            <p className="text-gray-800 font-bold">Proposal #2: Add new governance members</p>
            <p className="text-gray-600 mt-2">Status: <span className="text-yellow-600 font-semibold">Pending</span></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Governance;
