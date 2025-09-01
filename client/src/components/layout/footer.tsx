import { Link } from "wouter";
import { MessageCircle, Mail } from "lucide-react";
import CTAGroup from "@/components/cta-group";
import logoImage from "@assets/Logo-01_1756735001869.png";

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-brand-bg py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logoImage} alt="Goobii" className="h-12 w-auto mb-4" />
            <p className="text-brand-bg/80 mb-4">
              Eco-friendly car cleaning that saves water without compromising quality. Making sustainability accessible and effective for everyone in Dubai.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-grandview-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-brand-bg/80">
              <li>
                <Link href="/services" className="hover:text-brand-bg transition-colors" data-testid="footer-link-services">
                  Car Cleaning
                </Link>
              </li>
              <li>
                <Link href="/subscriptions" className="hover:text-brand-bg transition-colors" data-testid="footer-link-subscriptions">
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link href="/buildings" className="hover:text-brand-bg transition-colors" data-testid="footer-link-buildings">
                  Buildings & Communities
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-brand-bg transition-colors" data-testid="footer-link-fleet">
                  Fleet & Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-grandview-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-brand-bg/80">
              <li>
                <Link href="/about" className="hover:text-brand-bg transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-brand-bg transition-colors" data-testid="footer-link-faqs">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-bg transition-colors" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-grandview-bold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 text-brand-bg/80">
              <a
                href="#whatsapp-placeholder"
                className="flex items-center hover:text-brand-bg transition-colors"
                data-testid="footer-whatsapp-link"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
              <a
                href="#email-placeholder"
                className="flex items-center hover:text-brand-bg transition-colors"
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
            <div className="text-brand-bg/60 text-sm mb-4 md:mb-0">
              © 2024 Goobii. All rights reserved. Making car care sustainable.
            </div>
            
            {/* Footer CTA */}
            <CTAGroup size="sm" variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
