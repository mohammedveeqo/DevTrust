// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Pricing from './components/Pricing';
import Dashboard from './components/Dashboard';
import Wallets from './components/Wallets';
import Governance from './components/Governance';
import Alerts from './components/Alerts';
import NotFound from './components/NotFound';

const AppContent = () => {
  const location = useLocation();

  // Define routes where Navbar and Footer should NOT appear
  const hideLayoutRoutes = ['/dashboard', '/wallets', '/governance', '/alerts'];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout && <Navbar />}
      <main className={`flex-grow ${shouldHideLayout ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
