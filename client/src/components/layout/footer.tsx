import { Link } from "wouter";
import { MessageCircle, Mail } from "lucide-react";
import CTAGroup from "@/components/cta-group";
import logoImage from "@assets/Horizontal Logo + Tagline_1757358585705.png";

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-brand-bg py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left side - Products and Company */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Products */}
              <div>
                <h4 className="text-xl font-bold text-brand-bg mb-3" style={{ fontFamily: 'var(--font-grandview-bold)', fontWeight: '800', fontStyle: 'normal' }}>Products</h4>
                <ul className="space-y-1 text-brand-bg/80">
                  <li>
                    <Link href="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="hover:text-brand-bg transition-colors block" data-testid="footer-link-services">
                      Car Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/subscriptions" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="hover:text-brand-bg transition-colors block" data-testid="footer-link-subscriptions">
                      Subscriptions
                    </Link>
                  </li>
                  <li>
                    <Link href="/buildings" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="hover:text-brand-bg transition-colors block" data-testid="footer-link-buildings">
                      Buildings & Communities
                    </Link>
                  </li>
                  <li>
                    <Link href="/fleet" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="hover:text-brand-bg transition-colors block" data-testid="footer-link-fleet">
                      Fleet & Business
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Company */}
              <div>
                <h4 className="text-xl font-bold text-brand-bg mb-3" style={{ fontFamily: 'var(--font-grandview-bold)', fontWeight: '800', fontStyle: 'normal' }}>Company</h4>
                <ul className="space-y-1 text-brand-bg/80">
                  <li>
                    <Link href="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="hover:text-brand-bg transition-colors block" data-testid="footer-link-about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="hover:text-brand-bg transition-colors block" data-testid="footer-link-faqs">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="hover:text-brand-bg transition-colors block" data-testid="footer-link-contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right side - Get in Touch */}
          <div>
            <h4 className="text-xl font-bold text-brand-bg mb-3" style={{ fontFamily: 'var(--font-grandview-bold)', fontWeight: '800', fontStyle: 'normal' }}>Get in Touch</h4>
            <div className="space-y-1 text-brand-bg/80">
              <a
                href="#whatsapp-placeholder"
                className="flex items-center hover:text-brand-bg transition-colors block"
                data-testid="footer-whatsapp-link"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
              <a
                href="#email-placeholder"
                className="flex items-center hover:text-brand-bg transition-colors block"
                data-testid="footer-email-link"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-bg/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logoImage} alt="Goobii - Planet. People. Purpose." className="h-12 w-auto" style={{ objectFit: 'contain' }} />
            </div>
            
            <div className="text-brand-bg/60 text-sm">
              <p>© 2024 Goobii. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
