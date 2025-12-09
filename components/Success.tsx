import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Wallet, Users, Twitter, Send } from 'lucide-react';

const Success: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 pb-24 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="mb-8"
      >
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-4xl font-black text-white tracking-tight mb-2">
          YOU'RE IN! <span className="text-2xl block mt-2 text-gray-400 font-normal">Thanks for completing the survey.</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 text-left mb-8"
      >
        <h3 className="text-flash-yellow text-xs font-bold tracking-widest uppercase mb-6">What Happens Next</h3>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-flash-yellow font-bold mr-4 shrink-0 border border-gray-700">1</div>
            <div>
              <p className="text-white font-medium">Early Access List</p>
              <p className="text-sm text-gray-400">You've been added to the Flash Early Access list.</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-flash-yellow font-bold mr-4 shrink-0 border border-gray-700">2</div>
            <div>
              <p className="text-white font-medium">Launch Notification</p>
              <p className="text-sm text-gray-400">You'll get a WhatsApp message when we launch.</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-flash-yellow font-bold mr-4 shrink-0 border border-gray-700">3</div>
            <div>
              <p className="text-white font-medium">₦5,000 Credit</p>
              <p className="text-sm text-gray-400">Your bonus will be waiting in your wallet.</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-flash-yellow font-bold mr-4 shrink-0 border border-gray-700">4</div>
            <div>
              <p className="text-white font-medium">Founding Member Status</p>
              <p className="text-sm text-gray-400">Locked in lower fees forever.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-flash-yellow/10 to-transparent border border-flash-yellow/20 rounded-2xl p-6 mb-10"
      >
        <div className="flex items-center justify-center mb-4">
          <Users className="w-6 h-6 text-flash-yellow mr-2" />
          <h3 className="text-white font-bold text-lg">Want to help more?</h3>
        </div>
        <p className="text-gray-300 mb-6 text-sm">
          Every friend who signs up using this link = more ₦1,000 bonus for you when we launch! 💰
        </p>
        
        <div className="flex gap-2">
          <input 
            readOnly 
            value="https://flash.ng/join/USER123" 
            className="flex-1 bg-black/50 border border-gray-700 rounded-lg px-3 py-2 text-gray-400 text-sm font-mono"
          />
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Copy
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col items-center space-y-4">
        <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Follow Us</p>
        <div className="flex gap-4">
          <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors border border-gray-700">
            <Twitter className="w-4 h-4 mr-2 text-[#1DA1F2]" />
            @flashcrypto_ng
          </a>
          <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors border border-gray-700">
            <Send className="w-4 h-4 mr-2 text-[#0088cc]" />
            t.me/flashcrypto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;