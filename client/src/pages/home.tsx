import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import CTAGroup from "@/components/cta-group";
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Droplets, Shield, Smartphone, Users, Zap, MapPin, CheckCircle, FileText, TrendingUp, ArrowRight } from "lucide-react";
import phoneImage from "@assets/Untitled design_1757328137575.png";
import logoImage from "@assets/Horizontal Logo + Tagline_1757358585705.png";

// Pillar Chip Component
function PillarChip({ label, description, icon, isExpanded, onToggle, delay = 0 }: {
  label: string;
  description: string; 
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  delay?: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`
        w-full text-left p-6 border-2 transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-brand-pop focus:ring-offset-2
        ${isExpanded 
          ? 'border-brand-contrast-2 bg-white shadow-lg transform translate-y-[-2px]' 
          : 'border-brand-secondary/25 bg-card hover:border-brand-contrast-2 hover:bg-white hover:shadow-md'
        }
      `}
      style={{ borderRadius: '12px 4px 12px 12px' }}
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

// Counter Component
function Counter({ target, suffix, label, formatter }: {
  target: number;
  suffix: string;
  label: string;
  formatter?: (value: number) => string;
}) {
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

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedChip, setExpandedChip] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Goobii - Eco-friendly car cleaning, made simple</title>
        <meta name="description" content="Sooftwash™ uses just 2–4 L per wash vs 100–150 L with pressure washes—without compromising results. Book eco-friendly car cleaning in Dubai." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24" data-testid="hero-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              {/* Hero Logo */}
              <div className={`mb-12 transition-all duration-500 ease-in-out transform ${
                isScrolled ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'
              }`}>
                <img 
                  src={logoImage} 
                  alt="Goobii - Planet. People. Purpose." 
                  className="h-40 lg:h-56 w-auto mx-auto" 
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Hero Image */}
              <div className="relative mb-12">
                <div className="w-full h-96 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 shadow-2xl max-w-4xl mx-auto flex items-center justify-center" style={{ borderRadius: '12px 4px 12px 12px' }}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplets className="w-10 h-10 text-brand-primary" />
                    </div>
                    <p className="text-brand-primary font-grandview-bold">Eco-friendly Car Cleaning</p>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-grandview-bold font-bold text-brand-primary mb-6">
                You lead the change. We make it effortless.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-grandview">
                Start a habit that matters. We guide the car care—you set the example and join a community moving with purpose.
              </p>
              
              {/* Primary CTA Group */}
              <div className="mb-12 flex justify-center">
                <CTAGroup size="lg" className="flex-col sm:flex-row" />
              </div>
            </div>
          </div>
        </section>

        {/* Value Cards */}
        <section className="py-16" data-testid="value-cards-section">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-grandview-bold font-bold text-center text-brand-primary mb-12">
              Lead the Change
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="bg-card p-6 shadow-lg text-center" style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="value-card-water">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Save Water</h3>
                <p className="text-muted-foreground">Your routine creates real impact. Sooftwash™ delivers a clean that respects resources, built for Dubai, using only a few liters by design.</p>
              </div>
              
              <div className="bg-card p-6 shadow-lg text-center" style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="value-card-chemistry">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Safe & Biodegradable</h3>
                <p className="text-muted-foreground">Our formulas are kind to people, surfaces, and surroundings. They are engineered for heat, dust, and the pace of daily city driving.</p>
              </div>
              
              <div className="bg-card p-6 shadow-lg text-center" style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="value-card-app">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">User-Friendly App</h3>
                <p className="text-muted-foreground">One tap, clear choices, zero fuss. Book, track, and keep your history in one place, then join the people with purpose today.</p>
              </div>
              
              <div className="bg-card p-6 shadow-lg text-center" style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="value-card-liinks">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Pro Liinks</h3>
                <p className="text-muted-foreground">Trained teams follow clear checklists for consistent results. The people you meet are professional, always reliable, and the face of our movement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16" data-testid="how-it-works-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-grandview-bold font-bold text-brand-primary mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">Simple steps. Real impact.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-card p-6 shadow-lg" style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="step-1">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">1. You book</h3>
                <p className="text-muted-foreground">Choose service, location, and time.</p>
              </div>
              
              <div className="text-center bg-card p-6 shadow-lg" style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="step-2">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">2. We arrive</h3>
                <p className="text-muted-foreground">Your Liink arrives prepared, professional, and on time.</p>
              </div>
              
              <div className="text-center bg-card p-6 shadow-lg" style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="step-3">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">3. Clean & Ready</h3>
                <p className="text-muted-foreground">Sooftwash™ clean, ready for what's next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Purpose at the Core */}
        <section 
          className="relative py-16 overflow-hidden"
          style={{ backgroundColor: 'var(--brand-bg)' }}
          data-testid="sustainability-section"
        >
          {/* Background Animation */}
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
          
          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-grandview-bold font-bold text-brand-primary mb-6">
                Purpose at the Core
              </h2>
              <p className="text-xl lg:text-2xl font-grandview text-brand-secondary/80 max-w-4xl mx-auto leading-relaxed">
                Goobii's mission is to make caring for the planet part of everyday life. Sustainability isn't a feature - it's the foundation we're building with our community.
              </p>
            </motion.div>

            {/* Pillar Chips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  label: "Planet-first by design",
                  description: "We put environmental stewardship at the center of every choice, from methods to materials.",
                  icon: <Droplets className="w-full h-full" />
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
              ].map((pillar, index) => (
                <PillarChip
                  key={pillar.label}
                  label={pillar.label}
                  description={pillar.description}
                  icon={pillar.icon}
                  isExpanded={expandedChip === index}
                  onToggle={() => setExpandedChip(expandedChip === index ? null : index)}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* Impact Counters */}
            <div className="mb-16">
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

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
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
                      <Droplets className="w-6 h-6" />
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


        {/* Secondary CTA Band */}
        <section className="py-16 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5" data-testid="secondary-cta-section">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-grandview-bold font-bold text-brand-primary mb-4">Join the People with Purpose</h2>
            <p className="text-xl text-brand-primary mb-4">Make your next clean a change the city feels.</p>
            <p className="text-lg text-brand-primary mb-8 font-grandview-bold">Download our App now!</p>
            
            <div className="flex justify-center">
              <CTAGroup size="lg" className="flex-col sm:flex-row" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
