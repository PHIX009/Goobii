import { Helmet } from "react-helmet-async";
import ServiceCard from "@/components/service-card";
import CTAGroup from "@/components/cta-group";
import { Zap, Star, Sparkles, Award } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Aura",
      category: "Exterior",
      description: "Quick weekly upkeep for a fresh exterior—removes dust, light road film, and everyday grime so your car always looks presentable.",
      features: [
        "Exterior wash and dry",
        "Window cleaning",
        "Tire cleaning",
        "Basic surface protection"
      ],
      icon: <Zap className="w-8 h-8 text-brand-primary" />
    },
    {
      title: "Aura Absolute",
      category: "Exterior + Basic Interior",
      description: "Aura exterior plus a light interior refresh (quick vacuum, wipe-downs, glass) for routine maintenance inside and out.",
      features: [
        "Everything in Aura",
        "Interior vacuum",
        "Dashboard and surface wipe-down",
        "Interior glass cleaning"
      ],
      icon: <Star className="w-8 h-8 text-brand-primary" />
    },
    {
      title: "Glow",
      category: "Premium Exterior",
      description: "Our more thorough, detailed exterior clean that spends longer on tricky areas (badges, crevices, wheels/tyres). Recommended experience.",
      features: [
        "Deep exterior cleaning",
        "Detailed wheel and tire care",
        "Badge and crevice cleaning",
        "Premium window treatment"
      ],
      isRecommended: true,
      icon: <Sparkles className="w-8 h-8 text-brand-pop" />
    },
    {
      title: "Glow Absolute",
      category: "Full Premium",
      description: "Glow exterior results plus a more complete interior attention for a crisp, all-round finish.",
      features: [
        "Everything in Glow",
        "Comprehensive interior cleaning",
        "Detailed surface treatment",
        "Interior and exterior glass"
      ],
      icon: <Award className="w-8 h-8 text-brand-primary" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Goobii</title>
        <meta name="description" content="Discover our eco-friendly car cleaning services using Sooftwash™ technology. From quick Aura washes to premium Glow treatments." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                All services use our revolutionary Sooftwash™ technology - an eco-friendly cleaning process that uses biodegradable chemicals and minimal water without compromising on results.
              </p>
            </div>

            {/* Intro to Sooftwash */}
            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-16" data-testid="sooftwash-intro">
              <h2 className="text-2xl lg:text-3xl font-grandview-bold text-brand-primary mb-6">What is Sooftwash™?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sooftwash™ is our revolutionary water-saving cleaning process that uses advanced biodegradable chemistry and specialized techniques to clean your vehicle with just 2-4 liters of water. This innovative approach is not only environmentally responsible but also gentle on your car's surfaces, ensuring a thorough clean without the high water consumption of traditional pressure washing methods.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  category={service.category}
                  description={service.description}
                  features={service.features}
                  isRecommended={service.isRecommended}
                  icon={service.icon}
                />
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-muted/50 p-8 rounded-2xl">
                <h3 className="text-2xl font-grandview-bold text-brand-primary mb-4">Ready to book your service?</h3>
                <p className="text-muted-foreground mb-6">Download the Goobii app to schedule your eco-friendly car cleaning</p>
                <CTAGroup />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
