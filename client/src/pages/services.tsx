import { Helmet } from "react-helmet-async";
import ServiceCard from "@/components/service-card";
import CTAGroup from "@/components/cta-group";
import { Zap, Star, Sparkles, Award } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Aura",
      category: "Exterior",
      description: "Weekly upkeep made easy. A focused exterior clean that removes dust, light road film, and everyday grime so your car stays consistently presentable between deeper washes. Ideal cadence: weekly.",
      features: [
        "Exterior wash and dry",
        "Window cleaning", 
        "Tire cleaning",
        "Light road film removal"
      ],
      icon: <Zap className="w-8 h-8 text-brand-primary" />
    },
    {
      title: "Aura Absolute",
      category: "Exterior + Basic Interior",
      description: "Everything in Aura plus a light interior refresh—quick vacuum, wipe‑downs, and glass—so the cabin feels as tidy as the exterior. Great for routine maintenance.",
      features: [
        "Everything in Aura",
        "Interior vacuum",
        "Dashboard wipe‑downs",
        "Interior glass cleaning"
      ],
      icon: <Star className="w-8 h-8 text-brand-primary" />
    },
    {
      title: "Glow",
      category: "Premium Exterior",
      description: "Our more thorough exterior service. Extra attention to trims, badges, crevices, wheels and tyres for a sharper finish. Recommended experience if you haven't cleaned in a while or want that extra care. Takes a bit longer.",
      features: [
        "Thorough exterior cleaning",
        "Detailed wheel and tyre care",
        "Badge and crevice attention",
        "Premium trim treatment"
      ],
      isRecommended: true,
      icon: <Sparkles className="w-8 h-8 text-brand-pop" />
    },
    {
      title: "Glow Absolute",
      category: "Full Premium", 
      description: "Glow exterior detail plus a more complete interior treatment: more surfaces addressed, in/out glass, and tighter nooks. For an elevated, all‑round result.",
      features: [
        "Everything in Glow",
        "Complete interior treatment",
        "All surfaces addressed",
        "Interior and exterior glass"
      ],
      icon: <Award className="w-8 h-8 text-brand-primary" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Goobii Sooftwash™ in Dubai</title>
        <meta name="description" content="Explore Aura, Aura Absolute, Glow, and Glow Absolute—Sooftwash™ services that save water while delivering a clean, confident finish." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Sooftwash™ is our water‑saving method tailored for Dubai. Using just <strong className="text-brand-primary">2–4 L</strong> of water and biodegradable, vehicle‑safe chemistry, we lift dust, sand, and road film effectively—protecting finishes and the environment.
              </p>
            </div>

            {/* Intro to Sooftwash */}
            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-16" data-testid="sooftwash-intro">
              <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-brand-primary">Time note:</strong> Duration varies by vehicle size and condition. Your Liink will confirm on arrival.
                </p>
              </div>
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
