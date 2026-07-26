'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Calculators({ data }) {
  const [reviews, setReviews] = useState(150);
  const [avgPrice, setAvgPrice] = useState(data?.raw?.rapidApi?.avgPrice || 20);
  const [fixedCost, setFixedCost] = useState(500);
  const [variableCost, setVariableCost] = useState(8);

  const salesEstimate = reviews * 0.15 * avgPrice;
  const breakEven = fixedCost / (avgPrice - variableCost);

  return (
    <div className="glass p-6">
      <h3 className="text-lg font-bold mb-4">🧮 Calculators</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-sm text-gray-400">Sales Estimator</h4>
          <div className="flex gap-4 items-center">
            <label className="text-sm">Reviews: <input type="number" value={reviews} onChange={e => setReviews(Number(e.target.value))} className="glass w-24 px-2 py-1" /></label>
            <label className="text-sm">Avg Price: <input type="number" value={avgPrice} onChange={e => setAvgPrice(Number(e.target.value))} className="glass w-24 px-2 py-1" /></label>
          </div>
          <motion.p className="text-2xl font-bold gradient-text mt-2" key={salesEstimate}>
            ${salesEstimate.toFixed(2)}
          </motion.p>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-gray-400">Break-even</h4>
          <div className="flex gap-4 items-center">
            <label className="text-sm">Fixed Costs: <input type="number" value={fixedCost} onChange={e => setFixedCost(Number(e.target.value))} className="glass w-24 px-2 py-1" /></label>
            <label className="text-sm">Variable Cost: <input type="number" value={variableCost} onChange={e => setVariableCost(Number(e.target.value))} className="glass w-24 px-2 py-1" /></label>
          </div>
          <motion.p className="text-2xl font-bold gradient-text mt-2" key={breakEven}>
            {breakEven.toFixed(0)} units
          </motion.p>
        </div>
      </div>
    </div>
  );
}
