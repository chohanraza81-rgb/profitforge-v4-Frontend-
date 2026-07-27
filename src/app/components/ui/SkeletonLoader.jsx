'use client';
import { motion } from 'framer-motion';

export default function SkeletonLoader() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Confidence Badge Skeleton */}
      <div className="glass p-4 flex items-center gap-4">
        <div className="w-8 h-8 bg-white/5 rounded-full" />
        <div className="flex-1 h-6 bg-white/5 rounded-lg" />
        <div className="w-24 h-4 bg-white/5 rounded" />
      </div>

      {/* Score Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="glass p-6 h-32">
            <div className="h-4 w-20 bg-white/5 rounded mb-3" />
            <div className="h-10 w-16 bg-white/5 rounded" />
            <div className="h-3 w-24 bg-white/5 rounded mt-3" />
          </div>
        ))}
      </div>

      {/* Graph & Gallery Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-6 h-72">
          <div className="h-6 w-48 bg-white/5 rounded mb-4" />
          <div className="h-48 w-full bg-white/5 rounded" />
        </div>
        <div className="glass p-6 h-72">
          <div className="h-6 w-40 bg-white/5 rounded mb-4" />
          <div className="grid grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-white/5 rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* Calculators Skeleton */}
      <div className="glass p-6 h-48">
        <div className="h-6 w-32 bg-white/5 rounded mb-4" />
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="h-4 w-24 bg-white/5 rounded" />
            <div className="h-8 w-32 bg-white/5 rounded" />
          </div>
          <div className="space-y-3">
            <div className="h-4 w-24 bg-white/5 rounded" />
            <div className="h-8 w-32 bg-white/5 rounded" />
          </div>
        </div>
      </div>

      {/* Supplier Comparison Skeleton */}
      <div className="glass p-6 h-40">
        <div className="h-6 w-48 bg-white/5 rounded mb-4" />
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-white/5 rounded" />
          ))}
        </div>
      </div>

      {/* Export Buttons Skeleton */}
      <div className="glass p-4 flex flex-wrap gap-3">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-10 w-20 bg-white/5 rounded" />
        ))}
      </div>
    </div>
  );
          }
