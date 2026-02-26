import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './pages/LandingPage';
import { SignupCustomer } from './pages/SignupCustomer';
import { SignupCreator } from './pages/SignupCreator';
import { Login } from './pages/Login';
import { CustomerDashboard } from './pages/CustomerDashboard';
import { CreatorDashboard } from './pages/CreatorDashboard';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup/customer" element={<SignupCustomer />} />
          <Route path="/signup/creator" element={<SignupCreator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/creator/dashboard" element={<CreatorDashboard />} />
        </Routes>
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;