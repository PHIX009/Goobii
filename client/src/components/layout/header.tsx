import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Smartphone, Download } from "lucide-react";
import CTAGroup from "@/components/cta-group";
import logoImage from "@assets/Goobii Vertical Logo_1756905830399.png";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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

        {/* CTA Buttons and Menu */}
        <div className="flex items-center gap-2">
          <CTAGroup size="sm" />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2" data-testid="menu-toggle">
                <Menu className="w-6 h-6 text-brand-primary" />
              </Button>
            </SheetTrigger>
            {/* Custom backdrop with full page blur */}
            {isOpen && (
              <div 
                className="fixed inset-0 z-40 backdrop-blur-sm" 
                onClick={() => setIsOpen(false)}
              />
            )}
            <SheetContent 
              side="right" 
              className="w-[180px] h-fit max-h-[350px] bg-background border-l border-brand-primary/20 shadow-xl z-50 top-20 right-4 rounded-lg overflow-visible"
              style={{ position: 'fixed' }}
            >
              <VisuallyHidden>
                <h2>Navigation Menu</h2>
              </VisuallyHidden>
              <div className="flex flex-col py-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-xs py-1.5 px-2 transition-all duration-200 rounded-md mx-1 ${
                      location === item.href 
                        ? "font-bold text-brand-pop bg-brand-pop/10" 
                        : "text-brand-secondary hover:text-brand-secondary hover:bg-brand-secondary/10 hover:font-bold"
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ))}
                
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
