'use client';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function LiveStatusBar() {
  const [statuses, setStatuses] = useState({
    serpApi: 'idle',
    amazonScraper: 'idle',
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

  // ✅ Define statusColor inside component
  const statusColor = (status) => {
    if (status === 'active') return 'bg-green-500';
    if (status === 'idle') return 'bg-yellow-500 animate-pulse';
    return 'bg-red-500';
  };

  const statusLabel = (name) => ({
    serpApi: 'SerpAPI',
    amazonScraper: 'Amazon',
    scrapingBee: 'ScrapingBee',
    groq: 'Groq'
  }[name] || name);

  return (
    <div className="fixed bottom-0 left-0 right-0 glass px-3 py-2 flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] md:text-xs z-50 border-t border-white/5">
      {Object.entries(statuses).map(([name, status]) => (
        <span key={name} className="flex items-center gap-1.5 whitespace-nowrap">
          <span className={`w-2 h-2 rounded-full ${statusColor(status)}`} />
          {statusLabel(name)}
        </span>
      ))}
    </div>
  );
      }
