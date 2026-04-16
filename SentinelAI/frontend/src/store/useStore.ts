import { create } from 'zustand';
import { AnalysisResult } from '../services/apiService';

interface User {
  email: string;
}

interface AppState {
  isInitializing: boolean;
  hasEntered: boolean;
  isLoading: boolean;
  loadingMessage: string;
  result: AnalysisResult | null;
  textResult: AnalysisResult | null;
  error: string | null;
  currentPage: 'home' | 'text' | 'auth' | 'api-dashboard';
  user: User | null;
  token: string | null;
  
  setInitializing: (val: boolean) => void;
  setEntered: (val: boolean) => void;
  setLoading: (isLoading: boolean, message?: string) => void;
  setResult: (result: AnalysisResult | null) => void;
  setTextResult: (result: AnalysisResult | null) => void;
  setError: (error: string | null) => void;
  setCurrentPage: (page: 'home' | 'text' | 'auth' | 'api-dashboard') => void;
  setUser: (user: User | null, token: string | null) => void;
  logout: () => void;
  reset: () => void;
}

export const useStore = create<AppState>((set) => ({
  isInitializing: true,
  hasEntered: false,
  isLoading: false,
  loadingMessage: '',
  result: null,
  textResult: null,
  error: null,
  currentPage: 'home',
  user: null,
  token: localStorage.getItem('sentinel_token'),

  setInitializing: (val) => set({ isInitializing: val }),
  setEntered: (val) => set({ hasEntered: val }),
  setLoading: (isLoading, message = '') => set({ isLoading, loadingMessage: message }),
  setResult: (result) => set({ result, error: null }),
  setTextResult: (result) => set({ textResult: result, error: null }),
  setError: (error) => set({ error, isLoading: false }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setUser: (user, token) => {
    if (token) localStorage.setItem('sentinel_token', token);
    else localStorage.removeItem('sentinel_token');
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem('sentinel_token');
    set({ user: null, token: null, currentPage: 'home' });
  },
  reset: () => set({ result: null, textResult: null, error: null, isLoading: false, loadingMessage: '' }),
}));
