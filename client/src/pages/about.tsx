import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { Smartphone, Settings, Droplets, Leaf, Home } from "lucide-react";

export default function About() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const isBodyInView = useInView(bodyRef, { once: true, amount: 0.3 });
  
  const stepsRef = useRef<HTMLDivElement>(null);
  const isStepsInView = useInView(stepsRef, { once: true, amount: 0.2 });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Goobii | Clean cars. Cleaner planet.</title>
        <meta name="description" content="At Goobii, we believe caring for your car should never come at the cost of our planet. Learn about our Sooftwash™ technology and sustainability mission." />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Goobii | Clean cars. Cleaner planet." />
        <meta property="og:description" content="At Goobii, we believe caring for your car should never come at the cost of our planet. Learn about our Sooftwash™ technology and sustainability mission." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goobii.com/about" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="about-hero" className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-ghost font-bold text-brand-primary mb-6 leading-tight">
                    Clean cars.<br />
                    Cleaner planet.
                  </h1>
                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                    At Goobii, we believe caring for your car should never come at the cost of our planet.
                  </p>
                </div>
                
              </div>

              {/* Hero Visual */}
              <div className="lg:order-last">
                <div 
                  className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-brand-primary/20 to-brand-secondary/30 flex items-center justify-center"
                  style={{ borderRadius: '12px 4px 12px 12px' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                    alt="Eco-friendly car wash using low-water Sooftwash™ method"
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '12px 4px 12px 12px' }}
                    loading="lazy"
                    width="600"
                    height="500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body Section */}
        <section id="about-body" className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              ref={bodyRef}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isBodyInView ? { opacity: 1, y: 0 } : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  At Goobii, we believe caring for your car should never come at the cost of our planet. With our signature Sooftwash™ technology, we achieve a spotless clean while using a fraction of the water required by traditional methods. That means every wash isn't just good for your car — it's a step toward protecting our shared environment.
                </p>
                
                <p>
                  But Goobii is more than just an eco-friendly car wash. We're building a movement. A community of people who care about the choices they make, and how those choices affect the world around them. From our all-electric fleet and biodegradable products to our safe and easy-to-use app, everything we do is designed to give you the best possible experience while helping you join something bigger.
                </p>
                
                <p>
                  Our mission is simple: make it easy, affordable, and rewarding to choose sustainability without compromise. Whether it's saving water, reducing harmful chemicals, or supporting future environmental initiatives, every wash with Goobii brings us closer to a cleaner, greener tomorrow.
                </p>
                
                <p>
                  We're here to change the way people think about car care — turning a routine service into a statement of responsibility, innovation, and trust. When you wash with Goobii, you're not just keeping your car clean — you're becoming part of a growing community that values the planet, the people, and the future.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We Work Section */}
        <section id="about-steps" className="py-16 lg:py-20 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-grandview-bold text-brand-primary mb-4">
                How We Work
              </h2>
            </div>
            
            <motion.div
              ref={stepsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Tap to Book",
                  description: "Quick, secure, all in the Goobii app."
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "We Set Up Clean",
                  description: "Compact, mess-free, apartment-friendly."
                },
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: "Sooftwash™ Finish",
                  description: "Premium shine, planet-first method."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                  animate={isStepsInView ? { opacity: 1, y: 0 } : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={prefersReducedMotion ? {} : { y: -4 }}
                  className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-250 cursor-default"
                  style={{ borderRadius: '12px 4px 12px 12px' }}
                  data-testid={`step-card-${step.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-brand-primary/10 flex items-center justify-center mx-auto text-brand-primary" style={{ borderRadius: '12px 4px 12px 12px' }}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-grandview-bold text-brand-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Trust Strip Section */}
        <section id="about-trust" className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Leaf className="w-6 h-6" />, label: "Biodegradable" },
                { icon: <Droplets className="w-6 h-6" />, label: "Low-water" },
                { icon: <Home className="w-6 h-6" />, label: "Apartment-friendly" }
              ].map((badge, index) => (
                <div
                  key={badge.label}
                  className="glow-box flex items-center justify-center gap-3 py-4 px-6 bg-gray-50/80 hover:bg-gray-100/80 transition-colors duration-200 border-2 border-brand-primary/20 shadow-md"
                  style={{ borderRadius: '12px 4px 12px 12px' }}
                  data-testid={`trust-badge-${badge.label.toLowerCase()}`}
                >
                  <div className="text-brand-primary">
                    {badge.icon}
                  </div>
                  <span className="font-grandview-bold text-brand-primary">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Band Section */}
        <section id="about-cta" className="py-16 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-grandview-bold text-brand-primary mb-8">
              Ready to wash smarter?
            </h2>
            
            <div className="flex gap-2 justify-center">
              <a
                href="#ios-placeholder"
                className="cta-button bg-brand-primary text-brand-bg hover:bg-brand-secondary px-6 py-4 font-grandview-bold transition-colors flex items-center justify-center gap-2 border-2 border-brand-primary/20 shadow-lg"
                style={{ borderRadius: '12px 4px 12px 12px' }}
                data-testid="cta-button-ios"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="font-bold">iOS</span>
              </a>
              <a
                href="#android-placeholder"
                className="cta-button bg-brand-secondary text-brand-bg hover:bg-brand-primary px-6 py-4 font-grandview-bold transition-colors flex items-center justify-center gap-2 border-2 border-brand-secondary/20 shadow-lg"
                style={{ borderRadius: '12px 4px 12px 12px' }}
                data-testid="cta-button-android"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span className="font-bold">Android</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}