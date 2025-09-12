import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import FAQItem from "@/components/faq-item";
import CTAGroup from "@/components/cta-group";

export default function FAQs() {
  const faqs = [
    {
      question: "How do I book a wash?",
      answer: "Download the app, choose a service (Aura/Aura Absolute/Glow/Glow Absolute), pick a time and location, and confirm."
    },
    {
      question: "How long does a wash take?",
      answer: "It varies by vehicle size and condition. Your Liink will confirm on arrival."
    },
    {
      question: "Do I need to be present?",
      answer: "Not always. Provide access instructions in the app and ensure the car is unlocked if interior work is included."
    },
    {
      question: "Where can I see prices?",
      answer: "Pricing is shown in the app before you confirm. Subscriptions are on a separate page without prices."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Major cards and digital payments (details shown in app at checkout)."
    },
    {
      question: "How much water do you save?",
      answer: "Sooftwash™ uses 2–4 L per wash compared to 100–150 L for pressure washes—saving tens of liters each time."
    },
    {
      question: "Are your products safe?",
      answer: "Yes—biodegradable formulas chosen to be worker‑safe and vehicle‑safe."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "Tell us via the app within 24 hours; we'll review and make it right."
    },
    {
      question: "Are you insured?",
      answer: "We operate to professional standards and handle issues transparently. Coverage details are available upon request."
    },
    {
      question: "Can I request before/after photos?",
      answer: "Yes—toggle the option during booking."
    },
    {
      question: "How do subscriptions work?",
      answer: "Choose Spark 4/8 or Flow 12 in the app, select Aura/Aura Absolute per visit, schedule, and manage. Pause or adjust anytime (T&Cs apply)."
    },
    {
      question: "Where do you operate?",
      answer: "Dubai to start. Check the app for your specific area."
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

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-ghost font-bold text-brand-primary mb-4">Still have questions?</h2>
            <p className="text-xl text-brand-primary mb-4">Contact us directly or download the app to get started with your first eco-friendly wash</p>
            <p className="text-lg text-brand-primary mb-8 font-grandview-bold">Download Goobii Connect now!</p>
            
            <div className="flex justify-center">
              <CTAGroup size="lg" className="flex-col sm:flex-row" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
