import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import ServiceCard from "@/components/service-card";
import ServiceModal from "@/components/ServiceModal";
import CTAGroup from "@/components/cta-group";

export default function Services() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const services = [
    {
      id: "aura",
      title: "Aura",
      description: "A focused exterior refresh that keeps your car looking sharper for everyday living.",
      highlights: [
        "Exterior Sooftwash™ pass",
        "Wheels & tyres",
        "Exterior glass"
      ],
      duration: "20–30 minutes",
      bestFor: "Everyday upkeep and dusty days",
      process: [
        "Visual inspection and access check",
        "Sooftwash™ application and controlled wipe for exterior panels",
        "Wheels and tyres freshen",
        "Exterior glass clean and final check"
      ],
      products: ["Sooftwash™", "ceramic-infused glass cleaner"],
      tools: ["Microfibres", "soft wash pads", "wheel brush"],
      equipment: ["Spray system", "power station"]
    },
    {
      id: "aura-absolute",
      title: "Aura Absolute",
      description: "Aura exterior plus a light interior tidy so the cabin feels fresh too.",
      highlights: [
        "Exterior Sooftwash™ pass",
        "Quick cabin vacuum",
        "Interior wipe-downs"
      ],
      duration: "30–40 minutes",
      bestFor: "Weekly or bi-weekly maintenance",
      process: [
        "Everything in Aura",
        "Quick cabin vacuum for floors and seats",
        "Interior wipe-downs for high-touch areas",
        "Interior glass clean and final check"
      ],
      products: ["Sooftwash™", "interior-safe cleaner", "ceramic-infused glass cleaner"],
      tools: ["Microfibres", "interior brush set", "handheld vacuum"],
      equipment: ["Power station"]
    },
    {
      id: "glow",
      title: "Glow",
      description: "Premium exterior attention and care for a crisp, stand-out finish.",
      highlights: [
        "Glow Sooftwash™ exterior pass",
        "Trims & crevices",
        "Tyre dressing"
      ],
      duration: "30–40 minutes",
      bestFor: "Monthly refresh or when you want premium attention",
      process: [
        "Detailed exterior pass panel by panel",
        "Attention to trims, badges, and tight crevices",
        "Wheels and tyres care with extra dwell where needed",
        "Exterior glass clarity check and final inspection"
      ],
      products: ["Sooftwash™", "targeted exterior cleaner", "ceramic-infused glass cleaner"],
      tools: ["Detail brushes", "microfibre set", "wheel tools"],
      equipment: ["Spray system", "power station"]
    },
    {
      id: "glow-absolute",
      title: "Glow Absolute",
      description: "Everything in Glow plus a fuller interior treatment for an all-round reset.",
      highlights: [
        "Glow Sooftwash™ exterior pass",
        "Vacuum & interiors",
        "Finishing touches"
      ],
      duration: "45–55 minutes",
      bestFor: "Monthly reset or before special events",
      process: [
        "Full Glow exterior detail",
        "Deeper interior touch-points including vents and consoles",
        "Interior glass and finishing passes",
        "Final inspection and handover"
      ],
      products: ["Sooftwash™", "interior-safe cleaner", "ceramic-infused glass cleaner", "dressing as needed"],
      tools: ["Detail and crevice brushes", "microfibre set", "handheld vacuum"],
      equipment: ["Power station"]
    }
  ];

  const openModal = (id: string) => {
    setSelectedId(id);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  const selectedService = selectedId ? services.find(s => s.id === selectedId) : null;

  return (
    <>
      <Helmet>
        <title>Services | Goobii Sooftwash™ in Dubai</title>
        <meta name="description" content="Explore Aura, Aura Absolute, Glow, and Glow Absolute—Sooftwash™ services that save water while delivering a clean, confident finish." />
      </Helmet>
      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
            
            {/* Title and Content with Image */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left side - Content */}
                <div>
                  <h1 
                    className="text-4xl lg:text-5xl font-bold text-brand-primary mb-8 tracking-tight"
                    style={{ fontFamily: 'var(--font-ghost)' }}
                  >
                    Services
                  </h1>
                  
                  <p 
                    className="text-xl text-brand-primary mb-4 font-medium"
                    style={{ fontFamily: 'var(--font-grandview)' }}
                  >
                    Choose from our eco-friendly options designed for everyday upkeep or a fuller reset. Each visit is consistent, tidy, and apartment-friendly.
                  </p>
                  <p 
                    className="text-lg text-brand-primary mb-6"
                    style={{ fontFamily: 'var(--font-grandview)' }}
                  >
                    On average, we use about 40× less water than a pressure wash through our Sooftwash™ technology. Our fleet runs electric via a mobile power station, we use fresh microfibres every wash, and biodegradable formulas that are kind to people, surfaces, and surroundings.
                  </p>
                  
                  {/* Method Link */}
                  <div className="mb-8">
                    <a 
                      href="/purpose-and-impact#pi-how"
                      className="inline-block bg-transparent border-2 border-brand-primary text-brand-primary px-6 py-3 font-bold hover:border-brand-pop hover:text-brand-pop transition-all duration-300"
                      style={{ 
                        borderRadius: '12px 4px 12px 12px',
                        fontFamily: 'var(--font-grandview-bold)'
                      }}
                      data-testid="link-sooftwash-method"
                    >
                      See how Sooftwash™ works
                    </a>
                  </div>
                </div>
                
                {/* Right side - Image Placeholder */}
                <div className="w-full h-80 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Service Image</span>
                </div>
              </div>
            </div>

            {/* Service Cards and Modal - Wrapped in LayoutGroup for smooth animations */}
            <LayoutGroup id="services">
              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-16">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    highlights={service.highlights}
                    duration={service.duration}
                    bestFor={service.bestFor}
                    onClick={() => openModal(service.id)}
                  />
                ))}
              </div>

              {/* Service Modal */}
              <AnimatePresence mode="wait" initial={false}>
                {selectedService && (
                  <ServiceModal
                    key={selectedService.id}
                    id={selectedService.id}
                    onClose={closeModal}
                    service={selectedService}
                  />
                )}
              </AnimatePresence>
            </LayoutGroup>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-ghost font-bold text-brand-primary mb-4">Ready to book your service?</h2>
            <p className="text-xl text-brand-primary mb-4">Get Goobii Connect and schedule your eco-friendly clean in seconds.</p>
            <p className="text-lg text-brand-primary mb-8 font-grandview-bold">Download now!</p>
            
            <div className="flex justify-center">
              <CTAGroup size="lg" className="flex-col sm:flex-row" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
