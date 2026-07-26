'use client';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function TrendGraph({ data }) {
  if (!data?.interestOverTime || data.interestOverTime.length === 0) {
    return <div className="glass p-6 text-center text-gray-500">No trend data</div>;
  }
  const chartData = data.interestOverTime.map(d => ({
    date: d.date || d.time,
    value: d.values[0]?.extracted_value || 0,
  }));
  return (
    <div className="glass p-6">
      <h3 className="text-lg font-bold mb-4">📈 Google Trends (12 months)</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#ec4899" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip contentStyle={{ background: '#0D0D1A', border: '1px solid rgba(255,255,255,0.1)' }} />
          <Area type="monotone" dataKey="value" stroke="#a855f7" fill="url(#trendGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
