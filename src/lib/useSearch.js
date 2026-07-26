import { useState } from 'react';
import apiClient from './apiClient';
import toast from 'react-hot-toast';

export function useSearch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (keyword) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get('/analyze', { params: { keyword } });
      setData(response.data);
      toast.success('Analysis complete!');
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      toast.error('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
