'use client';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ProjectCard({ project }) {
  const router = useRouter();
  const handleDelete = async () => {
    if (confirm('Delete this project?')) {
      await axios.delete(`/api/v1/projects/${project._id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      toast.success('Deleted');
      router.refresh();
    }
  };
  return (
    <div className="glass p-4 hover:shadow-lg hover:shadow-purple-500/20 transition">
      <h3 className="text-xl font-bold">{project.keyword}</h3>
      <p className="text-sm text-gray-400">{new Date(project.updatedAt).toLocaleDateString()}</p>
      <button onClick={handleDelete} className="mt-2 text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
    </div>
  );
}
