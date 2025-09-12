import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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
  const [isClosing, setIsClosing] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Handle escape key and setup
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Two-phase close: content fade → surface shrink
  const handleClose = () => {
    setIsClosing(true);
  };

  const handleContentExitComplete = () => {
    onClose(); // This triggers the surface shrink
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const animationDuration = prefersReducedMotion ? 0 : 0.35;

  // Backdrop animation
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: animationDuration, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0,
      transition: { duration: animationDuration, ease: 'easeInOut' }
    }
  };

  // Content animation - separate from surface
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2, ease: 'easeOut', delay: 0.1 }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  };

  return createPortal(
    <AnimatePresence onExitComplete={handleContentExitComplete}>
      {!isClosing && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/60"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            onClick={handleBackdropClick}
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[51] flex items-center justify-center p-4 pointer-events-none">
            {/* Morphing Surface - only this morphs with the card */}
            <motion.div
              layoutId={`service-surface-${id}`}
              className="relative w-full max-w-4xl bg-[var(--brand-bg)] shadow-2xl"
              style={{ 
                borderRadius: '12px 4px 12px 12px',
                willChange: 'transform',
                contain: 'layout paint size'
              }}
              transition={{ type: 'tween', duration: animationDuration, ease: 'easeInOut' }}
            />
            
            {/* Modal Content - animated separately */}
            <motion.div
              ref={modalRef}
              className="absolute inset-4 pointer-events-auto"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              tabIndex={-1}
              data-testid={`service-modal-${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Scrollable content wrapper */}
              <div className="h-full max-h-[90vh] overflow-y-auto bg-[var(--brand-bg)] rounded-[12px_4px_12px_12px]">
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
                    onClick={handleClose}
                    className="p-2 rounded-full text-[var(--brand-secondary)] hover:text-[var(--brand-pop)] active:text-[var(--brand-pop)] focus-visible:ring-2 focus-visible:ring-[var(--brand-pop)] focus:ring-0 ring-offset-2 ring-offset-white transition-colors"
                    aria-label="Close modal"
                    data-testid="button-close-modal"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
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
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}