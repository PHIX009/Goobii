"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PillarChipProps {
  label: string;
  description: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  delay?: number;
}

export default function PillarChip({ 
  label, 
  description, 
  icon, 
  isExpanded, 
  onToggle,
  delay = 0 
}: PillarChipProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`
        w-full text-left p-6 rounded-2xl border-2 transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-brand-pop focus:ring-offset-2
        ${isExpanded 
          ? 'border-brand-contrast-2 bg-white shadow-lg transform translate-y-[-2px]' 
          : 'border-brand-secondary/25 bg-card hover:border-brand-contrast-2 hover:bg-white hover:shadow-md'
        }
      `}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-expanded={isExpanded}
      aria-controls={`chip-content-${label.replace(/\s+/g, '-').toLowerCase()}`}
      data-testid={`pillar-chip-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-8 h-8 transition-colors duration-300 ${
          isExpanded ? 'text-brand-contrast-2' : 'text-brand-primary'
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-grandview-bold text-brand-primary mb-2">
            {label}
          </h3>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                id={`chip-content-${label.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <p className="text-brand-secondary/80 font-grandview leading-relaxed">
                  {description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.button>
  );
}