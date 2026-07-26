import ProjectCard from './ProjectCard';

export default function ProjectsList({ projects, loading }) {
  if (loading) return <div className="glass p-8 text-center">Loading...</div>;
  if (projects.length === 0) return <div className="glass p-8 text-center text-gray-400">No projects saved yet.</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(p => <ProjectCard key={p._id} project={p} />)}
    </div>
  );
}
