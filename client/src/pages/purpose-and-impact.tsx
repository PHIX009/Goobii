import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Link } from "wouter";
import { Droplets, Leaf, Zap, Calendar, Recycle, GraduationCap, Download, FileText } from "lucide-react";
import CTAGroup from "@/components/cta-group";

// Counter Component for Metrics
function Counter({ target, label, suffix = "", formatter }: {
  target: number;
  label: string;
  suffix?: string;
  formatter?: (value: number) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const count = useMotionValue(0);
  const springValue = useSpring(count, { duration: 1000, bounce: 0 });
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
        animate(count, target, { duration: 1.2 });
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
      className="text-center bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-250"
      style={{ borderRadius: '12px 4px 12px 12px' }}
      data-testid={`metric-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-3xl lg:text-4xl font-grandview text-brand-primary mb-2 tracking-wide">
        <motion.span>{displayValue}</motion.span>
        <span className="text-brand-secondary">{suffix}</span>
      </div>
      <div className="text-sm font-grandview-bold text-brand-secondary/70 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

// Step icon component for How it Works

export default function PurposeAndImpact() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Mock data for metrics (would come from props/API in real app)
  const completedWashes = 2500;
  const BASELINE_PER_WASH = 100;
  const GOOBII_PER_WASH = 4;
  const waterSaved = (BASELINE_PER_WASH - GOOBII_PER_WASH) * completedWashes;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  // Handle hash-based scrolling on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Small delay to ensure elements are rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Purpose & Impact | Goobii - Small choices. Big impact.</title>
        <meta name="description" content="Learn about Goobii's purpose to build sustainable everyday services and our Sooftwash™ technology's environmental impact. Join the movement for cleaner car care." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Purpose & Impact | Goobii - Small choices. Big impact." />
        <meta property="og:description" content="Learn about Goobii's purpose to build sustainable everyday services and our Sooftwash™ technology's environmental impact." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goobii.com/purpose-and-impact" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="pi-hero" className="relative py-24 lg:py-32 overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Clean green environment background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/70 to-brand-secondary/50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <motion.h1 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-ghost font-bold mb-6"
            >
              Purpose & Impact
            </motion.h1>
            
            <motion.p 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl lg:text-3xl mb-12 font-grandview"
            >
              Small choices. Big impact.
            </motion.p>
            
          </div>
        </section>

        {/* Intro Section */}
        <section id="pi-intro" className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Mobile: Media first, Desktop: Text left (2/3) */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="prose prose-lg max-w-none"
                >
                  <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      We started Goobii to prove that caring for your car can be kinder to the planet — and simple for you. Our purpose goes further: we're building a platform for sustainable everyday services beyond car care, evolving step by step as we learn and improve.
                    </p>
                    
                    <p>
                      Traditional pressure washes typically use 100–150 liters of water per vehicle, while Sooftwash™ uses just 2–4 liters depending on car size. That's a measurable cut in water use, fewer harmful chemicals, and cleaner operations without compromising results. The point isn't a slogan — it's savings you can verify at scale.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Small media card right (1/3) */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-6 shadow-md"
                  style={{ borderRadius: '12px 4px 12px 12px' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Sustainable community garden"
                    className="w-full h-48 object-cover mb-4"
                    style={{ borderRadius: '8px 2px 8px 8px' }}
                    loading="lazy"
                    width="400"
                    height="192"
                  />
                  <p className="text-sm text-brand-secondary font-grandview text-center">
                    Building sustainable communities
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="pi-how" className="py-16 lg:py-20 bg-gray-50/50" style={{ scrollMarginTop: '100px' }}>
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-grandview-bold text-brand-primary mb-8 text-center"
            >
              Sooftwash™ - How does it work?
            </motion.h2>
            
            <motion.p 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-12"
            >
              Sooftwash™ is engineered to lift dirt without scratching by creating a lubricating barrier between the surface and contaminants.
            </motion.p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text left */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                
                <div className="space-y-6">
                  {[
                    { number: 1, title: "Mist", description: "We apply the solution across the panel." },
                    { number: 2, title: "Lift & encapsulate", description: "As it settles, the solution creeps beneath the dirt, encapsulating particles and forming a thin lubricating layer between the grime and the surface." },
                    { number: 3, title: "Glide wipe", description: "A premium microfiber carries the lifted dirt away with minimal friction, preventing marring and scratches." },
                    { number: 4, title: "Finish", description: "The surface is left clean, streak-free, and glossy, and tends to stay cleaner longer." }
                  ].map((step) => (
                    <div key={step.number} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 border-2 border-brand-primary/20 flex items-center justify-center flex-shrink-0 shadow-md" style={{ borderRadius: '12px 4px 12px 12px' }}>
                        <span className="text-brand-primary font-grandview-bold text-lg">{step.number}</span>
                      </div>
                      <div className="flex-1 bg-gray-50/80 border-2 border-brand-primary/20 p-4 shadow-md" style={{ borderRadius: '12px 4px 12px 12px' }}>
                        <h3 className="text-brand-primary font-grandview-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Diagram right */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* SVG Cross-section Diagram - Larger */}
                <div className="bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300" style={{ borderRadius: '12px 4px 12px 12px' }}>
                  <svg viewBox="0 0 500 250" className="w-full h-auto">
                    {/* Paint/Clearcoat layer */}
                    <rect x="50" y="150" width="300" height="20" fill="#2D3748" />
                    <text x="60" y="145" className="text-xs" fill="#2D3748">Paint/Clearcoat</text>
                    
                    {/* Solution film layer */}
                    <rect x="50" y="140" width="300" height="10" fill="#3182CE" opacity="0.6" />
                    <text x="60" y="135" className="text-xs" fill="#3182CE">Solution Film</text>
                    
                    {/* Dirt particles */}
                    <circle cx="100" cy="125" r="8" fill="#8B4513" opacity="0.8" />
                    <circle cx="150" cy="120" r="6" fill="#8B4513" opacity="0.8" />
                    <circle cx="200" cy="128" r="7" fill="#8B4513" opacity="0.8" />
                    <circle cx="280" cy="122" r="5" fill="#8B4513" opacity="0.8" />
                    <text x="60" y="115" className="text-xs" fill="#8B4513">Dirt Particles</text>
                    
                    {/* Microfiber path arrow */}
                    <path d="M 80 80 Q 200 60 320 80" stroke="#E53E3E" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                    <text x="180" y="55" className="text-xs text-center" fill="#E53E3E">Microfiber Path</text>
                    
                    {/* Arrow marker */}
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#E53E3E" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics Band Section */}
        <section id="pi-metrics" className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <Counter 
                target={waterSaved}
                label="Water saved"
                suffix=" L"
                formatter={(value) => value.toLocaleString()}
              />
              
              <Counter 
                target={85}
                label="Safer chemistry"
                suffix="%"
              />
              
              <Counter 
                target={100}
                label="Clean operations"
                suffix="%"
              />
              
            </div>
          </div>
        </section>

        {/* Pillars Mosaic Section */}
        <section id="pi-pillars" className="py-16 lg:py-20 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-grandview-bold text-brand-primary mb-12 text-center"
            >
              Pillars of Impact
            </motion.h2>
            
            {/* Asymmetric grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {/* Large tile 1 */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:col-span-3 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-250"
                style={{ borderRadius: '12px 4px 12px 12px' }}
                data-testid="pillar-water-stewardship"
              >
                <div className="flex items-start gap-4">
                  <Droplets className="w-8 h-8 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Water stewardship</h3>
                    <p className="text-muted-foreground">Cutting water use without compromising results.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Large tile 2 */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-3 bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-250"
                style={{ borderRadius: '12px 4px 12px 12px' }}
                data-testid="pillar-safer-chemistry"
              >
                <div className="flex items-start gap-4">
                  <Leaf className="w-8 h-8 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Safer chemistry</h3>
                    <p className="text-muted-foreground">Effective cleaning with biodegradable, non-hazardous formulations.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Small tile 1 */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-span-2 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-250"
                style={{ borderRadius: '12px 4px 12px 12px' }}
                data-testid="pillar-clean-energy"
              >
                <Zap className="w-6 h-6 text-brand-primary mb-3" />
                <h3 className="text-lg font-grandview-bold text-brand-primary mb-2">Clean energy operations</h3>
                <p className="text-muted-foreground text-sm">Electrification of tools and power systems in the field.</p>
              </motion.div>
              
              {/* Small tile 2 */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:col-span-2 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-250"
                style={{ borderRadius: '12px 4px 12px 12px' }}
                data-testid="pillar-circular-systems"
              >
                <Recycle className="w-6 h-6 text-brand-primary mb-3" />
                <h3 className="text-lg font-grandview-bold text-brand-primary mb-2">Circular systems & waste</h3>
                <p className="text-muted-foreground text-sm">Reduce, reuse, recycle — towels, packaging, and refills.</p>
              </motion.div>
              
              {/* Small tile 3 */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="md:col-span-2 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-250"
                style={{ borderRadius: '12px 4px 12px 12px' }}
                data-testid="pillar-community"
              >
                <GraduationCap className="w-6 h-6 text-brand-primary mb-3" />
                <h3 className="text-lg font-grandview-bold text-brand-primary mb-2">Community & education</h3>
                <p className="text-muted-foreground text-sm">Practical guidance and local initiatives that scale impact.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Near-Term Initiatives Section */}
        <section id="pi-initiatives" className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-grandview-bold text-brand-primary mb-12 text-center"
            >
              Near-Term Initiatives
            </motion.h2>
            
            <div className="space-y-8">
              {/* Initiative 1 - Left aligned */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center"
              >
                <div className="lg:col-span-1">
                  <div className="w-20 h-20 bg-brand-primary/10 flex items-center justify-center mx-auto lg:mx-0" style={{ borderRadius: '12px 4px 12px 12px' }}>
                    <Droplets className="w-10 h-10 text-brand-primary" />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Closed-loop water care</h3>
                  <p className="text-muted-foreground">Design a towel-wash water recycling system to reclaim and reuse laundry water for non-contact tasks.</p>
                </div>
              </motion.div>
              
              {/* Initiative 2 - Right aligned */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center"
              >
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Sustainable energy for operations</h3>
                  <p className="text-muted-foreground">Pilot solar-assisted charging for our power stations; increase renewable share of our energy mix.</p>
                </div>
                <div className="lg:col-span-1 order-1 lg:order-2">
                  <div className="w-20 h-20 bg-brand-primary/10 flex items-center justify-center mx-auto lg:mx-0" style={{ borderRadius: '12px 4px 12px 12px' }}>
                    <Zap className="w-10 h-10 text-brand-primary" />
                  </div>
                </div>
              </motion.div>
              
              {/* Initiative 3 - Left aligned */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center"
              >
                <div className="lg:col-span-1">
                  <div className="w-20 h-20 bg-brand-primary/10 flex items-center justify-center mx-auto lg:mx-0" style={{ borderRadius: '12px 4px 12px 12px' }}>
                    <Recycle className="w-10 h-10 text-brand-primary" />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Packaging & refills</h3>
                  <p className="text-muted-foreground">PET is already in use for most packaging; expand bulk refills and push recyclability across the entire flow.</p>
                </div>
              </motion.div>
              
              {/* Initiative 4 - Right aligned */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center"
              >
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Fleet & mobility</h3>
                  <p className="text-muted-foreground">Field kit is already electric; as we add new transport modes, keep them electric by default.</p>
                </div>
                <div className="lg:col-span-1 order-1 lg:order-2">
                  <div className="w-20 h-20 bg-brand-primary/10 flex items-center justify-center mx-auto lg:mx-0" style={{ borderRadius: '12px 4px 12px 12px' }}>
                    <Zap className="w-10 h-10 text-brand-primary" />
                  </div>
                </div>
              </motion.div>
              
              {/* Initiative 5 - Left aligned */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center"
              >
                <div className="lg:col-span-1">
                  <div className="w-20 h-20 bg-brand-primary/10 flex items-center justify-center mx-auto lg:mx-0" style={{ borderRadius: '12px 4px 12px 12px' }}>
                    <FileText className="w-10 h-10 text-brand-primary" />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Measurement & reporting</h3>
                  <p className="text-muted-foreground">Build reliable, auditable data pipelines for counters; publish a clear methods appendix with the first report.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Direction of Travel Section */}
        <section id="pi-direction" className="py-16 lg:py-20 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              {/* Small media left */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="bg-white p-6 shadow-md text-center" style={{ borderRadius: '12px 4px 12px 12px' }}>
                  <div className="w-16 h-16 bg-brand-primary/10 flex items-center justify-center mx-auto mb-4" style={{ borderRadius: '8px 2px 8px 8px' }}>
                    <Leaf className="w-8 h-8 text-brand-primary" />
                  </div>
                  <p className="text-sm text-brand-secondary font-grandview-bold">Net-Negative Goal</p>
                </div>
              </motion.div>

              {/* Wide text right */}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <h2 className="text-3xl lg:text-4xl font-grandview-bold text-brand-primary mb-6">Direction of Travel</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're aiming not just for net-zero, but for net-negative (climate-positive) operations over time — first by reducing and electrifying, then by addressing remaining impacts with verified, high-quality solutions once our measurements are robust. No shortcuts, no performative claims.
                </p>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Final CTA Band Section */}
        <section id="pi-cta" className="py-16 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-ghost font-bold text-brand-primary mb-4">Join the purpose</h2>
            <p className="text-xl text-brand-primary mb-4">Turn every wash into a small win for the planet. Book in Goobii Connect. Simple to start, rewarding to continue.</p>
            <p className="text-lg text-brand-primary mb-8 font-grandview-bold">Join Goobii Connect today!</p>
            
            <div className="flex justify-center">
              <CTAGroup size="lg" className="flex-col sm:flex-row" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}