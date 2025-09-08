import { Link } from 'wouter';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { MailIcon } from '@/components/icons/MailIcon';
import { PhoneIcon } from '@/components/icons/PhoneIcon';

export default function FooterCategories() {
  const linkBase = "text-[var(--brand-primary)] hover:text-[var(--brand-secondary)] transition-colors";
  const focusRing = "focus:outline-none focus:ring-2 focus:ring-[var(--brand-pop)] focus:ring-offset-2 focus:ring-offset-[var(--brand-bg)]";
  const row = "flex items-center gap-3 py-1.5";

  return (
    <footer className="bg-[var(--brand-bg)] border-t border-[color-mix(in_oklab,var(--brand-secondary)_15%,transparent)]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Services */}
          <div>
            <h3 className="font-extrabold tracking-tight text-lg md:text-xl text-[var(--brand-secondary)]" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
              Services
            </h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link href="/services" className={`${linkBase} ${focusRing} inline-block`}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/subscriptions" className={`${linkBase} ${focusRing} inline-block`}>
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
                <Link href="/about" className={`${linkBase} ${focusRing} inline-block`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/purpose-and-impact" className={`${linkBase} ${focusRing} inline-block`}>
                  Purpose &amp; Impact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className={`${linkBase} ${focusRing} inline-block`}>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-extrabold tracking-tight text-lg md:text-xl text-[var(--brand-secondary)]" style={{ fontFamily: 'var(--font-grandview-bold)' }}>
              Contact Us
            </h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href="https://wa.me/XXXXXXXXXXX" className={`${linkBase} ${focusRing} inline-flex ${row} group`}>
                  <WhatsAppIcon className="w-5 h-5 text-[var(--brand-secondary)] opacity-80 group-hover:text-[var(--brand-primary)] transition-colors" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@goobii.ae" className={`${linkBase} ${focusRing} inline-flex ${row} group`}>
                  <MailIcon className="w-5 h-5 text-[var(--brand-secondary)] opacity-80 group-hover:text-[var(--brand-primary)] transition-colors" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="tel:+971XXXXXXXXX" className={`${linkBase} ${focusRing} inline-flex ${row} group`}>
                  <PhoneIcon className="w-5 h-5 text-[var(--brand-secondary)] opacity-80 group-hover:text-[var(--brand-primary)] transition-colors" />
                  <span>Phone</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}