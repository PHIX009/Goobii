import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X, Clock, Check } from 'lucide-react';

interface ServiceModalProps {
  id: string;
  service: {
    id: string;
    title: string;
    description: string;
    highlights: string[];
    duration: string;
    bestFor: string;
    process: string[];
    products: string[];
    tools: string[];
    equipment: string[];
  };
  onClose: () => void;
}

export default function ServiceModal({ id, service, onClose }: ServiceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    // Prevent background scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Focus management
  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      // Focus the modal
      modal.focus();
    }
    
    return () => {
      // Return focus to the triggering card
      const triggerCard = document.querySelector(`[data-testid="service-card-${id}"]`) as HTMLButtonElement;
      if (triggerCard) {
        triggerCard.focus();
      }
    };
  }, [id]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Animation variants for backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        type: 'tween', 
        duration: prefersReducedMotion ? 0.05 : 0.18, 
        ease: 'easeOut' 
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        type: 'tween', 
        duration: prefersReducedMotion ? 0.05 : 0.15, 
        ease: 'easeOut' 
      }
    }
  };

  // Spring animation for the modal surface - smoother settings
  const springTransition = {
    layout: { 
      type: 'spring', 
      stiffness: prefersReducedMotion ? 400 : 200, 
      damping: prefersReducedMotion ? 40 : 25, 
      mass: prefersReducedMotion ? 0.5 : 0.8,
      duration: prefersReducedMotion ? 0.1 : undefined
    }
  };

  return createPortal(
    <AnimatePresence>
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
        
        {/* Modal Surface - Uses same layoutId as ServiceCard */}
        <motion.div
          ref={modalRef}
          layoutId={`service-${id}`}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--brand-bg)] shadow-2xl"
          style={{ borderRadius: '12px 4px 12px 12px' }}
          transition={springTransition}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          data-testid={`service-modal-${id}`}
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
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-transparent hover:bg-[var(--brand-pop)] hover:text-white transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-0 focus:ring-transparent"
              aria-label="Close modal"
              data-testid="button-close-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Description */}
            <p 
              className="text-lg text-[var(--brand-primary)] mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-grandview)' }}
            >
              {service.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Process Steps */}
                <div>
                  <h3 
                    className="text-xl font-extrabold text-[var(--brand-secondary)] mb-4"
                    style={{ fontFamily: 'var(--font-grandview-bold)' }}
                  >
                    Process
                  </h3>
                  <ol className="space-y-3">
                    {service.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-[var(--brand-secondary)] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span 
                          className="text-[var(--brand-primary)] text-sm leading-relaxed"
                          style={{ fontFamily: 'var(--font-grandview)' }}
                        >
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Used Section */}
                <div>
                  <h3 
                    className="text-xl font-extrabold text-[var(--brand-secondary)] mb-4"
                    style={{ fontFamily: 'var(--font-grandview-bold)' }}
                  >
                    Used
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Products */}
                    <div>
                      <h4 
                        className="font-bold text-[var(--brand-primary)] mb-2 text-sm"
                        style={{ fontFamily: 'var(--font-grandview-bold)' }}
                      >
                        Products
                      </h4>
                      <ul className="space-y-1 text-xs text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
                        {service.products.map((product, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-3 h-3 text-[var(--brand-secondary)] mr-1 flex-shrink-0 mt-0.5" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 
                        className="font-bold text-[var(--brand-primary)] mb-2 text-sm"
                        style={{ fontFamily: 'var(--font-grandview-bold)' }}
                      >
                        Tools
                      </h4>
                      <ul className="space-y-1 text-xs text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
                        {service.tools.map((tool, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-3 h-3 text-[var(--brand-secondary)] mr-1 flex-shrink-0 mt-0.5" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Equipment */}
                    <div>
                      <h4 
                        className="font-bold text-[var(--brand-primary)] mb-2 text-sm"
                        style={{ fontFamily: 'var(--font-grandview-bold)' }}
                      >
                        Equipment
                      </h4>
                      <ul className="space-y-1 text-xs text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
                        {service.equipment.map((equipment, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-3 h-3 text-[var(--brand-secondary)] mr-1 flex-shrink-0 mt-0.5" />
                            {equipment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Service Details */}
                <div className="bg-[var(--brand-primary)]/5 p-6 rounded-lg">
                  <h3 
                    className="text-xl font-extrabold text-[var(--brand-secondary)] mb-4"
                    style={{ fontFamily: 'var(--font-grandview-bold)' }}
                  >
                    Service Details
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Duration */}
                    <div>
                      <h4 
                        className="font-bold text-[var(--brand-secondary)] mb-2"
                        style={{ fontFamily: 'var(--font-grandview-bold)' }}
                      >
                        Estimated Duration
                      </h4>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-[var(--brand-secondary)] mr-2" />
                        <span 
                          className="text-[var(--brand-primary)]"
                          style={{ fontFamily: 'var(--font-grandview)' }}
                        >
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    {/* Best For */}
                    <div>
                      <h4 
                        className="font-bold text-[var(--brand-secondary)] mb-2"
                        style={{ fontFamily: 'var(--font-grandview-bold)' }}
                      >
                        Best For
                      </h4>
                      <p 
                        className="text-[var(--brand-primary)]"
                        style={{ fontFamily: 'var(--font-grandview)' }}
                      >
                        {service.bestFor}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 
                        className="font-bold text-[var(--brand-secondary)] mb-2"
                        style={{ fontFamily: 'var(--font-grandview-bold)' }}
                      >
                        Highlights
                      </h4>
                      <ul className="space-y-1 text-sm text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
                        {service.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-4 h-4 text-[var(--brand-secondary)] mr-2 flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service Illustration Placeholder */}
                <div className="bg-[var(--brand-primary)]/5 p-6 rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Check className="w-8 h-8 text-[var(--brand-primary)]" />
                      </div>
                      <p 
                        className="text-sm text-[var(--brand-primary)] font-medium"
                        style={{ fontFamily: 'var(--font-grandview)' }}
                      >
                        Service Illustration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}