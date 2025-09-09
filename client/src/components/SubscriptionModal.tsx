import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation, useReducedMotion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X, Calendar, Check, Clock, Users, Star } from 'lucide-react';

interface SubscriptionModalProps {
  id: string;
  subscription: {
    id: string;
    title: string;
    description: string;
    washCount: number;
    features: string[];
    isPopular?: boolean;
    bestFor: string;
    priceDetails: string;
    benefits: string[];
    limitations: string[];
    planType: string;
  };
  onClose: () => void;
}

export default function SubscriptionModal({ id, subscription, onClose }: SubscriptionModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const lastWasKeyboardRef = useRef(false);

  // Check for reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Track keyboard vs mouse usage for focus management
  useEffect(() => {
    const onKey = () => (lastWasKeyboardRef.current = true);
    const onPointer = () => (lastWasKeyboardRef.current = false);
    
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointer);
    
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointer);
    };
  }, []);

  // Handle escape key and setup
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        lastWasKeyboardRef.current = true;
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

  // Focus management with keyboard detection
  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      modal.focus();
    }
  }, []);

  const restoreFocus = () => {
    const triggerCard = document.querySelector(`[data-testid="subscription-card-${id}"]`) as HTMLButtonElement;
    if (triggerCard) {
      if (lastWasKeyboardRef.current) {
        // Scroll into view before focusing
        triggerCard.scrollIntoView({ block: 'center', behavior: 'smooth' });
        triggerCard.focus();
      } else {
        triggerCard.blur(); // Avoid orange ring after mouse close
      }
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Lightning-fast spring settings for instant response
  const spring = { type: 'spring', stiffness: 600, damping: 40, mass: 0.7 };
  const layoutTransition = prefersReducedMotion ? { duration: 0 } : spring;

  // Instant backdrop animation
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.12, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.1, ease: 'easeIn' }
    }
  };

  return createPortal(
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" onExitComplete={restoreFocus}>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          onClick={handleBackdropClick}
          style={{ pointerEvents: 'auto' }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" />
          
          {/* Modal Surface - Uses same layoutId as SubscriptionCard */}
          <motion.div
            ref={modalRef}
            layoutId={`subscription-${id}`}
            className="relative w-full max-w-4xl bg-white shadow-2xl will-change-transform"
            style={{ 
              borderRadius: '12px 4px 12px 12px',
              transform: 'translateZ(0)' // Force hardware acceleration
            }}
            transition={layoutTransition}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
            data-testid={`subscription-modal-${id}`}
          >
            {/* Scrollable content wrapper */}
            <div className="max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[var(--brand-primary)]/10">
                <h2
                  id="modal-title"
                  className="text-3xl font-extrabold text-[var(--brand-contrast-2)] tracking-tight"
                  style={{ fontFamily: 'var(--font-grandview-bold)' }}
                >
                  {subscription.title}
                  {subscription.isPopular && (
                    <span className="ml-3 inline-block bg-[var(--brand-pop)] text-white text-sm px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </h2>
                
                <button
                  onClick={onClose}
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
                  {subscription.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Plan Details */}
                    <div>
                      <h3 
                        className="text-xl font-extrabold text-[var(--brand-secondary)] mb-4"
                        style={{ fontFamily: 'var(--font-grandview-bold)' }}
                      >
                        Plan Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-[var(--brand-secondary)] mr-3" />
                          <span 
                            className="text-[var(--brand-primary)]"
                            style={{ fontFamily: 'var(--font-grandview)' }}
                          >
                            <strong>{subscription.washCount} washes</strong> per month
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-[var(--brand-secondary)] mr-3" />
                          <span 
                            className="text-[var(--brand-primary)]"
                            style={{ fontFamily: 'var(--font-grandview)' }}
                          >
                            {subscription.planType}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-[var(--brand-secondary)] mr-3" />
                          <span 
                            className="text-[var(--brand-primary)]"
                            style={{ fontFamily: 'var(--font-grandview)' }}
                          >
                            {subscription.priceDetails}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 
                        className="text-xl font-extrabold text-[var(--brand-secondary)] mb-4"
                        style={{ fontFamily: 'var(--font-grandview-bold)' }}
                      >
                        What's Included
                      </h3>
                      <ul className="space-y-2">
                        {subscription.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-4 h-4 text-[var(--brand-secondary)] mr-3 flex-shrink-0 mt-0.5" />
                            <span 
                              className="text-[var(--brand-primary)] text-sm"
                              style={{ fontFamily: 'var(--font-grandview)' }}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Subscription Details */}
                    <div className="bg-[var(--brand-primary)]/5 p-6 rounded-lg">
                      <h3 
                        className="text-xl font-extrabold text-[var(--brand-secondary)] mb-4"
                        style={{ fontFamily: 'var(--font-grandview-bold)' }}
                      >
                        Subscription Benefits
                      </h3>
                      
                      <div className="space-y-4">
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
                            {subscription.bestFor}
                          </p>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 
                            className="font-bold text-[var(--brand-secondary)] mb-2"
                            style={{ fontFamily: 'var(--font-grandview-bold)' }}
                          >
                            Key Benefits
                          </h4>
                          <ul className="space-y-1 text-sm text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
                            {subscription.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <Star className="w-4 h-4 text-[var(--brand-secondary)] mr-2 flex-shrink-0 mt-0.5" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Limitations */}
                        {subscription.limitations.length > 0 && (
                          <div>
                            <h4 
                              className="font-bold text-[var(--brand-secondary)] mb-2"
                              style={{ fontFamily: 'var(--font-grandview-bold)' }}
                            >
                              Important Notes
                            </h4>
                            <ul className="space-y-1 text-sm text-[var(--brand-primary)]" style={{ fontFamily: 'var(--font-grandview)' }}>
                              {subscription.limitations.map((limitation, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="w-2 h-2 bg-[var(--brand-secondary)] rounded-full mr-2 flex-shrink-0 mt-2"></span>
                                  {limitation}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Subscription Illustration Placeholder */}
                    <div className="bg-[var(--brand-primary)]/5 p-6 rounded-lg">
                      <div className="aspect-square bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[var(--brand-primary)]/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <Calendar className="w-8 h-8 text-[var(--brand-primary)]" />
                          </div>
                          <p 
                            className="text-sm text-[var(--brand-primary)] font-medium"
                            style={{ fontFamily: 'var(--font-grandview)' }}
                          >
                            Subscription Visualization
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </LazyMotion>,
    document.body
  );
}