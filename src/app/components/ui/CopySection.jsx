'use client';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CopySection({ data, section }) {
  const getText = () => {
    if (section === 'metrics') {
      return Object.entries(data.scores).filter(([k]) => k !== 'confidence').map(([k, v]) => `${k}: ${v.value.toFixed(1)}/10`).join('\n');
    }
    if (section === 'bullets') {
      return Object.entries(data.scores).filter(([k]) => k !== 'confidence').map(([k, v]) => `• ${k}: ${v.value.toFixed(1)}/10`).join('\n');
    }
    if (section === 'scripts') {
      return `Here is a sample script for ${data.keyword}...`;
    }
    return '';
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getText()).then(() => toast.success('Copied!'));
  };

  return (
    <button onClick={handleCopy} className="glass px-4 py-2 text-sm flex items-center gap-2 hover:bg-white/10 transition">
      <Copy size={16} /> Copy {section}
    </button>
  );
}
