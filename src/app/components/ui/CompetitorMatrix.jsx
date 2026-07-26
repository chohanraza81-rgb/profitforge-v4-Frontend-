export default function CompetitorMatrix({ competitors }) {
  if (!competitors || competitors.length === 0) return null;
  const top = competitors.slice(0, 5);
  return (
    <div className="glass p-6">
      <h3 className="text-lg font-bold mb-4">📊 Competitor Price Matrix</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {top.map((comp, i) => (
          <div key={i} className="p-3 border border-white/10 rounded-lg text-center">
            <div className="text-xs truncate">{comp.title || 'Product'}</div>
            <div className="text-xl font-mono">${comp.price}</div>
            <div className="text-xs text-gray-400">{comp.rating || 'N/A'}⭐</div>
          </div>
        ))}
      </div>
    </div>
  );
}
