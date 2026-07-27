// frontend/src/app/components/ui/DataSourceTooltip.jsx
'use client';
import { Info } from 'lucide-react';
import { useState } from 'react';

export default function DataSourceTooltip({ source, updated, latency, details }) {
  const [show, setShow] = useState(false);
  const displaySource = source || 'Unknown';
  const displayUpdated = updated ? new Date(updated).toLocaleString() : 'N/A';
  const displayLatency = latency ? `${latency}ms` : 'N/A';
  const displayDetails = details || '';

  return (
    <div className="relative inline-block ml-2">
      <Info
        size={16}
        className="text-gray-400 cursor-help hover:text-cyan-400 transition"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
      {show && (
        <div className="absolute z-50 bottom-full mb-2 left-1/2 -translate-x-1/2 w-72 glass p-3 text-xs text-white/80 shadow-xl">
          <p><span className="font-bold">📊 Source:</span> {displaySource}</p>
          <p><span className="font-bold">🕒 Updated:</span> {displayUpdated}</p>
          <p><span className="font-bold">⚡ Latency:</span> {displayLatency}</p>
          {displayDetails && <p><span className="font-bold">📌 Detail:</span> {displayDetails}</p>}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 rotate-45" />
        </div>
      )}
    </div>
  );
          }
