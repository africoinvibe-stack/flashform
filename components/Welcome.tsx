import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, XCircle, ChevronRight, Gift, ShieldCheck } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 md:py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-flash-yellow/10 mb-4 border border-flash-yellow/20">
          <Zap className="w-8 h-8 text-flash-yellow animate-pulse-slow" fill="currentColor" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          FLASH<span className="text-flash-yellow">.</span>
        </h1>
        <p className="text-xl text-gray-400 font-medium">
          Help Build Nigeria's First True <span className="text-white">Crypto Spending App</span>
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-8"
      >
        {/* The Problem */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
          <h3 className="text-red-400 font-bold text-sm tracking-wider uppercase mb-4 flex items-center">
            <XCircle className="w-4 h-4 mr-2" /> The Problem
          </h3>
          <ul className="space-y-3 text-gray-300">
            {[
              "Risky random P2P traders",
              "Expensive 3-5% fees",
              "Slow transactions (hours waiting)",
              "Stressful multiple apps needed"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 text-red-500/70">✕</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* The Solution */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck className="w-24 h-24 text-emerald-500" />
          </div>
          <h3 className="text-emerald-400 font-bold text-sm tracking-wider uppercase mb-4 flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-2" /> The Flash Solution
          </h3>
          <ul className="space-y-3 text-gray-200">
            {[
              "Hold USDT, BTC, ETH & Naira in one wallet",
              "Swap instantly at low fees (1-1.5%)",
              "Get a virtual Dollar card for online spending",
              "Cash out via trusted agents near you",
              "Trade large volumes safely via P2P"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-flash-yellow font-bold text-sm tracking-wider uppercase mb-4 flex items-center">
            <Gift className="w-4 h-4 mr-2" /> What's in it for you?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/30 p-3 rounded-lg border border-white/5">
              <span className="block text-flash-yellow font-bold text-lg mb-1">Early Access</span>
              <span className="text-sm text-gray-400">Be the first to use Flash before public launch.</span>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-white/5">
              <span className="block text-flash-yellow font-bold text-lg mb-1">₦5,000 Credit</span>
              <span className="text-sm text-gray-400">Free money in your wallet when we launch.</span>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-white/5">
              <span className="block text-flash-yellow font-bold text-lg mb-1">Founder Status</span>
              <span className="text-sm text-gray-400">Lower fees forever + priority support.</span>
            </div>
            <div className="bg-black/30 p-3 rounded-lg border border-white/5">
              <span className="block text-flash-yellow font-bold text-lg mb-1">Your Voice</span>
              <span className="text-sm text-gray-400">Help us build features YOU actually need.</span>
            </div>
          </div>
        </div>

        <button 
          onClick={onStart}
          className="w-full bg-flash-yellow text-black font-bold text-lg py-4 rounded-xl hover:bg-yellow-300 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(253,224,71,0.3)] flex items-center justify-center group"
        >
          Start Survey (2 Mins)
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-center text-gray-500 text-sm">
          Join 1,200+ Nigerians on the waitlist today.
        </p>
      </motion.div>
    </div>
  );
};

export default Welcome;