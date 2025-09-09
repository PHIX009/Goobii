import { useRef } from 'react';

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

  return (
    <button 
      ref={cardRef}
      className="w-full text-left bg-[var(--brand-bg)] p-8 shadow-lg hover:shadow-xl hover:shadow-[var(--brand-pop)]/20 transition-all duration-300 border border-[var(--brand-primary)]/10 hover:border-[var(--brand-pop)]/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--brand-pop)] focus:ring-offset-2 focus:ring-offset-[var(--brand-bg)] cursor-pointer"
      style={{ borderRadius: '12px 4px 12px 12px' }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-controls={`modal-${title.toLowerCase().replace(/\s+/g, '-')}`}
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Title */}
      <h3 
        className="text-3xl font-extrabold text-[var(--brand-contrast-2)] tracking-tight mb-3"
        style={{ fontFamily: 'var(--font-grandview-bold)' }}
      >
        {title}
      </h3>
      
      {/* Description */}
      <p 
        className="text-[var(--brand-primary)] mb-6 leading-relaxed"
        style={{ fontFamily: 'var(--font-grandview)' }}
      >
        {description}
      </p>
      
      {/* Highlights and Duration Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {/* Highlights (Left) */}
        <div>
          <h4 
            className="font-bold text-[var(--brand-secondary)] mb-3"
            style={{ fontFamily: 'var(--font-grandview-bold)' }}
          >
            Highlights
          </h4>
          <ul className="space-y-1 text-sm text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        
        {/* Duration (Right) */}
        <div>
          <h4 
            className="font-bold text-[var(--brand-secondary)] mb-3"
            style={{ fontFamily: 'var(--font-grandview-bold)' }}
          >
            Estimated duration
          </h4>
          <p 
            className="text-sm text-[var(--brand-primary)]"
            style={{ fontFamily: 'var(--font-grandview)' }}
          >
            {duration}
          </p>
        </div>
      </div>
      
      {/* Best for line */}
      <p 
        className="text-sm text-[var(--brand-primary)] font-medium"
        style={{ fontFamily: 'var(--font-grandview)' }}
      >
        <span className="font-bold">Best for:</span> {bestFor}
      </p>
    </button>
  );
}
