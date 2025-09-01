import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import CTAGroup from "@/components/cta-group";
import { Building, Users, TrendingUp, Wrench } from "lucide-react";

export default function Buildings() {
  return (
    <>
      <Helmet>
        <title>For Buildings & Communities - Goobii Local</title>
        <meta name="description" content="Goobii Local brings convenient, eco-friendly car cleaning directly to residential and commercial buildings across Dubai." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">For Buildings & Communities</h1>
              <p className="text-xl text-muted-foreground">
                Goobii Local brings our eco-friendly car cleaning services directly to residential and commercial buildings across Dubai.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern residential building complex" 
                  className="rounded-2xl shadow-lg w-full h-auto mb-6" 
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-grandview-bold text-brand-primary mb-4">Fixed-Location Operations</h2>
                  <p className="text-muted-foreground mb-6">
                    We establish dedicated service points within building complexes, providing residents with convenient access to our eco-friendly car cleaning services without leaving their property.
                  </p>
                  <p className="text-muted-foreground">
                    Our trained professionals operate on-site using our water-saving Sooftwash™ technology, ensuring minimal environmental impact while delivering exceptional results.
                  </p>
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
            <div className="bg-card p-8 rounded-xl shadow-sm mb-16" data-testid="training-integration">
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
              <div className="bg-muted/50 p-8 rounded-2xl max-w-3xl mx-auto">
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
