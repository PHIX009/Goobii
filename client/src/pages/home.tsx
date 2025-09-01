import { Helmet } from "react-helmet-async";
import CTAGroup from "@/components/cta-group";
import { Droplets, Shield, Smartphone, Users, Zap, MapPin, CheckCircle } from "lucide-react";

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
              <h1 className="text-4xl lg:text-6xl font-ghost font-bold text-brand-primary mb-6">
                Eco-friendly car cleaning, made simple.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-grandview">
                Sooftwash™ uses just <strong className="text-brand-primary">2–4 L</strong> per wash vs <strong className="text-brand-pop">100–150 L</strong> with pressure washes—without compromising results.
              </p>
              
              {/* Primary CTA Group */}
              <div className="mb-12">
                <CTAGroup size="lg" className="flex-col sm:flex-row" />
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
                  alt="Professional car cleaning service" 
                  className="rounded-2xl shadow-2xl w-full h-auto max-w-4xl mx-auto" 
                />
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
                <p className="text-muted-foreground">Just 2–4 L per wash vs 100–150 L with traditional pressure washing methods.</p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-lg text-center" data-testid="value-card-chemistry">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Safe, Biodegradable Chemistry</h3>
                <p className="text-muted-foreground">Vehicle-safe and worker-safe products that protect your car and our environment.</p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-lg text-center" data-testid="value-card-app">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">User-Friendly App</h3>
                <p className="text-muted-foreground">Book in minutes, store vehicles & addresses, request before/after images, all washes recorded.</p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-lg text-center" data-testid="value-card-liinks">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Pro Liinks</h3>
                <p className="text-muted-foreground">Trained Goobii Liinks deliver consistent quality results every time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16" data-testid="how-it-works-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-ghost font-bold text-brand-primary mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">Simple steps to a cleaner, greener car</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="step-1">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">1. Book in the app</h3>
                <p className="text-muted-foreground">Schedule your cleaning service with just a few taps</p>
              </div>
              
              <div className="text-center" data-testid="step-2">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">2. We arrive</h3>
                <p className="text-muted-foreground">Our trained Liinks come to your location</p>
              </div>
              
              <div className="text-center" data-testid="step-3">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">3. Clean & done</h3>
                <p className="text-muted-foreground">Eco-friendly cleaning with amazing results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust/Partners Strip */}
        <section className="py-12 bg-muted/50" data-testid="partners-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-muted-foreground font-grandview-bold">Trusted by Dubai residents</p>
            </div>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Partner {i}</span>
                </div>
              ))}
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
