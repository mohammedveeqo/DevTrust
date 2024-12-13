import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Activity, AlertTriangle, ChevronRight } from 'lucide-react';

const contractActivityData = [
  { month: 'JAN', transactions: 1200, anomalies: 3 },
  { month: 'FEB', transactions: 2100, anomalies: 2 },
  { month: 'MAR', transactions: 1800, anomalies: 4 },
  { month: 'APR', transactions: 2400, anomalies: 1 },
  { month: 'MAY', transactions: 1900, anomalies: 2 },
  { month: 'JUN', transactions: 2800, anomalies: 3 },
  { month: 'JUL', transactions: 3200, anomalies: 2 }
];

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50 opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              <h1 className="text-5xl sm:text-6xl font-bold text-white">
                Secure Payments for Decentralized Projects
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Devtrust is a milestone-based payment system that empowers project owners and developers to collaborate transparently.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/signup" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </Link>
                <Link to="/pricing" className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative bg-[#0f172a] rounded-xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50 rounded-xl"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Contract Activity</h3>
                  <span className="text-sm text-gray-400">Last 7 Days</span>
                </div>
                <div className="bg-[#1a2234] h-48 rounded-lg relative overflow-hidden">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={contractActivityData}>
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }} />
                      <Line type="monotone" dataKey="transactions" stroke="#3B82F6" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="anomalies" stroke="#EF4444" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">Key Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white shadow-md rounded p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Milestone-Based Payments</h3>
            <p className="mt-4 text-gray-600">
              Escrow system and manual/automated milestone validation for secure project payments.
            </p>
          </div>
          <div className="bg-white shadow-md rounded p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Proof of Work</h3>
            <p className="mt-4 text-gray-600">
              Private and public proof of work options for transparent project progress.
            </p>
          </div>
          <div className="bg-white shadow-md rounded p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Dispute Resolution</h3>
            <p className="mt-4 text-gray-600">
              Neutral arbitration and stake-based voting for resolving payment disputes.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Powerful Dashboard</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-[#0f172a] rounded-xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50 rounded-xl"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Contract Activity</h3>
                  <span className="text-sm text-gray-400">Last 7 Days</span>
                </div>
                <div className="bg-[#1a2234] h-48 rounded-lg relative overflow-hidden">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={contractActivityData}>
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }} />
                      <Line type="monotone" dataKey="transactions" stroke="#3B82F6" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="anomalies" stroke="#EF4444" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start text-left">
              <h3 className="text-3xl font-bold text-gray-800">Comprehensive Project Monitoring</h3>
              <p className="mt-4 text-gray-600">
                The Devtrust dashboard provides project owners and developers with a centralized view of their projects, including milestone progress, payment status, and dispute resolution.
              </p>
              <div className="mt-8">
                <Link to="/dashboard" className="flex items-center text-blue-600 hover:text-blue-700">
                  Explore the Dashboard <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">What Our Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div className="bg-white shadow-md rounded p-6">
            <p className="text-gray-600">"Devtrust has transformed the way we manage payments to our developers. The transparent, milestone-based system gives us peace of mind."</p>
            <p className="mt-4 text-gray-800 font-bold">- Project Owner</p>
          </div>
          <div className="bg-white shadow-md rounded p-6">
            <p className="text-gray-600">"The Devtrust platform makes it easy for me to get paid for my work. The public proof of work feature is especially valuable."</p>
            <p className="mt-4 text-gray-800 font-bold">- Developer</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <h2 className="text-4xl font-bold">Join the Devtrust Network</h2>
        <p className="text-lg mt-4">Experience the future of decentralized project payments.</p>
        <div className="mt-6">
          <Link to="/signup" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-200">
            Get Started <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;