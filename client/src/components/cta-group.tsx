import { Button } from "@/components/ui/button";
import { SiApple, SiGoogleplay } from "react-icons/si";

interface CTAGroupProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "footer";
  className?: string;
}

export default function CTAGroup({ size = "md", variant = "default", className = "" }: CTAGroupProps) {
  // Check if we're on the subscription page for conditional styling
  const isSubscriptionPage = typeof window !== 'undefined' && window.location.pathname === '/subscriptions';
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base", 
    lg: "px-8 py-4 text-lg",
  };

  const footerClasses = variant === "footer" 
    ? "bg-brand-bg text-brand-primary hover:bg-brand-bg/90 border-brand-bg/20 shadow-md" 
    : "";

  // Use midnight blue color on subscription page
  const textColor = isSubscriptionPage ? "text-brand-secondary hover:text-brand-pop" : "text-brand-primary hover:text-brand-pop";
  const borderColor = isSubscriptionPage ? "border-brand-secondary hover:border-brand-pop" : "border-brand-primary hover:border-brand-pop";

  if (size === "lg") {
    return (
      <div className={`flex flex-row gap-2 ${className}`} data-testid="cta-group">
        <a href="#ios-placeholder" className={`cta-button bg-transparent ${textColor} border-2 ${borderColor} p-3 sm:px-6 sm:py-4 font-grandview-bold transition-colors flex items-center justify-center gap-2`} style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="cta-button-ios">
          <SiApple className="w-6 h-6" />
          <span className="font-bold text-sm sm:text-base hidden sm:inline">iOS</span>
        </a>
        <a href="#android-placeholder" className={`cta-button bg-transparent ${textColor} border-2 ${borderColor} p-3 sm:px-6 sm:py-4 font-grandview-bold transition-colors flex items-center justify-center gap-2`} style={{ borderRadius: '12px 4px 12px 12px' }} data-testid="cta-button-android">
          <SiGoogleplay className="w-6 h-6" />
          <span className="font-bold text-sm sm:text-base hidden sm:inline">Android</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-row gap-2 ${className}`} data-testid="cta-group">
      <a
        href="#ios-placeholder"
        className={`cta-button ${variant === "footer" ? footerClasses : `bg-transparent ${textColor} border-2 ${borderColor}`} p-2 sm:${sizeClasses[size]} font-grandview-bold transition-colors flex items-center justify-center gap-1`}
        style={{ borderRadius: '12px 4px 12px 12px' }}
        data-testid="cta-button-ios"
      >
        <SiApple className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-bold text-sm sm:text-base hidden sm:inline">{size === "sm" ? "iOS" : "Download on iOS"}</span>
      </a>
      <a
        href="#android-placeholder"
        className={`cta-button ${variant === "footer" ? footerClasses : `bg-transparent ${textColor} border-2 ${borderColor}`} p-2 sm:${sizeClasses[size]} font-grandview-bold transition-colors flex items-center justify-center gap-1`}
        style={{ borderRadius: '12px 4px 12px 12px' }}
        data-testid="cta-button-android"
      >
        <SiGoogleplay className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-bold text-sm sm:text-base hidden sm:inline">{size === "sm" ? "Android" : "Get it on Android"}</span>
      </a>
    </div>
  );
}
