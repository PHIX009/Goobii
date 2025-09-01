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
      className={`service-card bg-card p-8 rounded-2xl shadow-lg relative ${
        isRecommended ? "border-2 border-brand-pop/20" : ""
      }`}
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
          <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
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
