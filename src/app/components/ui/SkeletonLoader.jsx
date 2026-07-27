// frontend/src/app/components/ui/SkeletonLoader.jsx
export default function SkeletonLoader() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="glass h-12 w-full bg-white/5 rounded-xl" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="glass h-24 bg-white/5 rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass h-48 bg-white/5 rounded-xl" />
        <div className="glass h-48 bg-white/5 rounded-xl" />
      </div>
      <div className="glass h-32 bg-white/5 rounded-xl" />
      <div className="glass h-24 bg-white/5 rounded-xl" />
      <div className="glass h-16 bg-white/5 rounded-xl" />
    </div>
  );
}
