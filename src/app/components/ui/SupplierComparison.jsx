export default function SupplierComparison({ suppliers }) {
  if (!suppliers) return null;
  const entries = Object.entries(suppliers).filter(([key]) => !['source','updated'].includes(key) && typeof key === 'string');
  if (entries.length === 0) return null;
  const minPrice = Math.min(...entries.map(([_, val]) => val.price));
  const bestSupplier = entries.find(([_, val]) => val.price === minPrice)?.[0];

  return (
    <div className="glass p-6">
      <h3 className="text-lg font-bold mb-4">🏷️ Supplier Comparison</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {entries.map(([name, data]) => (
          <div key={name} className="p-4 border border-white/10 rounded-lg relative">
            <div className="font-bold capitalize">{name}</div>
            <div className="text-2xl font-mono">${data.price}</div>
            <div className="text-sm text-gray-400">Shipping: ${data.shipping || 0}</div>
            {name === bestSupplier && (
              <span className="absolute top-2 right-2 bg-green-500 text-xs px-2 py-0.5 rounded-full">Best</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
