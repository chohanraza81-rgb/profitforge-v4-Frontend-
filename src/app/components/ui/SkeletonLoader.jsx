// frontend/src/app/components/ui/SkeletonLoader.jsx
'use client';
import { motion } from 'framer-motion';

export default function SkeletonLoader() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* 🔥 Confidence Badge Skeleton */}
      <div className="glass h-16 w-full bg-white/5 rounded-2xl" />

      {/* 🔥 Score Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="glass h-32 bg-white/5 rounded-2xl p-6 space-y-2">
            <div className="h-4 w-20 bg-white/10 rounded" />
            <div className="h-8 w-16 bg-white/10 rounded" />
            <div className="h-3 w-24 bg-white/10 rounded" />
          </div>
        ))}
      </div>

      {/* 🔥 Two Column Skeletons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass h-64 bg-white/5 rounded-2xl" />
        <div className="glass h-64 bg-white/5 rounded-2xl" />
      </div>

      {/* 🔥 Calculator Skeleton */}
      <div className="glass h-48 bg-white/5 rounded-2xl" />

      {/* 🔥 Supplier Comparison Skeleton */}
      <div className="glass h-32 bg-white/5 rounded-2xl" />

      {/* 🔥 Export Section Skeleton */}
      <div className="glass h-20 bg-white/5 rounded-2xl" />
    </div>
  );
}
