import { Helmet } from "react-helmet-async";

export default function PurposeAndImpact() {
  return (
    <>
      <Helmet>
        <title>Purpose & Impact - Goobii</title>
        <meta name="description" content="Discover Goobii's environmental approach, sustainability metrics, and our commitment to making car care part of everyday planet care." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16" data-testid="purpose-impact-page">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-1.5 4.5-7 8.5-7 14a7 7 0 1 0 14 0c0-5.5-5.5-9.5-7-14z"/>
              </svg>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">
              Purpose & Impact
            </h1>
            
            <div className="bg-card p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-grandview-bold text-brand-primary mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground font-grandview leading-relaxed">
                We're preparing a comprehensive overview of our sustainability approach, environmental metrics, and community impact commitments.
              </p>
              <p className="text-base text-muted-foreground font-grandview mt-4">
                This page will feature detailed insights into our water-saving technology, 
                carbon footprint reduction, and our journey toward making eco-friendly car care 
                accessible to everyone in Dubai.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}