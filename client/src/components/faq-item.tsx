import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card rounded-xl border border-border" data-testid="faq-item">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="faq-question-button"
      >
        <span className="font-grandview-bold text-brand-primary pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-brand-primary transform transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4" data-testid="faq-answer">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
