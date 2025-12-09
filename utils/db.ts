import { FormData, Submission } from '../types';
import { SURVEY_SECTIONS } from '../constants';

const STORAGE_KEY = 'flash_survey_responses';

export const saveSubmission = (data: FormData): void => {
  const submissions = getSubmissions();
  const newSubmission: Submission = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    data
  };
  submissions.push(newSubmission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};

export const getSubmissions = (): Submission[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const clearSubmissions = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const exportToCSV = (submissions: Submission[]) => {
  // Get all unique question IDs
  const questions: {id: string, text: string}[] = [];
  SURVEY_SECTIONS.forEach(section => {
    section.questions.forEach(q => {
      questions.push({ id: q.id, text: q.text });
    });
  });

  // Create Header Row
  const headers = ['Submission ID', 'Date', ...questions.map(q => q.text)];
  
  // Create Data Rows
  const rows = submissions.map(sub => {
    const date = new Date(sub.submittedAt).toLocaleString();
    const answers = questions.map(q => {
      const val = sub.data[q.id];
      if (Array.isArray(val)) return `"${val.join(', ')}"`; // Escape commas in arrays
      if (val) return `"${val.toString().replace(/"/g, '""')}"`; // Escape quotes
      return '';
    });
    return [sub.id, date, ...answers];
  });

  const csvContent = [
    headers.join(','),
    ...rows.map(r => r.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `flash_survey_export_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};