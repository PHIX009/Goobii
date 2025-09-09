import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "@/components/service-card";
import ServiceModal from "@/components/ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Aura",
      description: "A focused exterior refresh that keeps your car looking sharper for everyday living.",
      highlights: [
        "Exterior Sooftwash™ clean",
        "Wheels & tyres touch-up",
        "Exterior glass touch-up",
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
      products: ["Sooftwash™", "glass cleaner"],
      tools: ["Microfibers", "soft wash pads", "wheel brush"],
      equipment: ["Spray system", "portable power"]
    },
    {
      title: "Aura Absolute",
      description: "Aura exterior plus a light interior tidy so the cabin feels fresh too.",
      highlights: [
        "Everything in Aura",
        "Quick cabin vacuum",
        "Interior wipe-downs",
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
      products: ["Sooftwash™", "interior-safe cleaner", "glass cleaner"],
      tools: ["Microfibers", "interior brush set", "handheld vacuum"],
      equipment: ["Portable power"]
    },
    {
      title: "Glow",
      description: "Premium exterior attention and care for a crisp, stand-out finish.",
      highlights: [
        "Detailed exterior Sooftwash™ pass",
        "Trims, badges & crevices carefully addressed",
        "Wheels & tyres deep clean + sleek, long-lasting tyre dressing",
        "Ceramic glass cleaning"
      ],
      duration: "45–65 minutes",
      bestFor: "When you want premium attention or every 4–5 washes",
      process: [
        "Detailed exterior pass panel by panel",
        "Attention to trims, badges, and tight crevices",
        "Wheels and tyres care with extra dwell where needed",
        "Exterior glass clarity check and final inspection"
      ],
      products: ["Sooftwash™", "targeted exterior cleaner", "glass cleaner"],
      tools: ["Detail brushes", "microfiber set", "wheel tools"],
      equipment: ["Spray system", "portable power"]
    },
    {
      title: "Glow Absolute",
      description: "Everything in Glow plus a fuller interior treatment for an all-round reset.",
      highlights: [
        "Glow exterior detail",
        "Mats removed, leg space and seats vacuumed",
        "Ceramic glass cleaning",
        "Finished with sleek interior dressing"
      ],
      duration: "60–85 minutes",
      bestFor: "Monthly reset or before special events",
      process: [
        "Full Glow exterior detail",
        "Deeper interior touch-points including vents and consoles",
        "Interior glass and finishing passes",
        "Final inspection and handover"
      ],
      products: ["Sooftwash™", "interior-safe cleaner", "glass cleaner", "dressing as needed"],
      tools: ["Detail and crevice brushes", "microfiber set", "handheld vacuum"],
      equipment: ["Portable power"]
    }
  ];

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

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
                className="text-lg text-[var(--brand-primary)] leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-grandview)' }}
              >
                Sooftwash™ is our signature clean—pro finish, tiny footprint. On average, we use about 40× less water than a pressure wash. Our fleet runs electric, and a mobile power station powers full-strength equipment with minimal fuss. Fresh towels every wash. Biodegradable formulas that are kind to people, surfaces, and surroundings. And it's delivered by professionally trained Liinks who follow clear checklists for consistent results.
              </p>
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
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  highlights={service.highlights}
                  duration={service.duration}
                  bestFor={service.bestFor}
                  onClick={() => openModal(service)}
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <div 
                className="bg-[var(--brand-bg)] border border-[var(--brand-primary)]/10 p-8 md:p-12 max-w-2xl mx-auto"
                style={{ borderRadius: '12px 4px 12px 12px' }}
              >
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
                  Get the Goobii app and schedule your eco-friendly clean in seconds.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[var(--brand-primary)] text-[var(--brand-bg)] hover:bg-[var(--brand-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-pop)] focus:ring-offset-2 focus:ring-offset-[var(--brand-bg)] transition-colors font-medium"
                    style={{ borderRadius: '9999px', fontFamily: 'var(--font-grandview)' }}
                    data-testid="ios-download"
                  >
                    <img src="/svg/icon-ios.svg" alt="" className="w-5 h-5 mr-3" />
                    Download for iOS
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[var(--brand-primary)] text-[var(--brand-bg)] hover:bg-[var(--brand-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-pop)] focus:ring-offset-2 focus:ring-offset-[var(--brand-bg)] transition-colors font-medium"
                    style={{ borderRadius: '9999px', fontFamily: 'var(--font-grandview)' }}
                    data-testid="android-download"
                  >
                    <img src="/svg/icon-android.svg" alt="" className="w-5 h-5 mr-3" />
                    Download for Android
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          service={selectedService}
        />
      )}
    </>
  );
}
