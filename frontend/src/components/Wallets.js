// Wallets.js

import React from 'react';

const Wallets = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Wallet Monitoring</h1>

      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200 text-gray-800 text-left">
          <tr>
            <th className="py-3 px-4">Wallet Address</th>
            <th className="py-3 px-4">Last Interaction</th>
            <th className="py-3 px-4">Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4">0x123...abc</td>
            <td className="py-3 px-4">5 minutes ago</td>
            <td className="py-3 px-4">Transferred 5 ETH</td>
          </tr>
          <tr>
            <td className="py-3 px-4">0x456...def</td>
            <td className="py-3 px-4">10 minutes ago</td>
            <td className="py-3 px-4">Deployed Contract</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Wallets;
