'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdGallery({ ads }) {
  const [selected, setSelected] = useState(null);
  if (!ads || ads.length === 0) return <div className="glass p-6 text-center text-gray-500">No competitor ads</div>;
  return (
    <div className="glass p-6">
      <h3 className="text-lg font-bold mb-4">📸 Competitor Ads (6)</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ads.slice(0,6).map((ad, idx) => (
          <div
            key={idx}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
            onClick={() => setSelected(ad)}
          >
            <Image src={ad.image || '/placeholder.png'} alt={ad.title} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-sm truncate">{ad.title}</div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-2xl w-full glass p-4" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-white/80 hover:text-white" onClick={() => setSelected(null)}>
                <X size={24} />
              </button>
              <Image src={selected.image || '/placeholder.png'} alt={selected.title} width={600} height={600} className="rounded-lg" />
              <p className="mt-2 text-center">{selected.title}</p>
              <p className="text-sm text-gray-400">Engagement: {selected.engagement}%</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
            }
