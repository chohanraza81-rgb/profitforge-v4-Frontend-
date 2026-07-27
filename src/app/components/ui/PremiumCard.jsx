// frontend/src/app/components/ui/PremiumCard.jsx
'use client';
import { motion } from 'framer-motion';

export default function PremiumCard({ 
  children, 
  className = '', 
  glow = false, 
  hover = true,
  delay = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`
        glass p-6 relative overflow-hidden
        ${hover ? 'card-3d' : ''}
        ${glow ? 'glow' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
