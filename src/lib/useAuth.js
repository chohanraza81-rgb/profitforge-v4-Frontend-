import { useState, useEffect } from 'react';
import apiClient from './apiClient';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) {
      setToken(t);
      // Optionally fetch user profile
      apiClient.get('/auth/me').then(res => setUser(res.data)).catch(() => {});
    }
  }, []);

  const login = async (email, password) => {
    const res = await apiClient.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
  };

  return { user, token, login };
}
