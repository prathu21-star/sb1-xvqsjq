import axios from 'axios';
import { getApiUrl } from '../config/api';

const api = axios.create({
  baseURL: getApiUrl(''),
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const registerUser = async (data: {
  email: string;
  password: string;
  name: string;
  role: string;
  company?: string;
}) => {
  try {
    const response = await api.post('/api/auth/register', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

// Providers
export const createProviderProfile = async (data: any) => {
  try {
    const response = await api.post('/api/providers', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to create provider profile');
  }
};

export const listService = async (data: any) => {
  try {
    const response = await api.post('/api/providers/services', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to list service');
  }
};

// Quotes
export const submitQuote = async (data: any) => {
  try {
    const response = await api.post('/api/quotes', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to submit quote');
  }
};

export const getUserQuotes = async () => {
  try {
    const response = await api.get('/api/quotes');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to fetch quotes');
  }
};

export default api;