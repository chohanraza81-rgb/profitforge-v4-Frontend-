'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export default function AnimatedNumber({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v * 10) / 10);
  useEffect(() => {
    const animation = animate(count, value, { duration: 1 });
    return () => animation.stop();
  }, [value]);
  return <motion.span>{rounded}</motion.span>;
}
