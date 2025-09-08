import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Smartphone, Download } from "lucide-react";
import CTAGroup from "@/components/cta-group";
import logoImage from "@assets/Goobii Vertical Logo_1756905830399.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Subscriptions", href: "/subscriptions" },
  { name: "Buildings", href: "/buildings" },
  { name: "Fleet", href: "/fleet" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header-sticky fixed top-0 left-0 right-0 z-50 px-4 py-3 border-b border-border" data-testid="header">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" data-testid="logo-link">
          <img 
            src={logoImage} 
            alt="Goobii" 
            className={`transition-all duration-300 ${
              isScrolled ? 'h-10 w-auto max-w-[150px]' : 'h-14 w-auto max-w-[210px]'
            }`}
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Menu Button - Always visible */}
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2" data-testid="menu-toggle">
                <Menu className="w-6 h-6 text-brand-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-sm border-l border-brand-primary/20">
              <div className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-xl py-3 text-brand-secondary hover:text-brand-primary transition-colors border-b border-brand-primary/10 ${
                      location === item.href ? "font-bold text-brand-pop" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Menu CTA */}
                <div className="pt-6 border-t border-brand-primary/20">
                  <CTAGroup />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
