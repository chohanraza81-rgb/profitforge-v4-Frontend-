// frontend/src/app/components/ui/CopyAllData.jsx
'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CopyAllData({ data }) {
  const [format, setFormat] = useState('markdown');

  const generateMarkdown = (d) => {
    let md = `# PROFITFORGE v4.0 — Analysis Report\n\n`;
    md += `**Keyword:** ${d.keyword}\n`;
    md += `**Date:** ${d.timestamp}\n`;
    md += `**Confidence:** ${d.confidence.level}\n\n`;
    md += `## Scores\n`;
    for (const [key, score] of Object.entries(d.scores)) {
      if (key === 'confidence') continue;
      md += `- ${key}: ${score.value !== null ? score.value.toFixed(1) : 'N/A'}/10 (${score.source})\n`;
    }
    return md;
  };

  const generatePlain = (d) => {
    let txt = `PROFITFORGE v4.0 — Analysis Report\n`;
    txt += `Keyword: ${d.keyword}\nDate: ${d.timestamp}\nConfidence: ${d.confidence.level}\n\nScores:\n`;
    for (const [key, score] of Object.entries(d.scores)) {
      if (key === 'confidence') continue;
      txt += `${key}: ${score.value !== null ? score.value.toFixed(1) : 'N/A'}/10 (${score.source})\n`;
    }
    return txt;
  };

  const handleCopy = () => {
    let text = '';
    if (format === 'markdown') text = generateMarkdown(data);
    else if (format === 'plain') text = generatePlain(data);
    else if (format === 'csv') {
      let csv = 'Metric,Value,Source\n';
      for (const [key, score] of Object.entries(data.scores)) {
        if (key === 'confidence') continue;
        csv += `${key},${score.value !== null ? score.value.toFixed(1) : 'N/A'},${score.source}\n`;
      }
      text = csv;
    } else if (format === 'json') {
      text = JSON.stringify(data, null, 2);
    }
    navigator.clipboard.writeText(text).then(() => toast.success('Copied!'));
  };

  return (
    <div className="flex items-center gap-2 glass-sm px-3 py-2">
      <select
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="bg-transparent border border-white/10 rounded px-2 py-1 text-xs"
      >
        <option value="markdown">Markdown</option>
        <option value="plain">Plain</option>
        <option value="csv">CSV</option>
        <option value="json">JSON</option>
      </select>
      <button
        onClick={handleCopy}
        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition text-xs"
      >
        <Copy size={14} /> Copy All
      </button>
    </div>
  );
                                                                   }
