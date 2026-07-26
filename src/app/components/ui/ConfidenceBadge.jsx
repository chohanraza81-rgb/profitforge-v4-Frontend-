export default function ConfidenceBadge({ confidence }) {
  const { level, active, total } = confidence || { level: 'UNKNOWN', active: 0, total: 0 };
  const colorMap = { HIGH: '🟢', MEDIUM: '🟡', LOW: '🔴' };
  return (
    <div className="glass p-4 flex items-center gap-4 flex-wrap">
      <span className="text-2xl">{colorMap[level] || '⚪'}</span>
      <span className="font-bold text-lg">Data Confidence: {level}</span>
      <span className="text-sm text-gray-400">{active}/{total} Sources Active</span>
      <span className="text-sm text-gray-400">Last Updated: {new Date().toLocaleString()}</span>
    </div>
  );
}
