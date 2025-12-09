export type QuestionType = 'short_answer' | 'dropdown' | 'multiple_choice' | 'checkboxes' | 'paragraph';

export interface Option {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  required: boolean;
  placeholder?: string;
  options?: string[]; // For simple string arrays
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export interface FormData {
  [key: string]: string | string[];
}

export interface Submission {
  id: string;
  submittedAt: string;
  data: FormData;
}

export type ViewState = 'intro' | 'survey' | 'success' | 'admin-login' | 'admin-dashboard';