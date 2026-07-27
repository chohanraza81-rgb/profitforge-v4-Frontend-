// frontend/src/app/components/ui/ExportButtons.jsx
'use client';
import { Download } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { saveAs } from 'file-saver';

export default function ExportButtons({ data }) {
  const handleExport = async (format) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/export/${format}`,
        data,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          responseType: 'blob',
        }
      );
      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      saveAs(blob, `report.${format}`);
      toast.success(`Exported as ${format.toUpperCase()}`);
    } catch (err) {
      toast.error('Export failed: ' + err.message);
    }
  };

  const formats = ['pdf', 'docx', 'csv', 'json', 'html', 'markdown', 'pptx'];
  return (
    <div className="flex flex-wrap gap-1 md:gap-2">
      {formats.map(fmt => (
        <button
          key={fmt}
          onClick={() => handleExport(fmt)}
          className="glass-sm px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs hover:bg-white/10 transition flex items-center gap-1"
        >
          <Download size={14} /> {fmt.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
