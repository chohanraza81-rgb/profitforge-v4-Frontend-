'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/lib/useAuth';
import ProjectsList from '../components/dashboard/ProjectsList';

export default function ProjectsPage() {
  const { user, token } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axios.get('/api/v1/projects', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => { setProjects(res.data); setLoading(false); })
        .catch(() => setLoading(false));
    }
  }, [token]);

  if (!user) return <div className="container mx-auto p-8 text-center">Please login to view projects.</div>;
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold gradient-text mb-6">Saved Projects</h1>
      <ProjectsList projects={projects} loading={loading} />
    </div>
  );
}
