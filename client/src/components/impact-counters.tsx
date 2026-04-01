"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  target: number;
  suffix: string;
  label: string;
  formatter?: (value: number) => string;
}

function Counter({ target, suffix, label, formatter }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const count = useMotionValue(0);
  const springValue = useSpring(count, { duration: 2000, bounce: 0 });
  const displayValue = useTransform(springValue, (value) => {
    if (formatter) {
      return formatter(Math.round(value));
    }
    return Math.round(value).toLocaleString();
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isInView && !hasAnimated) {
      if (prefersReducedMotion) {
        count.set(target);
      } else {
        count.set(target);
      }
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, target, count]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center"
      data-testid={`counter-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="text-3xl lg:text-4xl font-grandview text-brand-primary mb-1 tracking-wide">
        <motion.span>{displayValue}</motion.span>
        <span className="text-brand-secondary">{suffix}</span>
      </div>
      <div className="text-sm font-grandview-bold text-brand-secondary/70 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

export default function ImpactCounters() {
  return (
    <div className="relative">
      {/* Subtle divider */}
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent mx-auto mb-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <Counter 
          target={1250000} 
          suffix="L" 
          label="Water saved"
          formatter={(value) => (value / 1000000).toFixed(1) + 'M'}
        />
        <Counter 
          target={12500} 
          suffix="" 
          label="Washes recorded"
        />
        <Counter 
          target={45} 
          suffix="" 
          label="Community partners"
        />
      </div>
    </div>
  );
}