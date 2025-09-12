import { Link } from 'wouter';
import { MessageCircle, Mail, Phone, Users } from 'lucide-react';
import logoImage from "@assets/Horizontal Logo + Tagline_1757358585705.png";

export default function FooterCategories() {
  // Check if we're on the service page for conditional styling
  const isServicePage = typeof window !== 'undefined' && window.location.pathname === '/services';
  
  const linkBase = "text-[var(--brand-primary)] hover:text-[var(--brand-pop)] transition-all duration-300 focus:outline-none";
  const row = "flex items-center gap-3";

  return (
    <footer className="bg-[var(--brand-bg)] border-t border-[color-mix(in_oklab,var(--brand-secondary)_15%,transparent)]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 pt-8 md:pt-12 pb-16 md:pb-20 text-[#003a5c]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
          {/* Left side - Products and Company closer together */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Products */}
            <div>
              <h3 className="font-extrabold tracking-tight text-lg md:text-xl text-[var(--brand-secondary)]" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
                Products
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <Link href="/services" className={`${linkBase} inline-block`}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/subscriptions" className={`${linkBase} inline-block`}>
                    Subscriptions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-extrabold tracking-tight text-lg md:text-xl text-[var(--brand-secondary)]" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
                Company
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <Link href="/about" className={`${linkBase} inline-block`}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/purpose-and-impact" className={`${linkBase} inline-block`}>
                    Purpose &amp; Impact
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className={`${linkBase} inline-block`}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Get in Touch */}
          <div>
            <h3 className="font-extrabold tracking-tight text-lg md:text-xl text-[var(--brand-secondary)]" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
              Get in Touch
            </h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link href="/contact" className={`text-[var(--brand-primary)] focus:outline-none inline-flex ${row} group`}>
                  <Users className="w-5 h-5 text-[var(--brand-secondary)] opacity-80 group-hover:text-[var(--brand-pop)] transition-colors" />
                  <span className="group-hover:text-[var(--brand-pop)] transition-colors">Contact Us</span>
                </Link>
              </li>
              <li>
                <a href="https://wa.me/XXXXXXXXXXX" className={`text-[var(--brand-primary)] focus:outline-none inline-flex ${row} group`}>
                  <MessageCircle className="w-5 h-5 text-[var(--brand-secondary)] opacity-80 group-hover:text-[var(--brand-pop)] transition-colors" />
                  <span className="group-hover:text-[var(--brand-pop)] transition-colors">WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@goobii.ae" className={`text-[var(--brand-primary)] focus:outline-none inline-flex ${row} group`}>
                  <Mail className="w-5 h-5 text-[var(--brand-secondary)] opacity-80 group-hover:text-[var(--brand-pop)] transition-colors" />
                  <span className="group-hover:text-[var(--brand-pop)] transition-colors">Email</span>
                </a>
              </li>
              <li>
                <a href="tel:+971XXXXXXXXX" className={`text-[var(--brand-primary)] focus:outline-none inline-flex ${row} group`}>
                  <Phone className="w-5 h-5 text-[var(--brand-secondary)] opacity-80 group-hover:text-[var(--brand-pop)] transition-colors" />
                  <span className="group-hover:text-[var(--brand-pop)] transition-colors">Phone</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[color-mix(in_oklab,var(--brand-secondary)_15%,transparent)] mt-12 md:mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logoImage} alt="Goobii - Planet. People. Purpose." className="h-12 w-auto" style={{ 
                objectFit: 'contain', 
                filter: isServicePage 
                  ? 'brightness(0) saturate(100%) invert(17%) sepia(26%) saturate(1765%) hue-rotate(174deg) brightness(93%) contrast(102%)' 
                  : 'none'
              }} />
            </div>
            
            <div className={`${isServicePage ? 'text-[#003a5c]' : 'text-[var(--brand-primary)]'} text-sm`}>
              <p>© 2024 Goobii. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}