// Pricing.js
import React from 'react';

const Pricing = () => {
  return (
    <div className="py-20 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose Your Plan</h1>
      <div className="flex justify-center gap-8">
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-2xl font-bold text-gray-800">Free</h2>
          <p className="mt-4 text-gray-600">Basic monitoring for small projects.</p>
          <p className="text-4xl font-bold mt-6">$0</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Start Free
          </button>
        </div>
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-2xl font-bold text-gray-800">Pro</h2>
          <p className="mt-4 text-gray-600">Advanced tools and governance tracking.</p>
          <p className="text-4xl font-bold mt-6">$49/month</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Pro
          </button>
        </div>
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-2xl font-bold text-gray-800">Enterprise</h2>
          <p className="mt-4 text-gray-600">Full suite and custom integrations.</p>
          <p className="text-4xl font-bold mt-6">Contact Us</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
