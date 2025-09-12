import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
  { name: "Get in Touch", href: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // NEW: refs for measurements
  const navRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // NEW: computed X position for CTA on home when scrolled
  const [ctaTargetX, setCtaTargetX] = useState(0);

  // Detect reduced motion
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => setReduceMotion(mq.matches);
    handle();
    mq.addEventListener?.("change", handle);
    return () => mq.removeEventListener?.("change", handle);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NEW: compute/dynamic recalc of CTA end position (left -> right)
  useEffect(() => {
    const GAP = 8; // px gap between CTA and menu button
    const compute = () => {
      if (!navRef.current || !ctaRef.current || !menuButtonRef.current) return;
      const navRect = navRef.current.getBoundingClientRect();
      const ctaRect = ctaRef.current.getBoundingClientRect();
      const menuRect = menuButtonRef.current.getBoundingClientRect();

      // target left for CTA: just to the left of the menu button, minus GAP
      const targetLeft = Math.max(
        0,
        Math.round((menuRect.left - navRect.left) - GAP - ctaRect.width)
      );
      setCtaTargetX(targetLeft);
    };

    // compute on mount, whenever scroll state changes (size changes), and on resize
    compute();
    const onResize = () => compute();
    window.addEventListener("resize", onResize);
    // fonts/images/layout shifts
    const onLoad = () => compute();
    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onLoad);
    };
  }, [isScrolled, location]);

  // Optional: close on ESC for the menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Optional: lock body scroll when menu is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <header
      className="header-sticky fixed top-0 left-0 right-0 z-50 px-4 py-3 border-b border-border"
      data-testid="header"
    >
      {/* Make nav relative to host the absolute CTA track */}
      <nav
        ref={navRef}
        className="relative max-w-7xl mx-auto flex items-center justify-between"
      >
        {/* Logo - visible on home only after scroll, and always on other pages */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            (location === "/" && isScrolled) || location !== "/"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8 pointer-events-none"
          }`}
        >
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <img
              src={logoImage}
              alt="Goobii logo"
              className="h-12 w-auto max-w-[180px]"
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* RIGHT CLUSTER: Only the menu button lives here on home.
            On other routes, we show the static right-aligned CTAs here as before. */}
        <div className="flex items-center gap-2">
          {location === "/" ? null : <CTAGroup size="sm" />}
          <Button
            ref={menuButtonRef}
            variant="ghost"
            className="p-2"
            data-testid="menu-toggle"
            aria-haspopup="dialog"
            aria-controls="site-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Swap icon for clearer affordance */}
            {isOpen ? (
              <X className="w-6 h-6 text-brand-primary" />
            ) : (
              <Menu className="w-6 h-6 text-brand-primary" />
            )}
          </Button>
        </div>

        {/* NEW: HOME-ONLY CTA TRACK (absolute, spans nav width).
            Starts flush-left (x=0), slides to dock left of menu button on scroll. */}
        {location === "/" && (
          <motion.div
            ref={ctaRef}
            className="absolute inset-y-0 left-0 flex items-center"
            // Ensure clicks pass through if needed: pointer-events-auto by default
            initial={false}
            animate={{
              x: isScrolled ? ctaTargetX : 0,
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
            }
          >
            <CTAGroup size={isScrolled ? "sm" : "md"} />
          </motion.div>
        )}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
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
              role="dialog"
              aria-modal="true"
              id="site-menu"
              initial={{
                opacity: 0,
                height: 0,
                width: 50,
                x:
                  menuButtonRef.current
                    ? menuButtonRef.current.getBoundingClientRect().left
                    : window.innerWidth - 70,
                y: 70,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                width: 200,
                x: window.innerWidth - 220,
                y: 70,
              }}
              exit={{
                opacity: 0,
                height: 0,
                width: 50,
                x:
                  menuButtonRef.current
                    ? menuButtonRef.current.getBoundingClientRect().left
                    : window.innerWidth - 70,
                y: 70,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                height: { duration: 0.5 },
                width: { duration: 0.4, ease: "easeInOut" },
              }}
              className="fixed z-50 border-2 border-brand-primary shadow-2xl overflow-hidden bg-background"
              style={{
                borderRadius: "12px 4px 12px 12px",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 16px -8px rgba(0, 105, 128, 0.3)",
              }}
            >
              <motion.div
                className="p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.1 + index * 0.05,
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
                      data-testid={`nav-link-${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
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
