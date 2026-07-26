'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Settings() {
  const [apiKey, setApiKey] = useState('');
  const [notifications, setNotifications] = useState(true);
  const handleSave = () => {
    toast.success('Settings saved');
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold gradient-text mb-6">Settings</h1>
      <div className="glass p-6 max-w-2xl">
        <div className="mb-4">
          <label className="block text-sm text-gray-400">API Key</label>
          <input type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} className="w-full glass p-2 bg-transparent border border-white/10 rounded" />
        </div>
        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
            Email Notifications
          </label>
        </div>
        <button onClick={handleSave} className="px-6 py-2 bg-gradient-cyan-purple-pink rounded-lg text-white">Save</button>
      </div>
    </div>
  );
}
