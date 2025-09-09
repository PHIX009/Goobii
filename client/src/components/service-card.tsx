import { useRef, useEffect } from 'react';
import { Clock, Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  highlights: string[];
  duration: string;
  bestFor: string;
  onClick: () => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  highlights,
  duration,
  bestFor,
  onClick
}: ServiceCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
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
    <button 
      ref={cardRef}
      className="service-card w-full text-left bg-[var(--brand-bg)] p-8 shadow-lg hover:shadow-xl hover:shadow-[var(--brand-secondary)]/30 transition-all duration-300 border border-[var(--brand-primary)]/10 hover:border-[var(--brand-secondary)]/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--brand-pop)] focus:ring-offset-2 focus:ring-offset-[var(--brand-bg)] cursor-pointer relative overflow-hidden"
      style={{ borderRadius: '12px 4px 12px 12px' }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-controls={`modal-${title.toLowerCase().replace(/\s+/g, '-')}`}
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Title */}
      <h3 
        className="text-3xl font-extrabold text-[var(--brand-contrast-2)] tracking-tight mb-2"
        style={{ fontFamily: 'var(--font-grandview-bold)' }}
      >
        {title}
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
      
      {/* Highlights and Duration Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {/* Highlights (Left) */}
        <div>
          <h4 
            className="font-extrabold text-[var(--brand-secondary)] mb-3"
            style={{ fontFamily: 'var(--font-grandview-bold)' }}
          >
            Highlights
          </h4>
          <ul className="space-y-1.5 text-xs text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-3 h-3 text-[var(--brand-secondary)] mr-2 flex-shrink-0 mt-0.5" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Duration (Right) */}
        <div>
          <h4 
            className="font-extrabold text-[var(--brand-secondary)] mb-3"
            style={{ fontFamily: 'var(--font-grandview-bold)' }}
          >
            Estimated duration
          </h4>
          <div className="flex items-center">
            <Clock className="w-3 h-3 text-[var(--brand-secondary)] mr-2" />
            <p 
              className="text-xs text-[var(--brand-primary)]"
              style={{ fontFamily: 'var(--font-grandview)' }}
            >
              {duration}
            </p>
          </div>
        </div>
      </div>
      
      {/* Best for line */}
      <p 
        className="text-xs text-[var(--brand-primary)] font-medium"
        style={{ fontFamily: 'var(--font-grandview)' }}
      >
        <span className="font-bold">Best for:</span> {bestFor}
      </p>
    </button>
  );
}
