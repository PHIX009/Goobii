import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTAGroup from "@/components/cta-group";
import logoImage from "@assets/Horizontal Logo + Tagline_1757358585705.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Subscriptions", href: "/subscriptions" },
  { name: "About Us", href: "/about" },
  { name: "Purpose & Impact", href: "/purpose-and-impact" },
  { name: "FAQs", href: "/faqs" },
  { name: "Get in Touch", href: "/contact" }
];

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

        {/* Right side container */}
        <div className="flex items-center gap-2">
          {location === "/" ? (
            /* Home page: sliding animation effect */
            <div 
              className="transition-transform duration-700"
              style={{
                transform: isScrolled ? 'translateX(0)' : 'translateX(calc(-100% - 16px))',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <CTAGroup size={isScrolled ? "sm" : "md"} />
            </div>
          ) : (
            /* Other pages: small CTA buttons on the right */
            <CTAGroup size="sm" />
          )}
          {/* Menu */}
          <Button 
            ref={menuButtonRef}
            variant="ghost" 
            className="p-2" 
            data-testid="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Menu className="w-6 h-6 text-brand-primary" />
            </motion.div>
          </Button>
        </div>
      </nav>

      {/* Custom Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with fade effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sliding Menu */}
            <motion.div
              initial={{ 
                opacity: 0,
                height: 0,
                width: 50,
                x: menuButtonRef.current ? 
                  menuButtonRef.current.getBoundingClientRect().left : 
                  window.innerWidth - 70,
                y: 70
              }}
              animate={{ 
                opacity: 1,
                height: "auto",
                width: 200,
                x: window.innerWidth - 220,
                y: 70
              }}
              exit={{ 
                opacity: 0,
                height: 0,
                width: 50,
                x: menuButtonRef.current ? 
                  menuButtonRef.current.getBoundingClientRect().left : 
                  window.innerWidth - 70,
                y: 70
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut",
                height: { duration: 0.5, delay: isOpen ? 0.1 : 0 },
                width: { duration: 0.4, ease: "easeInOut" }
              }}
              className="fixed z-50 border-2 border-brand-primary shadow-2xl overflow-hidden"
              style={{ 
                borderRadius: '12px 4px 12px 12px',
                backgroundColor: '#e2e8f0',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 16px -8px rgba(0, 105, 128, 0.3)'
              }}
            >
              <motion.div 
                className="p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: isOpen ? 0.3 : 0 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: isOpen ? 0.1 + (index * 0.05) : 0
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-2 px-3 text-sm transition-colors rounded-md mb-1 ${
                        location === item.href 
                          ? "font-bold text-[var(--brand-secondary)]" 
                          : "text-brand-secondary hover:text-brand-pop hover:font-semibold"
                      }`}
                      onClick={() => setIsOpen(false)}
                      data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
