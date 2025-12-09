import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Check, AlertCircle } from 'lucide-react';
import { Section, FormData } from '../types';

interface SurveyProps {
  section: Section;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Survey: React.FC<SurveyProps> = ({ 
  section, 
  formData, 
  setFormData, 
  onNext, 
  onPrev,
  isFirst,
  isLast
}) => {
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [section.id]);

  const handleInputChange = (questionId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
    if (errors[questionId]) {
      const newErrors = { ...errors };
      delete newErrors[questionId];
      setErrors(newErrors);
    }
  };

  const handleCheckboxChange = (questionId: string, value: string) => {
    const currentValues = (formData[questionId] as string[]) || [];
    let newValues;
    if (currentValues.includes(value)) {
      newValues = currentValues.filter(v => v !== value);
    } else {
      newValues = [...currentValues, value];
    }
    
    setFormData(prev => ({
      ...prev,
      [questionId]: newValues
    }));

    if (errors[questionId] && newValues.length > 0) {
      const newErrors = { ...errors };
      delete newErrors[questionId];
      setErrors(newErrors);
    }
  };

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    section.questions.forEach(q => {
      if (q.required) {
        const val = formData[q.id];
        if (!val || (Array.isArray(val) && val.length === 0)) {
          newErrors[q.id] = true;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    if (isValid) onNext();
    else {
      // Find first error and scroll to it
      const firstErrorId = Object.keys(newErrors)[0];
      const el = document.getElementById(firstErrorId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 md:py-10 pb-32">
      <motion.div
        key={section.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{section.title}</h2>
          {section.description && (
            <p className="text-gray-400">{section.description}</p>
          )}
        </div>

        <div className="space-y-8">
          {section.questions.map((q) => (
            <div 
              id={q.id}
              key={q.id} 
              className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                errors[q.id] 
                  ? 'bg-red-500/5 border-red-500/50' 
                  : 'bg-flash-gray border-gray-800 hover:border-gray-700'
              }`}
            >
              <label className="block text-white font-medium mb-4 md:text-lg">
                {q.text} {q.required && <span className="text-flash-yellow ml-1">*</span>}
              </label>

              {/* Short Answer */}
              {q.type === 'short_answer' && (
                <input
                  type="text"
                  placeholder={q.placeholder}
                  value={(formData[q.id] as string) || ''}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-flash-yellow focus:ring-1 focus:ring-flash-yellow transition-colors placeholder-gray-600"
                />
              )}

              {/* Paragraph */}
              {q.type === 'paragraph' && (
                <textarea
                  rows={4}
                  placeholder={q.placeholder}
                  value={(formData[q.id] as string) || ''}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-flash-yellow focus:ring-1 focus:ring-flash-yellow transition-colors placeholder-gray-600 resize-none"
                />
              )}

              {/* Dropdown */}
              {q.type === 'dropdown' && (
                <div className="relative">
                  <select
                    value={(formData[q.id] as string) || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    className="w-full appearance-none bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-flash-yellow focus:ring-1 focus:ring-flash-yellow transition-colors cursor-pointer"
                  >
                    <option value="" disabled>Select an option</option>
                    {q.options?.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
                </div>
              )}

              {/* Multiple Choice */}
              {q.type === 'multiple_choice' && (
                <div className="space-y-3">
                  {q.options?.map((opt) => {
                    const isSelected = formData[q.id] === opt;
                    return (
                      <div 
                        key={opt}
                        onClick={() => handleInputChange(q.id, opt)}
                        className={`cursor-pointer flex items-center p-3 rounded-xl border transition-all duration-200 ${
                          isSelected 
                            ? 'bg-flash-yellow/10 border-flash-yellow' 
                            : 'bg-black/30 border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 shrink-0 ${
                          isSelected ? 'border-flash-yellow' : 'border-gray-500'
                        }`}>
                          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-flash-yellow" />}
                        </div>
                        <span className={`text-sm md:text-base ${isSelected ? 'text-white' : 'text-gray-300'}`}>{opt}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Checkboxes */}
              {q.type === 'checkboxes' && (
                <div className="space-y-3">
                  {q.options?.map((opt) => {
                    const currentValues = (formData[q.id] as string[]) || [];
                    const isSelected = currentValues.includes(opt);
                    return (
                      <div 
                        key={opt}
                        onClick={() => handleCheckboxChange(q.id, opt)}
                        className={`cursor-pointer flex items-center p-3 rounded-xl border transition-all duration-200 ${
                          isSelected 
                            ? 'bg-flash-yellow/10 border-flash-yellow' 
                            : 'bg-black/30 border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded transition-colors flex items-center justify-center mr-3 shrink-0 ${
                          isSelected ? 'bg-flash-yellow border-flash-yellow' : 'border border-gray-500 bg-transparent'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 text-black" />}
                        </div>
                        <span className={`text-sm md:text-base ${isSelected ? 'text-white' : 'text-gray-300'}`}>{opt}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {errors[q.id] && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="flex items-center text-red-400 text-sm mt-3"
                >
                  <AlertCircle className="w-4 h-4 mr-2" />
                  This field is required
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Actions */}
      <div className="fixed bottom-0 left-0 w-full bg-flash-black/90 backdrop-blur-md border-t border-gray-800 p-4 z-50">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={`px-6 py-3 rounded-xl font-medium transition-colors ${
              isFirst 
                ? 'opacity-0 pointer-events-none' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Back
          </button>
          <button
            onClick={validate}
            className="flex-1 md:flex-none md:w-48 bg-flash-yellow text-black font-bold text-lg py-3 rounded-xl hover:bg-yellow-300 transition-all shadow-[0_0_15px_rgba(253,224,71,0.2)]"
          >
            {isLast ? 'Submit Survey' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;