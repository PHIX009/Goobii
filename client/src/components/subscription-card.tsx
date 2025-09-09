import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Check, Calendar } from "lucide-react";

interface SubscriptionCardProps {
  id: string;
  title: string;
  description: string;
  washCount: number;
  features: string[];
  isPopular?: boolean;
  onClick: () => void;
}

export default function SubscriptionCard({ 
  id,
  title, 
  description, 
  washCount, 
  features, 
  isPopular = false,
  onClick 
}: SubscriptionCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  // Track mouse position for glow effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.button 
      ref={cardRef}
      layoutId={`subscription-${id}`}
      className="subscription-card w-full text-left bg-[var(--brand-bg)] p-8 shadow-lg hover:shadow-xl hover:shadow-[var(--brand-secondary)]/30 transition-all duration-300 border border-[var(--brand-primary)]/10 hover:border-[var(--brand-secondary)]/30 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[var(--brand-pop)] focus:ring-0 ring-offset-2 ring-offset-white cursor-pointer relative overflow-hidden"
      style={{ borderRadius: '12px 4px 12px 12px' }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-controls={`modal-${title.toLowerCase().replace(/\s+/g, '-')}`}
      data-testid={`subscription-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* Title */}
      <h3 
        className="text-3xl font-extrabold text-[var(--brand-contrast-2)] tracking-tight mb-2"
        style={{ fontFamily: 'var(--font-grandview-bold)' }}
      >
        {title}
        {isPopular && (
          <Badge className="ml-2 bg-[var(--brand-pop)] text-white text-xs">Popular</Badge>
        )}
      </h3>
      
      {/* Thin barrier */}
      <div className="h-0.5 bg-[var(--brand-contrast-2)] mb-4"></div>
      
      {/* Description */}
      <p 
        className="text-[var(--brand-primary)] mb-6 leading-relaxed text-sm"
        style={{ fontFamily: 'var(--font-grandview)' }}
      >
        {description}
      </p>
      
      {/* Wash Count and Features Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {/* Wash Count (Left) */}
        <div>
          <h4 
            className="font-extrabold text-[var(--brand-secondary)] mb-3"
            style={{ fontFamily: 'var(--font-grandview-bold)' }}
          >
            Monthly Washes
          </h4>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-[var(--brand-secondary)] mr-2" />
            <span className="text-2xl font-bold text-[var(--brand-contrast-2)]" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
              {washCount}
            </span>
            <span className="text-sm text-[var(--brand-primary)] ml-1">/month</span>
          </div>
        </div>

        {/* Features (Right) */}
        <div>
          <h4 
            className="font-extrabold text-[var(--brand-secondary)] mb-3"
            style={{ fontFamily: 'var(--font-grandview-bold)' }}
          >
            Highlights
          </h4>
          <ul className="space-y-1.5 text-xs text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-3 h-3 text-[var(--brand-secondary)] mr-1.5 flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-[var(--brand-secondary)] font-medium">
                +{features.length - 3} more benefits
              </li>
            )}
          </ul>
        </div>
      </div>
      
      {/* Learn More Button */}
      <div className="flex justify-end">
        <span 
          className="text-xs text-[var(--brand-secondary)] font-medium"
          style={{ fontFamily: 'var(--font-grandview)' }}
        >
          Click to learn more →
        </span>
      </div>
    </motion.button>
  );
}
