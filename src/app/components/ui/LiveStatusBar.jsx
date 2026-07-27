'use client';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Activity, Wifi, WifiOff, Zap } from 'lucide-react';

export default function LiveStatusBar() {
  const [statuses, setStatuses] = useState({
    serpApi: 'idle',
    rapidApi: 'idle',
    apify: 'idle',
    scrapingBee: 'idle',
    groq: 'idle'
  });

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:5000', {
      auth: { token: localStorage.getItem('token') || '' }
    });
    socket.on('statusUpdate', (data) => setStatuses(data));
    return () => socket.disconnect();
  }, []);

  const statusConfig = {
    active: { color: 'bg-green-500', glow: 'shadow-green-500/30', label: 'Online', icon: <Wifi size={12} /> },
    idle: { color: 'bg-yellow-400', glow: 'shadow-yellow-400/20', label: 'Waiting', icon: <Activity size={12} /> },
    error: { color: 'bg-red-500', glow: 'shadow-red-500/30', label: 'Offline', icon: <WifiOff size={12} /> }
  };

  return (
    <div className="status-bar">
      <div className="flex items-center gap-2 text-white/60 text-xs tracking-wider uppercase font-medium mr-4">
        <Zap size={14} className="text-cyan-400 animate-pulse" />
        <span>System Status</span>
      </div>
      {Object.entries(statuses).map(([name, status]) => {
        const config = statusConfig[status] || statusConfig.idle;
        return (
          <div key={name} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${config.color} shadow-lg ${config.glow} animate-pulse`} />
            <span className="text-white/80 text-xs font-mono">{name}</span>
            <span className="text-[10px] text-white/30">{config.label}</span>
          </div>
        );
      })}
    </div>
  );
    }
