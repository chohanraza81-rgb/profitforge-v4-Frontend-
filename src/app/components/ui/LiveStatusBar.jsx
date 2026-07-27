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

  // ... rest of logic

  const statusLabel = (name) => ({
    serpApi: 'SerpAPI',
    amazonScraper: 'Amazon',
    scrapingBee: 'ScrapingBee',
    groq: 'Groq'
  }[name] || name);

  return (
    <div className="fixed bottom-0 left-0 right-0 glass px-3 py-2 flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] md:text-xs z-50">
      {Object.entries(statuses).map(([name, status]) => (
        <span key={name} className="flex items-center gap-1.5 whitespace-nowrap">
          <span className={`w-2 h-2 rounded-full ${statusColor(status)}`} />
          {statusLabel(name)}
        </span>
      ))}
    </div>
  );
}
