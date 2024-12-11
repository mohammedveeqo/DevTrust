import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const AnimatedDashboard = () => {
  const [currentPoint, setCurrentPoint] = useState({ x: 0, y: 50 });
  const [showVerification, setShowVerification] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [anomalyCount, setAnomalyCount] = useState(16);

  useEffect(() => {
    // Animation intervals...
  }, []);

  return (
    <div className="bg-[#0f172a] rounded-xl shadow-xl overflow-hidden">
      {/* Search Bar */}
      <div className="flex items-center gap-4 p-4 border-b border-gray-800">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search contracts or transactions"
            className="w-full bg-gray-900 text-gray-300 px-4 py-2 rounded-lg text-sm border border-gray-800"
            disabled
          />
        </div>
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Shield className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Contract Activity</h3>
            <span className="text-sm text-gray-400">Last 7 Days</span>
          </div>
          <div className="bg-[#1a2234] h-40 rounded-lg relative overflow-hidden">
            {showVerification && (
              <div className="absolute top-2 right-2 flex items-center space-x-1 bg-green-900/20 text-green-500 px-2 py-1 rounded-full text-xs">
                <CheckCircle className="w-3 h-3" />
                <span>Contract Verified</span>
              </div>
            )}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <path
                d={`M 0 ${100 - currentPoint.y} ${Array.from({ length: 100 }, (_, i) => 
                  `L ${i * (100 / 99)} ${100 - (50 + Math.sin((i - currentPoint.x) * 0.1) * 20)}`
                ).join(' ')}`}
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Recent Alerts</h3>
          <div className="space-y-3">
            <div className="bg-red-500/10 rounded-lg border border-red-900/50 p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  Anomaly
                </span>
                <span className="text-red-500 text-sm">HIGH</span>
              </div>
              <p className="text-gray-400 text-sm">
                {anomalyCount} unusual transactions detected
              </p>
            </div>
            <div className="bg-yellow-500/10 rounded-lg border border-yellow-900/50 p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white">Contract</span>
                <span className="text-yellow-500 text-sm">MEDIUM</span>
              </div>
              <p className="text-gray-400 text-sm">
                Smart contract version mismatch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedDashboard;