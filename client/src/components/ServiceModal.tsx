import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    process: string[];
    products: string[];
    tools: string[];
    equipment: string[];
  };
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [clickedCardRect, setClickedCardRect] = useState<DOMRect | null>(null);

  // Focus management and keyboard handling
  useEffect(() => {
    if (isOpen) {
      // Focus the close button when modal opens
      closeButtonRef.current?.focus();
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Handle escape key
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  // Backdrop click handler
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Store the initial position for animations
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });

  // Get card position immediately when modal is about to open
  useEffect(() => {
    if (isOpen) {
      // Capture position immediately
      const clickedCard = document.querySelector(`[data-testid="service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}"]`);
      if (clickedCard) {
        const rect = clickedCard.getBoundingClientRect();
        setClickedCardRect(rect);
        
        // Calculate position immediately
        if (!prefersReducedMotion) {
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;
          const viewportCenterX = window.innerWidth / 2;
          const viewportCenterY = window.innerHeight / 2;
          
          const pos = {
            x: cardCenterX - viewportCenterX,
            y: cardCenterY - viewportCenterY
          };
          
          setInitialPos(pos);
        }
      }
    }
  }, [isOpen, service.title, prefersReducedMotion]);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.05,
      x: prefersReducedMotion ? 0 : initialPos.x,
      y: prefersReducedMotion ? 0 : initialPos.y,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.15 : 1.0,
        type: 'spring',
        stiffness: 80,
        damping: 12,
        mass: 0.8
      }
    },
    exit: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.05,
      x: prefersReducedMotion ? 0 : initialPos.x,
      y: prefersReducedMotion ? 0 : initialPos.y,
      transition: {
        duration: prefersReducedMotion ? 0.15 : 0.8,
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 0.6
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--brand-bg)] shadow-2xl"
            style={{ borderRadius: '12px 4px 12px 12px' }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            data-testid={`service-modal-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--brand-primary)]/10">
              <h2
                id="modal-title"
                className="text-3xl font-extrabold text-[var(--brand-contrast-2)] tracking-tight"
                style={{ fontFamily: 'var(--font-grandview-bold)' }}
              >
                {service.title}
              </h2>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 text-[var(--brand-primary)] hover:text-[var(--brand-pop)] focus:outline-none transition-colors"
                style={{ borderRadius: '12px 4px 12px 12px' }}
                aria-label="Close modal"
                data-testid="close-modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Purpose line */}
              <p className="text-lg text-[var(--brand-primary)] leading-relaxed" style={{ fontFamily: 'var(--font-grandview)' }}>
                {service.description}
              </p>

              {/* Process Section */}
              <div>
                <h3 className="text-xl font-bold text-[var(--brand-secondary)] mb-4" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
                  Process
                </h3>
                <ol className="space-y-3">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span 
                        className="flex-shrink-0 w-8 h-8 bg-[var(--brand-primary)] text-[var(--brand-bg)] rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5"
                      >
                        {index + 1}
                      </span>
                      <span className="text-[var(--brand-primary)] leading-relaxed" style={{ fontFamily: 'var(--font-grandview)' }}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Used Section */}
              <div>
                <h3 className="text-xl font-bold text-[var(--brand-secondary)] mb-6" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
                  Used
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Products */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <img src="/svg/icon-products.svg" alt="Products used" className="w-12 h-12 text-[var(--brand-primary)]" />
                    </div>
                    <h4 className="font-bold text-[var(--brand-secondary)] mb-3" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
                      Products
                    </h4>
                    <ul className="space-y-1 text-sm text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
                      {service.products.map((product, index) => (
                        <li key={index}>{product}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <img src="/svg/icon-tools.svg" alt="Tools used" className="w-12 h-12 text-[var(--brand-primary)]" />
                    </div>
                    <h4 className="font-bold text-[var(--brand-secondary)] mb-3" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
                      Tools
                    </h4>
                    <ul className="space-y-1 text-sm text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
                      {service.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Equipment */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <img src="/svg/icon-equipment.svg" alt="Equipment used" className="w-12 h-12 text-[var(--brand-primary)]" />
                    </div>
                    <h4 className="font-bold text-[var(--brand-secondary)] mb-3" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
                      Equipment
                    </h4>
                    <ul className="space-y-1 text-sm text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
                      {service.equipment.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}