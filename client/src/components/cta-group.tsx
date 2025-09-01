import { Button } from "@/components/ui/button";
import { SiApple, SiGoogleplay } from "react-icons/si";

interface CTAGroupProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "footer";
  className?: string;
}

export default function CTAGroup({ size = "md", variant = "default", className = "" }: CTAGroupProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const footerClasses = variant === "footer" 
    ? "bg-brand-bg text-brand-primary hover:bg-brand-bg/90 border-brand-bg/20" 
    : "";

  return (
    <div className={`flex gap-3 ${className}`} data-testid="cta-group">
      <a
        href="#ios-placeholder"
        className={`cta-button ${variant === "footer" ? footerClasses : "bg-brand-primary text-brand-bg hover:bg-brand-secondary"} ${sizeClasses[size]} rounded-xl font-grandview-bold transition-colors flex items-center justify-center`}
        data-testid="cta-button-ios"
      >
        <SiApple className="w-4 h-4 mr-2" />
        {size === "sm" ? "iOS" : size === "lg" ? "Download" : "Download on iOS"}
      </a>
      <a
        href="#android-placeholder"
        className={`cta-button ${variant === "footer" ? footerClasses : "bg-brand-secondary text-brand-bg hover:bg-brand-primary"} ${sizeClasses[size]} rounded-xl font-grandview-bold transition-colors flex items-center justify-center`}
        data-testid="cta-button-android"
      >
        <SiGoogleplay className="w-4 h-4 mr-2" />
        {size === "sm" ? "Android" : size === "lg" ? "Download" : "Get it on Android"}
      </a>
    </div>
  );
}
