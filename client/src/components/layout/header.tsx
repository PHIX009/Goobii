import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Smartphone, Download } from "lucide-react";
import CTAGroup from "@/components/cta-group";
import logoImage from "@assets/Horizontal Logo + Tagline_1757358585705.png";
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
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header-sticky fixed top-0 left-0 right-0 z-50 px-4 py-3 border-b border-border" data-testid="header">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - visible on all pages except home when scrolled */}
        <div className={`transition-all duration-500 ease-in-out ${
          (location === "/" && isScrolled) || (location !== "/") 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8 pointer-events-none'
        }`}>
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <img 
              src={logoImage} 
              alt="Goobii - Planet. People. Purpose." 
              className="h-12 w-auto max-w-[180px]" 
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>

        {/* CTA Buttons - different positioning based on page */}
        {location === "/" ? (
          /* Home page: sliding animation effect */
          <div 
            className="absolute left-4 transition-transform duration-700"
            style={{
              transform: isScrolled ? 'translateX(calc(100vw - 280px))' : 'translateX(0)',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <div className={`transition-all duration-500 ease-out ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <CTAGroup size={isScrolled ? "sm" : "md"} />
            </div>
          </div>
        ) : null}

        {/* Right side container */}
        <div className="flex items-center gap-2">
          {location !== "/" && (
            /* Other pages: small CTA buttons on the right */
            <CTAGroup size="sm" />
          )}
          {/* Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2" data-testid="menu-toggle">
                <Menu className="w-6 h-6 text-brand-primary" />
              </Button>
            </SheetTrigger>
            {/* Custom backdrop */}
            {isOpen && (
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsOpen(false)}
              />
            )}
            <SheetContent 
              side="right" 
              className="w-[200px] h-fit max-h-[400px] border-2 border-brand-primary shadow-2xl z-50 top-20 right-4 overflow-visible"
              style={{ 
                position: 'fixed',
                borderRadius: '12px 4px 12px 12px',
                backgroundColor: '#f1f5f9',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 16px -8px rgba(0, 105, 128, 0.3)'
              }}
            >
              <VisuallyHidden>
                <h2>Navigation Menu</h2>
              </VisuallyHidden>
              <div className="flex flex-col py-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm py-2 px-3 transition-all duration-200 mx-1 ${
                      location === item.href 
                        ? "font-bold text-[#DCC57F]" 
                        : "text-brand-secondary hover:text-brand-pop hover:font-bold"
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
