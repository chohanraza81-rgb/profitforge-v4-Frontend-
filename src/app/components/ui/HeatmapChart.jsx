'use client';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip } from 'recharts';

export default function HeatmapChart() {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
  ];
  return (
    <div className="glass p-6">
      <h3 className="text-lg font-bold mb-4">🔥 Market Heatmap</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <XAxis type="number" dataKey="x" stroke="#555" />
          <YAxis type="number" dataKey="y" stroke="#555" />
          <ZAxis type="number" dataKey="z" range={[60, 400]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={data} fill="#a855f7" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
