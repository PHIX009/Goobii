import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface SubscriptionCardProps {
  title: string;
  description: string;
  washCount: number;
  features: string[];
  isPopular?: boolean;
}

export default function SubscriptionCard({ 
  title, 
  description, 
  washCount, 
  features, 
  isPopular = false 
}: SubscriptionCardProps) {
  return (
    <div 
      className={`subscription-card bg-card p-8 shadow-lg hover:shadow-xl hover:shadow-brand-pop/30 transition-all duration-300 border border-brand-primary/10 hover:border-brand-pop/30 ${
        isPopular ? "border-2 border-brand-contrast/30" : ""
      }`}
      style={{ borderRadius: '12px 4px 12px 12px' }}
      data-testid={`subscription-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-2xl font-grandview-bold text-brand-primary">{title}</h3>
          {isPopular && (
            <Badge className="bg-brand-contrast text-brand-secondary">Popular</Badge>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="mb-6">
        <div className="text-center mb-4">
          <span className="text-4xl font-ghost font-bold text-brand-primary">{washCount}</span>
          <span className="text-lg text-muted-foreground">/month</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">washes per month</p>
      </div>

      <div className="space-y-3 mb-8">
        <h4 className="font-grandview-bold text-brand-primary">What's included:</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
