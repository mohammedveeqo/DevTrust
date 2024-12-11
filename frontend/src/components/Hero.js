import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [points, setPoints] = useState([]);
  const [showVerification, setShowVerification] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [anomalyCount, setAnomalyCount] = useState(16);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prevPoints) =>
        prevPoints.map((point) => ({
          x: (point.x + 1) % 100,
          y: point.y,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

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
                  {showVerification && (
                    <div className="absolute top-2 right-2 flex items-center space-x-1 bg-green-900/20 text-green-500 px-2 py-1 rounded-full text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>Contract Verified</span>
                    </div>
                  )}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    {points.map((point, index) => (
                      <circle
                        key={index}
                        cx={point.x * (100 / 99) + '%'}
                        cy={100 - point.y + '%'}
                        r="2"
                        fill="#3b82f6"
                      />
                    ))}
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