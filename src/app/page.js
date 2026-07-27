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
    <div className="container mx-auto px-4 py-8 max-w-7xl relative">
      {/* 🔥 Premium Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-extrabold gradient-text animate-gradient">
            PROFITFORGE v4.0
          </h1>
          <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
        <p className="text-gray-400 text-sm tracking-widest uppercase font-light">
          Enterprise Data Intelligence · Real-Time Analytics
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-cyan-400 flex items-center gap-1">
            <TrendingUp size={12} /> Live
          </span>
          <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-purple-400 flex items-center gap-1">
            <Target size={12} /> 12 Metrics
          </span>
          <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-pink-400 flex items-center gap-1">
            <BarChart3 size={12} /> 8 APIs
          </span>
        </div>
      </motion.div>

      {/* 🔥 Premium Search */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto mb-12"
      >
        <div className="relative flex-1 group">
          <div className="absolute -inset-0.5 bg-gradient-cyan-purple-pink rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="🔍 Enter product keyword to analyze..."
            className="relative premium-input"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="premium-btn relative"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Zap size={20} /> Analyze Now
          </span>
        </motion.button>
      </motion.form>

      {/* 🔥 Premium Loading */}
      {loading && <SkeletonLoader />}

      {/* 🔥 Premium Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 text-center max-w-2xl mx-auto border-red-500/20"
        >
          <div className="text-4xl mb-3">⚠️</div>
          <p className="text-red-400 text-lg">{error}</p>
          <p className="text-gray-500 text-sm mt-2">Please check your connection and try again.</p>
        </motion.div>
      )}

      {/* 🔥 Premium Results */}
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 🔥 Confidence Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <ConfidenceBadge confidence={data.confidence} />
          </motion.div>

          {/* 🔥 Score Cards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {Object.entries(data.scores).filter(([k]) => k !== 'confidence').map(([key, score], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                className="score-card card-3d group"
              >
                <div className="relative z-10">
                  <h3 className="text-gray-400 uppercase text-xs tracking-wider font-medium">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex items-end gap-2 mt-1">
                    <span className="text-4xl md:text-5xl font-bold number-glow gradient-text">
                      <AnimatedNumber value={score.value} />
                    </span>
                    <span className="text-xl text-gray-600 font-light">/ 10</span>
                    <DataSourceTooltip 
                      source={score.source} 
                      updated={data.timestamp} 
                      latency={data.latency} 
                      details={score.details}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate">{score.details || '—'}</p>
                </div>
                {/* 🔥 Animated progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 rounded-b-2xl overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(score.value / 10) * 100}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 🔥 Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TrendGraph data={data.raw.serpApi} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <AdGallery ads={data.raw.apify?.ads || []} />
            </motion.div>
          </div>

          {/* 🔥 More Premium Components */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Calculators data={data} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <SupplierComparison suppliers={data.raw.scrapingBee} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <PricingSlider pricing={data.pricing} />
            <CompetitorMatrix competitors={data.raw.rapidApi?.amazonProducts || []} />
          </motion.div>

          {/* 🔥 Export Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-3 justify-between items-center p-4 glass"
          >
            <div className="flex flex-wrap gap-2">
              <ExportButtons data={data} />
            </div>
            <div className="flex flex-wrap gap-2">
              <CopyAllData data={data} />
              <CopySection data={data} section="metrics" />
              <CopySection data={data} section="bullets" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
    }
