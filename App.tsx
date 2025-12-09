import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Survey from './components/Survey';
import Success from './components/Success';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { SURVEY_SECTIONS } from './constants';
import { FormData, ViewState } from './types';
import { saveSubmission } from './utils/db';
import { Zap, Shield } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<ViewState>('intro');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({});

  const handleStart = () => {
    setView('survey');
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    if (currentSectionIndex < SURVEY_SECTIONS.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    } else {
      // Submit logic
      saveSubmission(formData);
      setView('success');
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };

  const progress = ((currentSectionIndex + 1) / SURVEY_SECTIONS.length) * 100;

  // Render Logic
  if (view === 'admin-login') {
    return (
      <AdminLogin 
        onLogin={() => setView('admin-dashboard')} 
        onBack={() => setView('intro')} 
      />
    );
  }

  if (view === 'admin-dashboard') {
    return <AdminDashboard onLogout={() => setView('intro')} />;
  }

  return (
    <div className="min-h-screen bg-flash-black text-white font-sans selection:bg-flash-yellow selection:text-black flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-flash-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setView('intro')}
          >
            <Zap className="w-6 h-6 text-flash-yellow fill-flash-yellow" />
            <span className="font-bold text-xl tracking-tight">FLASH<span className="text-flash-yellow">.</span></span>
          </div>
          
          {view === 'survey' && (
            <div className="text-sm font-medium text-gray-400">
              <span className="text-white">{currentSectionIndex + 1}</span>
              <span className="mx-1">/</span>
              {SURVEY_SECTIONS.length}
            </div>
          )}
        </div>
        
        {/* Progress Bar */}
        {view === 'survey' && (
          <div className="h-1 w-full bg-gray-800">
            <div 
              className="h-full bg-flash-yellow transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </header>

      <main className="flex-grow">
        {view === 'intro' && <Welcome onStart={handleStart} />}
        
        {view === 'survey' && (
          <Survey 
            section={SURVEY_SECTIONS[currentSectionIndex]}
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={currentSectionIndex === 0}
            isLast={currentSectionIndex === SURVEY_SECTIONS.length - 1}
          />
        )}
        
        {view === 'success' && <Success />}
      </main>

      {/* Footer with Admin Link */}
      <footer className="py-6 text-center border-t border-gray-900 mt-auto">
        <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
          <span>&copy; 2024 Flash Finance</span>
          <span>•</span>
          <button 
            onClick={() => setView('admin-login')}
            className="hover:text-gray-400 transition-colors flex items-center gap-1"
          >
            <Shield className="w-3 h-3" /> Admin
          </button>
        </div>
      </footer>
    </div>
  );
}