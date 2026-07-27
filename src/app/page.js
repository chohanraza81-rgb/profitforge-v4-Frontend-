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
import { Sparkles, Zap, TrendingUp, Target, BarChart3 } from 'lucide-react';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const { data, loading, error, fetchData } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) fetchData(keyword);
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 md:mb-12"
      >
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-4">
          <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-purple-400 animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-extrabold gradient-text animate-gradient">
            PROFITFORGE v4.0
          </h1>
          <Zap className="w-5 h-5 md:w-8 md:h-8 text-cyan-400 animate-pulse" />
        </div>
        <p className="text-xs md:text-sm text-gray-400 tracking-widest uppercase font-light">
          Enterprise Data Intelligence · Real-Time Analytics
        </p>
        <div className="flex justify-center gap-2 md:gap-4 mt-2 md:mt-4 flex-wrap">
          <span className="px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs bg-white/5 border border-white/10 rounded-full text-cyan-400 flex items-center gap-1">
            <TrendingUp size={12} /> Live
          </span>
          <span className="px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs bg-white/5 border border-white/10 rounded-full text-purple-400 flex items-center gap-1">
            <Target size={12} /> 12 Metrics
          </span>
          <span className="px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs bg-white/5 border border-white/10 rounded-full text-pink-400 flex items-center gap-1">
            <BarChart3 size={12} /> 8 APIs
          </span>
        </div>
      </motion.div>

      {/* Search */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-3xl mx-auto mb-8 md:mb-12"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="🔍 Search product..."
            className="input-premium"
          />
        </div>
        <button type="submit" className="btn-premium w-full sm:w-auto flex items-center justify-center gap-2">
          <Zap size={18} /> Analyze
        </button>
      </motion.form>

      {/* Loading */}
      {loading && <SkeletonLoader />}

      {/* Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-6 text-center max-w-2xl mx-auto border-red-500/20"
        >
          <div className="text-4xl mb-3">⚠️</div>
          <p className="text-red-400 text-sm md:text-base">{error}</p>
          <p className="text-gray-500 text-xs mt-2">Please check connection and try again.</p>
        </motion.div>
      )}

      {/* Results */}
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:space-y-8"
        >
          <ConfidenceBadge confidence={data.confidence} />

          {/* Score Cards – 2 cols on mobile, 5 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {Object.entries(data.scores).filter(([k]) => k !== 'confidence').map(([key, score], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="card-score"
              >
                <h3 className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-medium">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex items-end gap-1 mt-1">
                  <span className="text-2xl md:text-4xl font-bold number-glow gradient-text">
                    {score.value !== null && score.value !== undefined ? <AnimatedNumber value={score.value} /> : 'N/A'}
                  </span>
                  {score.value !== null && score.value !== undefined && (
                    <span className="text-sm md:text-xl text-gray-600 font-light">/ 10</span>
                  )}
                  <DataSourceTooltip
                    source={score.source}
                    updated={data.timestamp}
                    latency={data.latency}
                    details={score.details}
                  />
                </div>
                <p className="text-[8px] md:text-xs text-gray-500 truncate">{score.details || '—'}</p>
                {score.value !== null && score.value !== undefined && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-white/5 rounded-b-2xl overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(score.value / 10) * 100}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrendGraph data={data.raw.serpApi} />
            <AdGallery ads={data.raw.apify?.ads || []} />
          </div>

          <Calculators data={data} />
          <SupplierComparison suppliers={data.raw.scrapingBee} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PricingSlider pricing={data.pricing} />
            <CompetitorMatrix competitors={data.raw.amazonScraper?.products || []} />
          </div>

          {/* Export & Copy Actions – mobile friendly */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-between items-center p-3 md:p-4 glass">
            <div className="flex flex-wrap gap-2">
              <ExportButtons data={data} />
            </div>
            <div className="flex flex-wrap gap-2">
              <CopyAllData data={data} />
              <CopySection data={data} section="metrics" />
              <CopySection data={data} section="bullets" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
    }
