const API_URL = import.meta.env.VITE_API_URL || 'https://india-pharma-hub-api.onrender.com';

export const getApiUrl = (path: string) => `${API_URL}${path}`;