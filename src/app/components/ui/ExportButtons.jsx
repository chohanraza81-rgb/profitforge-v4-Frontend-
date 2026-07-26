'use client';
import { Download } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { saveAs } from 'file-saver';

export default function ExportButtons({ data }) {
  const handleExport = async (format) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`/api/v1/export/${format}`, data, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      saveAs(blob, `report.${format}`);
      toast.success(`Exported as ${format.toUpperCase()}`);
    } catch (err) {
      toast.error('Export failed');
    }
  };

  const formats = ['pdf', 'docx', 'csv', 'json', 'html', 'markdown', 'pptx'];
  return (
    <div className="flex flex-wrap gap-2">
      {formats.map(fmt => (
        <button
          key={fmt}
          onClick={() => handleExport(fmt)}
          className="glass px-4 py-2 text-sm hover:bg-white/10 transition flex items-center gap-2"
        >
          <Download size={16} /> {fmt.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
