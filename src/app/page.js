'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearch } from '@/lib/useSearch';
import TrendGraph from './components/ui/TrendGraph';
import AdGallery from './components/ui/AdGallery';
import Calculators from './components/ui/Calculators';
import SupplierComparison from './components/ui/SupplierComparison';
import ExportButtons from './components/ui/ExportButtons';
import CopyAllData from './components/ui/CopyAllData';
import CopySection from './components/ui/CopySection';
import ConfidenceBadge from './components/ui/ConfidenceBadge';
import DataSourceTooltip from './components/ui/DataSourceTooltip';
import SkeletonLoader from './components/ui/SkeletonLoader';
import AnimatedNumber from './components/ui/AnimatedNumber';
import PricingSlider from './components/ui/PricingSlider';
import CompetitorMatrix from './components/ui/CompetitorMatrix';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const { data, loading, error, fetchData } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) fetchData(keyword);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <motion.h1
        className="text-5xl font-extrabold text-center gradient-text mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        PROFITFORGE v4.0
      </motion.h1>

      <form onSubmit={handleSubmit} className="flex gap-4 max-w-2xl mx-auto mb-12">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter product keyword..."
          className="flex-1 glass px-6 py-4 text-lg bg-transparent border-none outline-none text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-cyan-purple-pink bg-[length:200%] animate-gradient rounded-xl font-bold text-white shadow-lg shadow-purple-500/25 hover:scale-105 transition"
        >
          Analyze
        </button>
      </form>

      {loading && <SkeletonLoader />}
      {error && <div className="glass p-6 text-red-400 text-center">Error: {error}</div>}

      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <ConfidenceBadge confidence={data.confidence} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(data.scores).filter(([k]) => k !== 'confidence').map(([key, score]) => (
              <div key={key} className="glass p-6 relative card-3d">
                <h3 className="text-gray-400 uppercase text-sm tracking-wider">{key}</h3>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold gradient-text">
                    <AnimatedNumber value={score.value} />
                  </span>
                  <span className="text-xl text-gray-500">/ 10</span>
                  <DataSourceTooltip source={score.source} updated={data.timestamp} latency={data.latency} details={score.details} />
                </div>
                <p className="text-sm text-gray-400 mt-1">{score.details || ''}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TrendGraph data={data.raw.serpApi} />
            <AdGallery ads={data.raw.apify?.ads || []} />
          </div>

          <Calculators data={data} />
          <SupplierComparison suppliers={data.raw.scrapingBee} />
          <PricingSlider pricing={data.pricing} />
          <CompetitorMatrix competitors={data.raw.rapidApi?.amazonProducts || []} />

          <div className="flex flex-wrap gap-4 justify-between items-center">
            <ExportButtons data={data} />
            <CopyAllData data={data} />
            <CopySection data={data} section="metrics" />
            <CopySection data={data} section="bullets" />
          </div>
        </motion.div>
      )}
    </div>
  );
          }
