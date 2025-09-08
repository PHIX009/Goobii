import { Helmet } from "react-helmet-async";
import SubscriptionCard from "@/components/subscription-card";
import CTAGroup from "@/components/cta-group";
import { DollarSign, Calendar, Shield } from "lucide-react";

export default function Subscriptions() {
  const subscriptions = [
    {
      title: "Spark 4",
      description: "4 washes per month. Choose Aura or Aura Absolute per visit. Ideal for regular upkeep.",
      washCount: 4,
      features: [
        "4 washes per month",
        "Choose Aura or Aura Absolute per visit", 
        "Flexible scheduling via the app",
        "Optional before/after images"
      ]
    },
    {
      title: "Spark 8",
      description: "8 washes per month. Great for multi‑car households or higher frequency needs.",
      washCount: 8,
      features: [
        "8 washes per month",
        "Choose Aura or Aura Absolute per visit",
        "Great for multiple cars",
        "All washes recorded in app history"
      ],
      isPopular: true
    },
    {
      title: "Flow 12",
      description: "12 washes per month. Maximum convenience and consistency for busy schedules.",
      washCount: 12,
      features: [
        "12 washes per month",
        "Choose Aura or Aura Absolute per visit",
        "Maximum convenience",
        "Perfect for busy schedules"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Subscriptions | Goobii Spark & Flow Plans</title>
        <meta name="description" content="Choose Spark 4, Spark 8, or Flow 12. Flexible Sooftwash™ subscriptions built on Aura/Aura Absolute. Manage everything in the Goobii app." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">Subscriptions</h1>
              <p className="text-xl text-muted-foreground">
                Keep your car consistently clean with predictable visits built on Aura and Aura Absolute—less planning, more convenience.
              </p>
            </div>

            {/* Subscription Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {subscriptions.map((subscription) => (
                <SubscriptionCard
                  key={subscription.title}
                  title={subscription.title}
                  description={subscription.description}
                  washCount={subscription.washCount}
                  features={subscription.features}
                  isPopular={subscription.isPopular}
                />
              ))}
            </div>

            {/* Benefits Section */}
            <div className="bg-muted/30 p-8 lg:p-12 mb-16" data-testid="subscription-benefits" style={{ borderRadius: '12px 4px 12px 12px' }}>
              <h2 className="text-2xl lg:text-3xl font-grandview-bold text-center text-brand-primary mb-8">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 flex items-center justify-center mx-auto mb-4" style={{ borderRadius: '12px 4px 12px 12px' }}>
                    <DollarSign className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Flexible Service Choice</h3>
                  <p className="text-muted-foreground">The selected service (Aura or Aura Absolute) per wash</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-secondary/10 flex items-center justify-center mx-auto mb-4" style={{ borderRadius: '12px 4px 12px 12px' }}>
                    <Calendar className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">App Management</h3>
                  <p className="text-muted-foreground">Pause or adjust inside the app (T&Cs apply)</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-pop/10 flex items-center justify-center mx-auto mb-4" style={{ borderRadius: '12px 4px 12px 12px' }}>
                    <Shield className="w-8 h-8 text-brand-pop" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Complete Records</h3>
                  <p className="text-muted-foreground">All washes recorded in your app history</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-brand-primary p-8" style={{ borderRadius: '12px 4px 12px 12px' }}>
                <h3 className="text-2xl font-grandview-bold text-brand-bg mb-4">Start your subscription today</h3>
                <p className="text-brand-bg/80 mb-6">Download the Goobii app to choose your perfect subscription plan</p>
                <div className="flex justify-center">
                  <CTAGroup variant="footer" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
