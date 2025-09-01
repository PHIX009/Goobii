import { Helmet } from "react-helmet-async";
import { Zap, Sun, Bike, FileText, Heart, Users, Target, Lightbulb, Eye, Award } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Goobii - Our Mission & Values</title>
        <meta name="description" content="Learn about Goobii's mission to provide eco-friendly car cleaning without compromising cost or quality. Discover our sustainable operations and community impact." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">About Goobii</h1>
              <p className="text-xl text-muted-foreground">
                We're revolutionizing car cleaning in Dubai with eco-friendly technology that doesn't compromise on quality or cost.
              </p>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Environmental sustainability and clean technology" 
                  className="rounded-2xl shadow-lg w-full h-auto mb-6" 
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-grandview-bold text-brand-primary mb-4">Our Mission</h2>
                  <p className="text-muted-foreground mb-6">
                    At Goobii, we believe that environmental responsibility shouldn't come at the cost of quality or affordability. Our mission is to transform the car cleaning industry in Dubai by proving that sustainable practices can deliver superior results while being accessible to everyone.
                  </p>
                  <p className="text-muted-foreground">
                    Through our innovative Sooftwash™ technology, we've eliminated the traditional trade-offs between eco-friendliness, quality, and cost—creating a service that's better for your car, your wallet, and our planet.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-sm" data-testid="sustainable-operations">
                  <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Sustainable Operations</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-brand-secondary">Electric Mobility:</strong> Our fleet operates on electric bikes paired with portable power stations, dramatically reducing our carbon footprint while maintaining operational efficiency.
                    </p>
                    <p>
                      <strong className="text-brand-secondary">Solar Integration:</strong> We're actively exploring solar power solutions to make our operations completely renewable energy-powered.
                    </p>
                    <p>
                      <strong className="text-brand-secondary">Water Conservation:</strong> Using just 2-4 liters per wash compared to traditional methods that consume 100-150 liters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations Section */}
            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 mb-16" data-testid="operations-section">
              <h2 className="text-2xl lg:text-3xl font-grandview-bold text-center text-brand-primary mb-8">How We Operate</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Bike className="w-10 h-10 text-brand-primary" />
                  </div>
                  <h3 className="font-grandview-bold text-xl text-brand-primary mb-4">Electric Bikes</h3>
                  <p className="text-muted-foreground">Our team uses electric bikes for transportation, reducing carbon emissions and allowing efficient navigation through Dubai's urban landscape.</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-brand-secondary" />
                  </div>
                  <h3 className="font-grandview-bold text-xl text-brand-primary mb-4">Portable Power Station</h3>
                  <p className="text-muted-foreground">Advanced portable power stations provide clean energy for our equipment, ensuring consistent service quality without grid dependency.</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-pop/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sun className="w-10 h-10 text-brand-pop" />
                  </div>
                  <h3 className="font-grandview-bold text-xl text-brand-primary mb-4">Exploring Solar</h3>
                  <p className="text-muted-foreground">We're actively exploring solar power integration to further reduce our environmental footprint and move toward 100% renewable energy operations.</p>
                </div>
              </div>
            </div>

            {/* Community Impact */}
            <div className="bg-muted/50 p-8 rounded-2xl mb-16" data-testid="community-impact">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-grandview-bold text-brand-primary mb-4">Community Impact</h2>
                <p className="text-muted-foreground">Our commitment extends beyond car cleaning to building a more sustainable Dubai</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-grandview-bold text-brand-primary mb-2">Impact Reports</h3>
                  <p className="text-sm text-muted-foreground">Regular transparency reports on our environmental impact and community contributions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-grandview-bold text-brand-primary mb-2">Eco-Pledge</h3>
                  <p className="text-sm text-muted-foreground">Customer participation in our environmental pledge program for additional impact</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-grandview-bold text-brand-primary mb-2">NGO Partnerships</h3>
                  <p className="text-sm text-muted-foreground">Collaborations with local environmental organizations for greater community impact</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-grandview-bold text-brand-primary mb-2">Clean-ups</h3>
                  <p className="text-sm text-muted-foreground">Community clean-up events and environmental awareness initiatives across Dubai</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="text-center" data-testid="values-section">
              <h2 className="text-3xl font-grandview-bold text-brand-primary mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-2xl shadow-sm">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Innovation</h3>
                  <p className="text-muted-foreground">Continuously developing technologies that make sustainable practices more effective and accessible.</p>
                </div>
                
                <div className="bg-card p-6 rounded-2xl shadow-sm">
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Transparency</h3>
                  <p className="text-muted-foreground">Open about our processes, impact, and commitment to environmental responsibility.</p>
                </div>
                
                <div className="bg-card p-6 rounded-2xl shadow-sm">
                  <div className="w-16 h-16 bg-brand-pop/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-brand-pop" />
                  </div>
                  <h3 className="text-xl font-grandview-bold text-brand-primary mb-3">Excellence</h3>
                  <p className="text-muted-foreground">Delivering consistently superior results while maintaining our environmental standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
