import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import CTAGroup from "@/components/cta-group";
import { Building, Users, TrendingUp, Wrench } from "lucide-react";

export default function Buildings() {
  return (
    <>
      <Helmet>
        <title>Buildings & Communities | Goobii Local</title>
        <meta name="description" content="Add eco‑friendly car cleaning to your property. Goobii Local brings fixed‑location operations, resident convenience, and real water savings." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">Buildings & Communities</h1>
              <p className="text-xl text-muted-foreground">
                Bring convenient, water‑saving car care to your property. Goobii Local sets up fixed‑location operations that keep residents happy and drive measurable water savings.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="w-full h-96 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 rounded-2xl shadow-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-brand-secondary" />
                    </div>
                    <p className="text-brand-secondary font-grandview-bold">Building & Community Services</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-grandview-bold text-brand-primary mb-4">Benefits for Managers</h2>
                  <ul className="text-muted-foreground space-y-3 mb-6">
                    <li>• <strong className="text-brand-primary">Value for tenants:</strong> Easy app booking, minimal disruption, steady quality.</li>
                    <li>• <strong className="text-brand-primary">Sustainability:</strong> Significant water savings per property; support ESG goals.</li>
                    <li>• <strong className="text-brand-primary">Operational fit:</strong> Onboarding of janitors into Goobii SOPs for compliant delivery.</li>
                    <li>• <strong className="text-brand-primary">Visibility:</strong> Clear schedules, resident comms templates, performance summaries.</li>
                  </ul>
                </div>

                {/* Benefits Cards */}
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-xl shadow-sm" data-testid="residents-benefits">
                    <div className="flex items-center mb-3">
                      <Users className="w-6 h-6 text-brand-primary mr-3" />
                      <h3 className="text-xl font-grandview-bold text-brand-primary">Benefits for Residents</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Convenient on-site car cleaning services</li>
                      <li>• No need to leave the building premises</li>
                      <li>• Consistent service quality and scheduling</li>
                      <li>• Special community pricing available</li>
                    </ul>
                  </div>

                  <div className="bg-card p-6 rounded-xl shadow-sm" data-testid="landlords-benefits">
                    <div className="flex items-center mb-3">
                      <Building className="w-6 h-6 text-brand-secondary mr-3" />
                      <h3 className="text-xl font-grandview-bold text-brand-primary">Benefits for Landlords</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Enhanced property amenities and value</li>
                      <li>• Increased tenant satisfaction and retention</li>
                      <li>• Eco-friendly service aligns with sustainability goals</li>
                      <li>• Potential revenue sharing opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-16" data-testid="how-it-works">
              <h2 className="text-2xl lg:text-3xl font-grandview-bold text-center text-brand-primary mb-8">How Goobii Local Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-primary">1</span>
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Partnership Setup</h3>
                  <p className="text-muted-foreground text-sm">We establish operations at your building or community</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-secondary">2</span>
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Staff Training</h3>
                  <p className="text-muted-foreground text-sm">Local staff receive comprehensive Goobii training</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-pop/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-pop">3</span>
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Service Launch</h3>
                  <p className="text-muted-foreground text-sm">Residents begin booking through the Goobii app</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-contrast/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-primary">4</span>
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Ongoing Support</h3>
                  <p className="text-muted-foreground text-sm">Continuous quality monitoring and support</p>
                </div>
              </div>
            </div>

            {/* Professional Training */}
            <div className="bg-card p-8 shadow-sm mb-16" data-testid="training-integration" style={{ borderRadius: '12px 4px 12px 12px' }}>
              <div className="flex items-center mb-4">
                <Wrench className="w-8 h-8 text-brand-pop mr-4" />
                <h3 className="text-2xl font-grandview-bold text-brand-primary">Professional Training & Integration</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                We provide comprehensive training to integrate existing building maintenance staff into the Goobii system, ensuring consistent service delivery and professional standards across all locations. This includes training in our Sooftwash™ technology, customer service protocols, and quality assurance procedures.
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-muted/50 p-8 max-w-3xl mx-auto" style={{ borderRadius: '12px 4px 12px 12px' }}>
                <h3 className="text-2xl font-grandview-bold text-brand-primary mb-4">Interested in bringing Goobii to your building?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to learn more about implementing Goobii Local in your residential or commercial property.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact">
                    <button className="cta-button bg-brand-primary text-brand-bg px-6 py-3 rounded-xl font-grandview-bold hover:bg-brand-secondary transition-colors w-full sm:w-auto text-center" data-testid="enquire-button">
                      Enquire Now
                    </button>
                  </Link>
                  <CTAGroup size="sm" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
