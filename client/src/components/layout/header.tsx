import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTAGroup from "@/components/cta-group";
import logoImage from "@assets/Horizontal Logo + Tagline_1757358585705.png";

const menuCategories = [
  {
    name: "Products",
    items: [
      { name: "Services", href: "/services" },
      { name: "Subscriptions", href: "/subscriptions" }
    ]
  },
  {
    name: "Company", 
    items: [
      { name: "About Us", href: "/about" },
      { name: "Purpose & Impact", href: "/purpose-and-impact" },
      { name: "FAQs", href: "/faqs" }
    ]
  },
  {
    name: "Get in Touch",
    href: "/contact"
  }
];

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
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
          <Button 
            ref={menuButtonRef}
            variant="ghost" 
            className="p-2" 
            data-testid="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-brand-primary" />
            ) : (
              <Menu className="w-6 h-6 text-brand-primary" />
            )}
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
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sliding Menu */}
            <motion.div
              initial={{ 
                opacity: 0,
                scale: 0.8,
                x: menuButtonRef.current ? 
                  menuButtonRef.current.getBoundingClientRect().right - 200 : 
                  window.innerWidth - 220,
                y: 20
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                x: window.innerWidth - 220,
                y: 80
              }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
                x: menuButtonRef.current ? 
                  menuButtonRef.current.getBoundingClientRect().right - 200 : 
                  window.innerWidth - 220,
                y: 20
              }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.3
              }}
              className="fixed z-50 w-[200px] border-2 border-brand-primary shadow-2xl"
              style={{ 
                borderRadius: '12px 4px 12px 12px',
                backgroundColor: '#e2e8f0',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 16px -8px rgba(0, 105, 128, 0.3)'
              }}
            >
              <div className="p-4">
                {menuCategories.map((category, index) => (
                  <div key={category.name} className="mb-2">
                    {category.href ? (
                      // Direct link for "Get in Touch"
                      <Link
                        href={category.href}
                        className="block py-2 px-3 font-bold text-brand-primary hover:text-[#DCC57F] transition-colors"
                        onClick={() => setIsOpen(false)}
                        data-testid={`nav-link-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {category.name}
                      </Link>
                    ) : (
                      // Expandable category
                      <>
                        <button
                          className="flex items-center justify-between w-full py-2 px-3 font-bold text-brand-secondary hover:text-brand-primary transition-colors"
                          onClick={() => setExpandedCategory(
                            expandedCategory === category.name ? null : category.name
                          )}
                          data-testid={`category-${category.name.toLowerCase()}`}
                        >
                          {category.name}
                          {expandedCategory === category.name ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {expandedCategory === category.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-1">
                                {category.items?.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block py-1.5 px-3 text-sm transition-colors ${
                                      location === item.href 
                                        ? "font-bold text-[#DCC57F]" 
                                        : "text-brand-secondary hover:text-brand-pop"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                    data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
