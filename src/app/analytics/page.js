'use client';
import { useAuth } from '@/lib/useAuth';
import HeatmapChart from '../components/ui/HeatmapChart';

export default function AnalyticsPage() {
  const { user } = useAuth();
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold gradient-text mb-6">Analytics</h1>
      <HeatmapChart />
    </div>
  );
}
