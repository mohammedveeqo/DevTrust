import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [points, setPoints] = useState([
    { x: 0, y: 50 },
    { x: 10, y: 60 },
    { x: 20, y: 40 },
    { x: 30, y: 55 },
    { x: 40, y: 45 },
    { x: 50, y: 65 },
    { x: 60, y: 50 },
    { x: 70, y: 60 },
    { x: 80, y: 40 },
    { x: 90, y: 55 },
  ]);
  const [alertState, setAlertState] = useState('verified'); // 'verified', 'warning', 'error'
  const [anomalyCount, setAnomalyCount] = useState(16);

  // Update the points to animate the line
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prevPoints) =>
        prevPoints.map((point, index) => ({
          x: (point.x + 1) % 100, // Ensure x stays within 0-100
          y: point.y + Math.sin((index + Date.now() / 1000) * 0.5) * 2, // Smooth variation in y
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Cycle through alert states
  useEffect(() => {
    const timeout = setInterval(() => {
      setAlertState((prevState) => {
        switch (prevState) {
          case 'verified':
            return 'warning';
          case 'warning':
            return 'error';
          default:
            return 'verified';
        }
      });
    }, 5000); // Change alert every 5 seconds

    return () => clearInterval(timeout);
  }, []);

  // Generate the path string for the line
  const generatePath = (points) => {
    return points
      .map((point, index) =>
        index === 0
          ? `M ${point.x} ${100 - point.y}`
          : `L ${point.x} ${100 - point.y}`
      )
      .join(' ');
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Welcome to GuardChain
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your trusted solution for blockchain governance and monitoring.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Right side - Dashboard Preview */}
          <div className="relative bg-[#0f172a] rounded-xl shadow-xl overflow-hidden">
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
                  <h3 className="text-lg font-semibold text-white">
                    Contract Activity
                  </h3>
                  <span className="text-sm text-gray-400">Last 7 Days</span>
                </div>
                <div className="bg-[#1a2234] h-40 rounded-lg relative overflow-hidden">
                  {alertState === 'verified' && (
                    <div className="absolute top-2 right-2 flex items-center space-x-1 bg-green-900/20 text-green-500 px-2 py-1 rounded-full text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>Contract Verified</span>
                    </div>
                  )}
                  {alertState === 'warning' && (
                    <div className="absolute top-2 right-2 flex items-center space-x-1 bg-yellow-900/20 text-yellow-500 px-2 py-1 rounded-full text-xs">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Warning: Potential Issue</span>
                    </div>
                  )}
                  {alertState === 'error' && (
                    <div className="absolute top-2 right-2 flex items-center space-x-1 bg-red-900/20 text-red-500 px-2 py-1 rounded-full text-xs">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Error Detected</span>
                    </div>
                  )}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={generatePath(points)}
                      stroke="#3b82f6"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Recent Alerts
                </h3>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
