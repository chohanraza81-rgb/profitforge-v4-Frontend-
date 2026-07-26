export default function SkeletonLoader() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-64 glass animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => <div key={i} className="h-32 glass animate-pulse" />)}
      </div>
      <div className="h-64 glass animate-pulse" />
      <div className="h-48 glass animate-pulse" />
    </div>
  );
}
