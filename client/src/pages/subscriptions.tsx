import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SubscriptionCard from "@/components/subscription-card";
import SubscriptionModal from "@/components/SubscriptionModal";
import CTAGroup from "@/components/cta-group";
import { DollarSign, Calendar, Shield, Leaf } from "lucide-react";
import verticalLogo from "@assets/Goobii Vertical Logo_1756905830399.png";

export default function Subscriptions() {
  const [selectedSubscription, setSelectedSubscription] = useState<string | null>(null);

  const subscriptions = [
    {
      id: "spark",
      title: "Spark",
      description: "The ignition—a gentle start to eco-conscious care. One wash per week with one full-service included, keeping your car fresh on a simple, reliable rhythm.",
      monthlyWashes: "3 Aura + 1 Aura Absolute",
      washCount: 4,
      features: [
        "3 Aura + 1 Aura Absolute per month",
        "1 car",
        "Great weekly rhythm",
        "Simple, reliable value",
        "Eco-first care"
      ],
      highlights: [
        "1 car",
        "Great weekly rhythm", 
        "Simple, reliable value",
        "Eco-first care"
      ],
      bestFor: "Solo drivers who want consistent eco-conscious care with a simple weekly routine",
      priceDetails: "Perfect starter plan with reliable weekly service",
      benefits: [
        "Consistent weekly car care routine",
        "Water-saving Sooftwash™ technology", 
        "App-based convenience",
        "Professional eco-friendly products"
      ],
      limitations: [
        "Designed for single car use",
        "Subject to availability in your area"
      ],
      planType: "Starter subscription"
    },
    {
      id: "pulse",
      title: "Pulse",
      description: "The steady rhythm for busy weeks. A balanced monthly routine that keeps your car looking sharp without the mental load.",
      monthlyWashes: "6 Aura + 2 Aura Absolute",
      washCount: 8,
      features: [
        "6 Aura + 2 Aura Absolute per month",
        "1 car",
        "Built for busy weeks",
        "Balanced monthly value",
        "Sustainable care"
      ],
      highlights: [
        "1 car",
        "Built for busy weeks",
        "Balanced monthly value", 
        "Sustainable care"
      ],
      bestFor: "Busy professionals who need reliable car care that fits around their demanding schedule",
      priceDetails: "Most popular plan with balanced frequency and value",
      benefits: [
        "Perfect frequency for busy lifestyles",
        "Balanced service mix",
        "Reliable scheduling",
        "Enhanced service tracking"
      ],
      limitations: [
        "Optimized for single vehicle",
        "May require advance booking for peak times"
      ],
      planType: "Most popular subscription"
    },
    {
      id: "flow",
      title: "Flow",
      description: "The seamless flow of premium care. Maximum convenience and flexibility for households or drivers who want their cars consistently spotless without compromise.",
      monthlyWashes: "8 Aura + 4 Aura Absolute",
      washCount: 12,
      features: [
        "8 Aura + 4 Aura Absolute per month",
        "Up to 2 cars",
        "Priority convenience",
        "Maximum monthly value",
        "Premium & planet-minded care"
      ],
      highlights: [
        "Up to 2 cars",
        "Priority convenience",
        "Maximum monthly value",
        "Premium & planet-minded care"
      ],
      bestFor: "Households with multiple cars or drivers who want maximum convenience and premium care",
      priceDetails: "Premium tier with multi-car coverage and enhanced service",
      benefits: [
        "Multi-car household support",
        "Maximum wash frequency",
        "Priority booking access",
        "Premium customer support"
      ],
      limitations: [
        "Higher monthly commitment",
        "Best suited for multi-car households"
      ],
      planType: "Premium subscription"
    }
  ];

  const handleCardClick = (subscriptionId: string) => {
    setSelectedSubscription(subscriptionId);
  };

  const handleCloseModal = () => {
    setSelectedSubscription(null);
  };

  const currentSubscription = subscriptions.find(sub => sub.id === selectedSubscription);

  return (
    <>
      <Helmet>
        <title>Subscriptions | Goobii Spark, Pulse & Flow Plans</title>
        <meta name="description" content="Choose Spark, Pulse, or Flow. Flexible Sooftwash™ subscriptions built on Aura/Aura Absolute. Manage everything in Goobii Connect." />
      </Helmet>
      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            {/* Hero Section with Text Left and Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Text Content */}
              <div className="text-left">
                <div className="flex items-end gap-4 mb-6">
                  <img 
                    src={verticalLogo} 
                    alt="Goobii Logo" 
                    className="h-32 lg:h-40"
                    style={{ filter: 'brightness(0) saturate(100%) invert(17%) sepia(26%) saturate(1765%) hue-rotate(174deg) brightness(93%) contrast(102%)' }}
                  />
                  <h1 className="lg:text-4xl font-bold text-[#DCC57F] pl-[-13px] pr-[-13px] pt-[0px] pb-[0px] mt-[9px] mb-[9px] ml-[-30px] mr-[-30px] text-[35px]" style={{ fontFamily: 'Ghost Trial Extrabold, var(--font-ghost)' }}>SUBSCRIPTION</h1>
                </div>
                <p className="text-xl text-brand-secondary mb-4">
                  Welcome to Goobii subscriptions—your car's clean routine. Lock in reliable visits that fit real life, from solo drivers to full driveways, and keep your weeks running smoother with a schedule that works around you.
                </p>
                <p className="text-lg text-brand-secondary font-medium">
                  Your car's clean routine: consistency, savings, and zero hassle—on your terms.
                </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="flex justify-center lg:justify-end">
                <div 
                  className="w-full max-w-md h-80 bg-muted/30 flex items-center justify-center text-muted-foreground border-2 border-dashed border-muted-foreground/30"
                  style={{ borderRadius: '12px 4px 12px 12px' }}
                >
                  <span className="text-sm font-medium">Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Subscription Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {subscriptions.map((subscription) => (
                <SubscriptionCard
                  key={subscription.id}
                  id={subscription.id}
                  title={subscription.title}
                  description={subscription.description}
                  washCount={subscription.washCount}
                  features={subscription.features}
                  isPopular={false}
                  onClick={() => handleCardClick(subscription.id)}
                />
              ))}
            </div>

            {/* Subscription Modal */}
            {currentSubscription && (
              <SubscriptionModal
                id={currentSubscription.id}
                subscription={currentSubscription}
                onClose={handleCloseModal}
              />
            )}

            {/* What's Included Section */}
            <div className="bg-muted/30 p-8 lg:p-12 mb-16" data-testid="subscription-benefits" style={{ borderRadius: '12px 4px 12px 12px' }}>
              <h2 className="text-2xl lg:text-3xl font-grandview-bold text-center text-brand-secondary mb-8">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 59, 92, 0.1)', borderRadius: '12px 4px 12px 12px' }}>
                    <DollarSign className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-secondary mb-2">App convenience</h3>
                  <p className="text-brand-secondary">Control everything in Goobii Connect—book, reschedule, and track visits in seconds.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 59, 92, 0.1)', borderRadius: '12px 4px 12px 12px' }}>
                    <Calendar className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-secondary mb-2">Clear value</h3>
                  <p className="text-brand-secondary">Routine care that saves time and keeps standards high.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 59, 92, 0.1)', borderRadius: '12px 4px 12px 12px' }}>
                    <Shield className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-secondary mb-2">Premium & planet-minded</h3>
                  <p className="text-brand-secondary">Pro-grade, biodegradable formulations—high performance without the harsh stuff.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 59, 92, 0.1)', borderRadius: '12px 4px 12px 12px' }}>
                    <Leaf className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-secondary mb-2">Clean footprint</h3>
                  <p className="text-brand-secondary">Quiet, tidy, and respectful service wherever you are.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-ghost font-bold text-brand-secondary mb-4">Start your subscription today</h2>
            <p className="text-xl text-brand-secondary mb-4">Choose the plan that fits your lifestyle and let Goobii handle the rest.</p>
            <p className="text-lg text-brand-secondary mb-8 font-grandview-bold">Download our App now!</p>
            
            <div className="flex justify-center">
              <CTAGroup size="lg" className="flex-col sm:flex-row" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
