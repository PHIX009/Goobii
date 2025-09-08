import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  category: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
  icon?: React.ReactNode;
}

export default function ServiceCard({ 
  title, 
  category, 
  description, 
  features, 
  isRecommended = false,
  icon 
}: ServiceCardProps) {
  return (
    <div 
      className={`service-card bg-card p-8 shadow-lg relative hover:shadow-xl hover:shadow-brand-pop/30 transition-all duration-300 border border-brand-primary/10 hover:border-brand-pop/30 ${
        isRecommended ? "border-2 border-brand-pop/20" : ""
      }`}
      style={{ borderRadius: '12px 4px 12px 12px' }}
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {isRecommended && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-brand-pop text-white">Recommended</Badge>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-grandview-bold text-brand-primary">{title}</h3>
          <Badge variant="outline" className="mt-2">{category}</Badge>
        </div>
        {icon && (
          <div className="w-16 h-16 bg-brand-primary/10 flex items-center justify-center" style={{ borderRadius: '12px 4px 12px 12px' }}>
            {icon}
          </div>
        )}
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-2 text-sm text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
