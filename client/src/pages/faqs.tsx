import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import FAQItem from "@/components/faq-item";
import CTAGroup from "@/components/cta-group";

export default function FAQs() {
  const faqs = [
    {
      question: "How much water does Goobii actually use?",
      answer: "Our Sooftwash™ technology uses just 2-4 liters of water per wash, compared to traditional pressure washing methods that typically consume 100-150 liters. This represents a water savings of over 95% while delivering the same high-quality results."
    },
    {
      question: "Are your cleaning chemicals safe for my car and the environment?",
      answer: "Absolutely. All our cleaning products are biodegradable, non-toxic, and specifically formulated to be both vehicle-safe and worker-safe. They're designed to protect your car's paint, interior surfaces, and materials while being completely safe for the environment."
    },
    {
      question: "How do I book a service through the app?",
      answer: "Booking is simple: download the Goobii app, create your account, add your vehicle details and location, choose your preferred service type, select a convenient time slot, and confirm your booking. The entire process takes just a few minutes."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, digital wallets, and bank transfers through our secure payment system integrated into the app. Payment is processed automatically after each service completion."
    },
    {
      question: "Can I request before and after photos of my car?",
      answer: "Yes! You can request before and after photos when booking your service. Our Liinks will take high-quality photos and upload them to your app account, giving you a clear record of the work completed and the transformation of your vehicle."
    },
    {
      question: "What if I need to cancel or reschedule my appointment?",
      answer: "You can cancel or reschedule your appointment through the app up to 2 hours before your scheduled time without any penalty. For cancellations within 2 hours, a small fee may apply. Rescheduling is always free and can be done instantly through the app."
    },
    {
      question: "How are all my washes recorded and tracked?",
      answer: "Every service is automatically recorded in your app account with details including date, time, service type, Liink who performed the service, and any photos taken. You can view your complete wash history, track subscription usage, and download service reports at any time."
    },
    {
      question: "What areas in Dubai do you service?",
      answer: "We currently service most residential and commercial areas across Dubai. When you enter your location in the app, it will automatically confirm if we service your area. We're continuously expanding our coverage to reach more communities throughout the emirate."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Goobii</title>
        <meta name="description" content="Find answers to common questions about Goobii's eco-friendly car cleaning services, Sooftwash™ technology, booking process, and more." />
      </Helmet>

      <div className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-ghost font-bold text-brand-primary mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about Goobii's eco-friendly car cleaning services
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 mb-16" data-testid="faq-list">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-muted/50 p-8 rounded-2xl">
                <h3 className="text-2xl font-grandview-bold text-brand-primary mb-4">Still have questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us directly or download the app to get started with your first eco-friendly wash
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact">
                    <button className="cta-button bg-brand-primary text-brand-bg px-6 py-3 rounded-xl font-grandview-bold hover:bg-brand-secondary transition-colors w-full sm:w-auto text-center" data-testid="contact-us-button">
                      Contact Us
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
