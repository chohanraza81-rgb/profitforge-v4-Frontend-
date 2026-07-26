'use client';
import { useAuth } from '@/lib/useAuth';
import Settings from '../components/settings/Settings';

export default function SettingsPage() {
  const { user } = useAuth();
  if (!user) return <div className="container mx-auto p-8 text-center">Please login.</div>;
  return <Settings />;
    }
