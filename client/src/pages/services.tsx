import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
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
        "Exterior Sooftwash™ pass",          // chip 1
        "Wheels & tyres",                    // chip 2
        "Exterior glass",                    // chip 3
        "Ceramic-infused glass cleaner",
        "Final check and dry"
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
        "Exterior Sooftwash™ pass",          // chip 1
        "Quick cabin vacuum",                // chip 2
        "Interior wipe-downs",               // chip 3
        "Ceramic-infused glass cleaner",
        "Interior glass touch-up"
      ],
      duration: "35–50 minutes",
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
        "Glow Sooftwash™ exterior pass",     // chip 1
        "Trims & crevices",                  // chip 2
        "Tyre dressing",                     // chip 3
        "Ceramic-infused glass cleaner"
      ],
      duration: "45–65 minutes",
      bestFor: "Monthly or when you want premium attention",
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
        "Glow Sooftwash™ exterior pass",     // chip 1
        "Vacuum & interiors",                // chip 2
        "Finishing touches",                 // chip 3
        "Ceramic-infused glass cleaner"
      ],
      duration: "60–85 minutes",
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
            
            {/* Title + Sooftwash™ intro paragraph */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 
                className="text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] mb-8 tracking-tight"
                style={{ fontFamily: 'var(--font-ghost)' }}
              >
                Services
              </h1>
              <p
                className="text-lg text-[var(--brand-primary)] leading-relaxed mb-4"
                style={{ fontFamily: 'var(--font-grandview)' }}
              >
                Choose from our eco-friendly options designed for everyday upkeep or a fuller reset. Each visit is consistent, tidy, and apartment-friendly.
              </p>

              <p
                className="text-lg text-[var(--brand-primary)] leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-grandview)' }}
              >
                On average, we use about <strong>40× less water</strong> than a pressure wash through our <strong>Sooftwash™</strong> technology. Our fleet runs electric via a mobile <strong>power station</strong>, we use fresh <strong>microfibres</strong> every wash, and biodegradable formulas that are kind to people, surfaces, and surroundings.
              </p>

              <a
                href="/purpose-and-impact#pi-how"
                className="inline-flex items-center px-4 py-2 rounded-2xl border border-[var(--brand-secondary)] text-[var(--brand-secondary)] hover:text-[var(--brand-pop)] hover:border-[var(--brand-pop)] transition-colors"
                style={{ fontFamily: 'var(--font-grandview-semibold)' }}
              >
                See how Sooftwash™ works
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Services intro lines */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p 
                className="text-xl text-[var(--brand-primary)] mb-4 font-medium"
                style={{ fontFamily: 'var(--font-grandview)' }}
              >
                Quick refresh or full reset—the choice is simple, the results consistent.
              </p>
              <p 
                className="text-lg text-[var(--brand-primary)]"
                style={{ fontFamily: 'var(--font-grandview)' }}
              >
                Check out our service options below to see what's included, then press a service to get more information.
              </p>
            </div>

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

            {/* Bottom CTA */}
            <div className="text-center">
              <h3 
                className="text-2xl md:text-3xl font-bold text-[var(--brand-primary)] mb-4"
                style={{ fontFamily: 'var(--font-grandview-bold)' }}
              >
                Ready to book your service?
              </h3>
              <p
                className="text-lg text-[var(--brand-primary)] mb-8"
                style={{ fontFamily: 'var(--font-grandview)' }}
              >
                Get <strong>Goobii Connect</strong> and schedule your eco-friendly clean in seconds.
              </p>
              
              <div className="flex justify-center">
                <CTAGroup size="lg" className="flex-col sm:flex-row" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            id={selectedService.id}
            onClose={closeModal}
            service={selectedService}
          />
        )}
      </AnimatePresence>
    </>
  );
}
