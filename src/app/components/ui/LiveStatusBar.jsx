'use client';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function LiveStatusBar() {
  const [statuses, setStatuses] = useState({
    serpApi: 'idle', rapidApi: 'idle', apify: 'idle', scrapingBee: 'idle', groq: 'idle'
  });

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:5000', {
      auth: { token: localStorage.getItem('token') || '' }
    });
    socket.on('statusUpdate', (data) => setStatuses(data));
    return () => socket.disconnect();
  }, []);

  const statusColor = (s) => {
    if (s === 'active') return 'bg-green-500';
    if (s === 'idle') return 'bg-yellow-500 animate-pulse';
    return 'bg-red-500';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 glass px-4 py-2 flex justify-center gap-6 text-xs">
      {Object.entries(statuses).map(([name, status]) => (
        <span key={name} className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${statusColor(status)}`} /> {name}
        </span>
      ))}
    </div>
  );
}
