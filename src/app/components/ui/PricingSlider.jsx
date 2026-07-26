'use client';
import { useState } from 'react';

export default function PricingSlider({ pricing }) {
  const [price, setPrice] = useState(pricing?.recommended || 20);
  if (!pricing) return null;
  return (
    <div className="glass p-6">
      <h3 className="text-lg font-bold mb-4">💰 Dynamic Pricing</h3>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-400">Competitor Avg: ${pricing.competitorAverage}</span>
        <input
          type="range"
          min={pricing.competitorAverage * 0.5}
          max={pricing.competitorAverage * 1.5}
          step={0.5}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-purple-500"
        />
        <span className="text-2xl font-bold gradient-text">${price.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-400 mt-2">
        <span>Markup: {pricing.markup}</span>
        <span>Margin: {pricing.margin}</span>
      </div>
    </div>
  );
}
