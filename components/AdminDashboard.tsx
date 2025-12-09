import React, { useEffect, useState } from 'react';
import { getSubmissions, exportToCSV } from '../utils/db';
import { Submission } from '../types';
import { Download, Users, Clock, LogOut, Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  const filteredSubmissions = submissions.filter(s => 
    JSON.stringify(s.data).toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Admin Header */}
      <div className="bg-flash-gray border-b border-gray-800 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-white">Flash<span className="text-flash-yellow">Admin</span></div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => exportToCSV(submissions)}
              className="flex items-center gap-2 bg-flash-yellow/10 text-flash-yellow px-4 py-2 rounded-lg text-sm font-medium hover:bg-flash-yellow/20 transition-colors border border-flash-yellow/20"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button 
              onClick={onLogout}
              className="text-gray-400 hover:text-white"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-flash-gray border border-gray-800 p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Total Responses</h3>
              <Users className="w-5 h-5 text-flash-yellow" />
            </div>
            <p className="text-3xl font-bold text-white">{submissions.length}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-flash-gray border border-gray-800 p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Last Submission</h3>
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-lg font-medium text-white truncate">
              {submissions.length > 0 
                ? new Date(submissions[submissions.length - 1].submittedAt).toLocaleString() 
                : 'No data'}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-flash-gray border border-gray-800 p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">Target Progress</h3>
              <div className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                {Math.round((submissions.length / 100) * 100)}%
              </div>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-1000" 
                style={{ width: `${Math.min((submissions.length / 100) * 100, 100)}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">Target: 100 Users</p>
          </motion.div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search responses..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-flash-gray border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-flash-yellow/50 transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>

        {/* Data Table */}
        <div className="bg-flash-gray border border-gray-800 rounded-2xl overflow-hidden overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-black/30 border-b border-gray-800">
                <th className="p-4 font-medium text-gray-400 whitespace-nowrap">Date</th>
                <th className="p-4 font-medium text-gray-400 whitespace-nowrap">Name</th>
                <th className="p-4 font-medium text-gray-400 whitespace-nowrap">Phone</th>
                <th className="p-4 font-medium text-gray-400 whitespace-nowrap">Location</th>
                <th className="p-4 font-medium text-gray-400 whitespace-nowrap">Crypto Exp</th>
                <th className="p-4 font-medium text-gray-400 whitespace-nowrap">Interest</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredSubmissions.length > 0 ? (
                filteredSubmissions.slice().reverse().map((sub) => (
                  <tr key={sub.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-gray-300 whitespace-nowrap">
                      {new Date(sub.submittedAt).toLocaleDateString()}
                      <span className="block text-xs text-gray-500">{new Date(sub.submittedAt).toLocaleTimeString()}</span>
                    </td>
                    <td className="p-4 font-medium text-white">{sub.data['q1'] || 'Anonymous'}</td>
                    <td className="p-4 text-gray-300">{sub.data['q2'] || '-'}</td>
                    <td className="p-4 text-gray-300">{sub.data['q4'] || '-'}</td>
                    <td className="p-4 text-gray-300">{sub.data['q5'] || '-'}</td>
                    <td className="p-4 text-gray-300 max-w-xs truncate">{sub.data['q18'] || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No responses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;