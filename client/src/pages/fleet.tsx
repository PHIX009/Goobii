import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import CTAGroup from "@/components/cta-group";
import { Truck, MapPin, Building2, DollarSign, Clock, UserCog } from "lucide-react";

export default function Fleet() {
  return (
    <>
      <Helmet>
        <title>Fleet & Business Solutions - Goobii</title>
        <meta name="description" content="Comprehensive car cleaning services tailored for businesses, fleet operators, and commercial organizations across Dubai." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">Fleet & Business Solutions</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive car cleaning services tailored for businesses, fleet operators, and commercial organizations across Dubai.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Corporate fleet vehicles at business facility" 
                  className="rounded-2xl shadow-lg w-full h-auto mb-6" 
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-grandview-bold text-brand-primary mb-4">B2B Cleaning Solutions</h2>
                  <p className="text-muted-foreground mb-6">
                    We offer flexible business-to-business car cleaning services with both on-site and facility-based options designed to meet the unique needs of commercial vehicle fleets.
                  </p>
                </div>

                {/* Service Options */}
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-xl shadow-sm" data-testid="onsite-services">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-6 h-6 text-brand-primary mr-3" />
                      <h3 className="text-xl font-grandview-bold text-brand-primary">On-Site Services</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Mobile cleaning teams come to your location</li>
                      <li>• Minimal disruption to business operations</li>
                      <li>• Flexible scheduling around your needs</li>
                      <li>• Water-efficient cleaning saves facility resources</li>
                    </ul>
                  </div>

                  <div className="bg-card p-6 rounded-xl shadow-sm" data-testid="facility-services">
                    <div className="flex items-center mb-3">
                      <Building2 className="w-6 h-6 text-brand-secondary mr-3" />
                      <h3 className="text-xl font-grandview-bold text-brand-primary">Facility Options</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Dedicated cleaning facilities for larger fleets</li>
                      <li>• Higher volume processing capabilities</li>
                      <li>• Specialized equipment for commercial vehicles</li>
                      <li>• Cost-effective solutions for regular maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Benefits */}
            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-16" data-testid="business-benefits">
              <h2 className="text-2xl lg:text-3xl font-grandview-bold text-center text-brand-primary mb-8">Why Choose Goobii for Business</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Cost Effective</h3>
                  <p className="text-muted-foreground">Competitive pricing with volume discounts for fleet operations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">Reliable Service</h3>
                  <p className="text-muted-foreground">Consistent quality and scheduling you can depend on</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-pop/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <UserCog className="w-8 h-8 text-brand-pop" />
                  </div>
                  <h3 className="font-grandview-bold text-lg text-brand-primary mb-2">UserCog-Friendly</h3>
                  <p className="text-muted-foreground">Enhance your company's sustainability profile</p>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="mb-16" data-testid="industries-section">
              <h2 className="text-3xl font-grandview-bold text-center text-brand-primary mb-12">Industries We Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-card rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="font-grandview-bold text-sm text-brand-primary">Corporate Fleets</h3>
                </div>
                
                <div className="text-center p-6 bg-card rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <h3 className="font-grandview-bold text-sm text-brand-primary">Delivery Services</h3>
                </div>
                
                <div className="text-center p-6 bg-card rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-brand-pop/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-brand-pop" />
                  </div>
                  <h3 className="font-grandview-bold text-sm text-brand-primary">Rental Cars</h3>
                </div>
                
                <div className="text-center p-6 bg-card rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-brand-contrast/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="font-grandview-bold text-sm text-brand-primary">Transportation</h3>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="bg-card p-8 rounded-xl shadow-sm mb-16" data-testid="additional-benefits">
              <h3 className="text-2xl font-grandview-bold text-brand-primary mb-6">Business Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Professional fleet appearance enhances brand image</li>
                  <li>• UserCog-friendly practices support CSR initiatives</li>
                  <li>• Detailed reporting and maintenance tracking</li>
                  <li>• Customizable service packages and contracts</li>
                </ul>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Dedicated account management</li>
                  <li>• Priority scheduling for urgent needs</li>
                  <li>• Scalable solutions for growing fleets</li>
                  <li>• Integration with fleet management systems</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-brand-primary p-8 rounded-2xl max-w-3xl mx-auto">
                <h3 className="text-2xl font-grandview-bold text-brand-bg mb-4">Ready to discuss your fleet cleaning needs?</h3>
                <p className="text-brand-bg/80 mb-6">
                  Get a customized proposal for your business vehicle cleaning requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact">
                    <button className="cta-button bg-brand-bg text-brand-primary px-6 py-3 rounded-xl font-grandview-bold hover:bg-brand-bg/90 transition-colors w-full sm:w-auto text-center" data-testid="request-proposal-button">
                      Request a Proposal
                    </button>
                  </Link>
                  <CTAGroup size="sm" variant="footer" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
