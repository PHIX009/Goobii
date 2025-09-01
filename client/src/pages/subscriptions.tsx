import { Helmet } from "react-helmet-async";
import SubscriptionCard from "@/components/subscription-card";
import CTAGroup from "@/components/cta-group";
import { DollarSign, Calendar, Shield } from "lucide-react";

export default function Subscriptions() {
  const subscriptions = [
    {
      title: "Spark 4",
      description: "Perfect for regular maintenance",
      washCount: 4,
      features: [
        "Choose Aura or Aura Absolute mix",
        "Standard inclusions per chosen service",
        "Flexible scheduling",
        "Before/after photos available"
      ]
    },
    {
      title: "Spark 8",
      description: "Great for multi-car households",
      washCount: 8,
      features: [
        "All Spark 4 benefits",
        "Increased frequency options",
        "Multiple vehicle support",
        "Priority booking"
      ],
      isPopular: true
    },
    {
      title: "Flow 12",
      description: "Ultimate convenience plan",
      washCount: 12,
      features: [
        "All Spark 8 benefits",
        "Highest frequency plan",
        "Ideal for buildings/families",
        "Premium support"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Subscription Plans - Goobii</title>
        <meta name="description" content="Choose from our flexible subscription plans built around Aura and Aura Absolute services for predictable upkeep and convenience." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">Subscription Plans</h1>
              <p className="text-xl text-muted-foreground">
                Subscriptions built around Aura and Aura Absolute for predictable upkeep and convenience. Choose the plan that fits your lifestyle.
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
            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-16" data-testid="subscription-benefits">
              <h2 className="text-2xl lg:text-3xl font-grandview-bold text-center text-brand-primary mb-8">Subscription Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Cost Savings</h3>
                  <p className="text-muted-foreground">Better value compared to individual bookings</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">Book when convenient for you</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-pop/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-brand-pop" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Consistent Care</h3>
                  <p className="text-muted-foreground">Keep your car always looking its best</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-brand-primary p-8 rounded-2xl">
                <h3 className="text-2xl font-grandview-bold text-brand-bg mb-4">Start your subscription today</h3>
                <p className="text-brand-bg/80 mb-6">Download the Goobii app to choose your perfect subscription plan</p>
                <CTAGroup variant="footer" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
