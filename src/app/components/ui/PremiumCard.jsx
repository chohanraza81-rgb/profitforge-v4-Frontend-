'use client';
import { motion } from 'framer-motion';

export default function PremiumCard({ 
  children, 
  className = '', 
  glow = false, 
  hover3D = false,
  delay = 0,
  ...props 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={hover3D ? { 
        scale: 1.02, 
        rotateY: 2, 
        rotateX: 2,
        boxShadow: '0 20px 60px rgba(168, 85, 247, 0.15)'
      } : { scale: 1.01 }}
      className={`
        relative glass p-6 rounded-2xl transition-all duration-500
        ${glow ? 'glow' : ''}
        ${hover3D ? 'card-3d' : ''}
        ${className}
      `}
      {...props}
    >
      {/* 🔥 Gradient Border Glow */}
      {glow && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
      )}
      
      {/* 🔥 Inner Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* 🔥 Animated Shimmer Line (Premium) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
}
