"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PillarChip from "./pillar-chip";
import ImpactCounters from "./impact-counters";
import { Link } from "wouter";
import { Droplets, Users, FileText, TrendingUp, ArrowRight } from "lucide-react";

// SVG Placeholder Components
const WaterRippleBg = () => (
  <svg 
    className="absolute inset-0 w-full h-full opacity-5" 
    viewBox="0 0 800 600" 
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="ripple-gradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0.1" />
        <stop offset="50%" stopColor="var(--brand-secondary)" stopOpacity="0.05" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>
    <motion.circle
      cx="400"
      cy="300"
      r="200"
      fill="url(#ripple-gradient)"
      initial={{ scale: 0.8, opacity: 0.3 }}
      animate={{ scale: 1.2, opacity: 0.1 }}
      transition={{
        duration: 16,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
    <motion.circle
      cx="200"
      cy="150"
      r="100"
      fill="url(#ripple-gradient)"
      initial={{ scale: 1.2, opacity: 0.1 }}
      animate={{ scale: 0.8, opacity: 0.3 }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 2
      }}
    />
  </svg>
);

const DropletIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2c-1.5 4.5-7 8.5-7 14a7 7 0 1 0 14 0c0-5.5-5.5-9.5-7-14z"/>
  </svg>
);

const pillarsData = [
  {
    label: "Planet-first by design",
    description: "We put environmental stewardship at the center of every choice, from methods to materials.",
    icon: <DropletIcon className="w-full h-full" />
  },
  {
    label: "People and places respected", 
    description: "Our approach considers communities, workers, and surfaces. Safe, considerate, and suited to Dubai.",
    icon: <Users className="w-full h-full" />
  },
  {
    label: "Transparent by default",
    description: "We show what we measure and how we improve, so progress is visible and accountable.", 
    icon: <FileText className="w-full h-full" />
  },
  {
    label: "Always improving together",
    description: "We learn from data and feedback and invite you to help shape what comes next.",
    icon: <TrendingUp className="w-full h-full" />
  }
];

export default function SustainabilitySection() {
  const [expandedChip, setExpandedChip] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleChipToggle = (index: number) => {
    setExpandedChip(expandedChip === index ? null : index);
  };

  return (
    <section 
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: 'var(--brand-bg)' }}
      data-testid="sustainability-section"
    >
      {/* Background Animation */}
      <WaterRippleBg />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">
            Purpose at the Core
          </h2>
          <p className="text-xl lg:text-2xl font-grandview text-brand-secondary/80 max-w-4xl mx-auto leading-relaxed">
            Goobii exists to make caring for the planet part of everyday life. Sustainability isn't a feature; it's the foundation we're building with our community.
          </p>
        </motion.div>

        {/* Pillar Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillarsData.map((pillar, index) => (
            <PillarChip
              key={pillar.label}
              label={pillar.label}
              description={pillar.description}
              icon={pillar.icon}
              isExpanded={expandedChip === index}
              onToggle={() => handleChipToggle(index)}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Impact Counters */}
        <div className="mb-16">
          <ImpactCounters />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/purpose-and-impact">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-primary text-brand-bg font-grandview-bold text-lg hover:bg-brand-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-pop focus:ring-offset-2"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              data-testid="cta-purpose-impact"
            >
              <motion.div
                animate={isHovered ? { rotate: 0, scale: 1 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isHovered ? (
                  <ArrowRight className="w-6 h-6" />
                ) : (
                  <DropletIcon className="w-6 h-6" />
                )}
              </motion.div>
              Discover your impact & our purpose
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Footer micro-line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-sm font-grandview text-brand-secondary/60">
            Read the full approach, metrics, and commitments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}