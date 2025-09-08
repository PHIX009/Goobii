import { Helmet } from "react-helmet-async";
import CTAGroup from "@/components/cta-group";
import { Droplets, Shield, Smartphone, Users, Zap, MapPin, CheckCircle } from "lucide-react";
import phoneImage from "@assets/Untitled design_1757328137575.png";

export default function Home() {
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
              {/* Hero Logo and Tagline */}
              <div className="mb-12">
                <img 
                  src={logoImage} 
                  alt="Goobii" 
                  className="h-24 lg:h-32 w-auto mx-auto mb-4" 
                  style={{ objectFit: 'contain' }}
                />
                <p className="text-lg lg:text-xl font-grandview-bold text-brand-secondary tracking-wider">
                  Planet. People. Purpose.
                </p>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-ghost font-bold text-brand-primary mb-6">
                You lead the change. We make it effortless.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-grandview">
                Start a habit that matters. We guide the car care—you set the example and join a community moving with purpose.
              </p>
              
              {/* Primary CTA Group */}
              <div className="mb-12">
                <CTAGroup size="lg" className="flex-col sm:flex-row" />
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl shadow-2xl max-w-4xl mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplets className="w-10 h-10 text-brand-primary" />
                    </div>
                    <p className="text-brand-primary font-grandview-bold">Eco-friendly Car Cleaning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Cards */}
        <section className="py-16 bg-background/50" data-testid="value-cards-section">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-ghost font-bold text-center text-brand-primary mb-12">
              Why Choose Goobii
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="bg-card p-6 rounded-2xl shadow-lg text-center" data-testid="value-card-water">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Save Water</h3>
                <p className="text-muted-foreground">Cut water use dramatically: 2–4 L per wash instead of 100–150 L.</p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-lg text-center" data-testid="value-card-chemistry">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Safe & Biodegradable</h3>
                <p className="text-muted-foreground">Worker‑safe, vehicle‑safe chemistry engineered for Dubai's climate.</p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-lg text-center" data-testid="value-card-app">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">User‑Friendly App</h3>
                <p className="text-muted-foreground">Book in minutes, store vehicles and addresses, request before/after images, all washes recorded.</p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-lg text-center" data-testid="value-card-liinks">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Pro Liinks</h3>
                <p className="text-muted-foreground">Trained Goobii Liinks deliver consistent, reliable quality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16" data-testid="how-it-works-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-6 mb-12">
              {/* Image Placeholder */}
              <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-brand-primary" />
              </div>
              
              {/* Title and Description */}
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-ghost font-bold text-brand-primary mb-4">How It Works</h2>
                <p className="text-xl text-muted-foreground">Simple steps to a cleaner, greener car</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="step-1">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">1. Book in the app</h3>
                <p className="text-muted-foreground">Pick service, time, and location.</p>
              </div>
              
              <div className="text-center" data-testid="step-2">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">2. We arrive</h3>
                <p className="text-muted-foreground">Electric‑powered operations with minimal noise.</p>
              </div>
              
              <div className="text-center" data-testid="step-3">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">3. Shine & done</h3>
                <p className="text-muted-foreground">Your car, clean and ready.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Impact */}
        <section className="py-16 bg-background/50" data-testid="sustainability-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-brand-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-ghost font-bold text-brand-primary mb-6">Sustainability Impact</h2>
              <p className="text-xl text-muted-foreground">
                Every Sooftwash™ service saves tens of liters compared to traditional pressure washes. Less water used, less runoff—better for Dubai.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16" data-testid="testimonials-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-brand-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-ghost font-bold text-brand-primary">Testimonials</h2>
            </div>
          </div>
        </section>

        {/* Secondary CTA Band */}
        <section className="py-16 bg-brand-primary" data-testid="secondary-cta-section">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-ghost font-bold text-brand-bg mb-4">Ready to get started?</h2>
            <p className="text-xl text-brand-bg/80 mb-8">Download the Goobii app and book your first eco-friendly wash today</p>
            
            <CTAGroup size="lg" variant="footer" className="flex-col sm:flex-row" />
          </div>
        </section>
      </div>
    </>
  );
}
