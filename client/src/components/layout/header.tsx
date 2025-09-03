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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-link text-brand-secondary hover:text-brand-primary transition-colors ${
                location === item.href ? "font-bold text-brand-pop" : ""
              }`}
              data-testid={`nav-link-${item.name.toLowerCase()}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block">
            <CTAGroup size="sm" />
          </div>
          
          {/* Mobile CTA for small screens */}
          <div className="sm:hidden">
            <a
              href="#android-placeholder"
              className="cta-button bg-brand-secondary text-brand-bg px-3 py-2 rounded-xl font-grandview-bold text-sm hover:bg-brand-primary transition-colors flex items-center"
              data-testid="mobile-cta-android"
            >
              <Download className="w-4 h-4 mr-1" />
              App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden p-2" data-testid="mobile-menu-toggle">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg py-2 text-brand-secondary hover:text-brand-primary transition-colors ${
                      location === item.href ? "font-bold text-brand-pop" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-border">
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
