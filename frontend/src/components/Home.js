import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, AlertTriangle } from 'lucide-react';
import Hero from './Hero'; // Import the Hero component

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose GuardChain?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white shadow-md rounded p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Post-Deployment Monitoring</h3>
            <p className="mt-4 text-gray-600">Ensure your smart contracts remain secure with real-time monitoring and integrity checks.</p>
          </div>
          <div className="bg-white shadow-md rounded p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Wallet Activity Tracking</h3>
            <p className="mt-4 text-gray-600">Detect suspicious activities and protect wallets interacting with your contracts.</p>
          </div>
          <div className="bg-white shadow-md rounded p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">Governance Transparency</h3>
            <p className="mt-4 text-gray-600">Track proposals, votes, and decisions with immutable reporting for accountability.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">What Our Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div className="bg-white shadow-md rounded p-6">
            <p className="text-gray-600">"GuardChain has transformed the way we monitor our blockchain projects. Real-time alerts keep us proactive and secure."</p>
            <p className="mt-4 text-gray-800 font-bold">- Blockchain Developer</p>
          </div>
          <div className="bg-white shadow-md rounded p-6">
            <p className="text-gray-600">"The governance tracking tools are a game-changer. We now have full transparency in decision-making."</p>
            <p className="mt-4 text-gray-800 font-bold">- DAO Manager</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Take Control?</h2>
        <p className="text-lg mt-4">Start your journey with GuardChain and experience the future of blockchain monitoring.</p>
        <div className="mt-6">
          <Link to="/signup" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-200">Sign Up Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;