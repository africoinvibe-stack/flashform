import React, { useState } from 'react';
import { Lock, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface AdminLoginProps {
  onLogin: () => void;
  onBack: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin123' && password === 'admin123') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-flash-gray border border-gray-800 rounded-2xl p-8"
      >
        <button 
          onClick={onBack}
          className="mb-6 text-gray-400 hover:text-white flex items-center text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to App
        </button>

        <div className="flex items-center justify-center w-12 h-12 bg-flash-yellow/10 rounded-full mb-6 mx-auto border border-flash-yellow/20">
          <Lock className="w-6 h-6 text-flash-yellow" />
        </div>

        <h2 className="text-2xl font-bold text-center text-white mb-8">Admin Access</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-flash-yellow focus:ring-1 focus:ring-flash-yellow transition-colors"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-flash-yellow focus:ring-1 focus:ring-flash-yellow transition-colors"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div className="flex items-center text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <AlertCircle className="w-4 h-4 mr-2" />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-flash-yellow text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors mt-4"
          >
            Login to Dashboard
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;