import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

type Service = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  duration: string;
  bestFor: string;
  process: string[];
  products: string[];
  tools: string[];
  equipment: string[];
};

type Props = {
  id: string;
  service: Service;
  onClose: () => void;
};

const spring = { type: "spring", stiffness: 420, damping: 40 };

export default function ServiceModal({ id, service, onClose }: Props) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Click outside to close (overlay handles it; also guard clicks outside panel)
  const content = (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-[60] bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.18 }}
        onClick={onClose} // <- click-away
      />

      <motion.div
        key="panel"
        ref={panelRef}
        layoutId={`card-${id}`}
        className="fixed inset-x-0 md:inset-auto md:left-1/2 md:top-20 z-[70] md:-translate-x-1/2 w-full md:w-[720px] lg:w-[820px] rounded-2xl border border-border bg-background shadow-2xl"
        style={{ willChange: "transform, opacity" }}
        onClick={(e) => e.stopPropagation()} // prevent overlay close when interacting inside
        transition={reduce ? { duration: 0 } : spring}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 p-5 border-b border-border">
          <motion.h3 layoutId={`card-title-${id}`} className="text-xl font-bold text-[var(--brand-primary)]">
            {service.title}
          </motion.h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-full p-2 text-[var(--brand-secondary)] hover:text-[var(--brand-pop)] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Subheader */}
        <div className="flex items-start justify-between gap-4 px-5 pt-4">
          <motion.p layoutId={`card-desc-${id}`} className="text-[var(--brand-secondary)]">
            {service.description}
          </motion.p>
          <motion.span layoutId={`card-duration-${id}`} className="text-sm text-[var(--brand-secondary)] whitespace-nowrap">
            {service.duration}
          </motion.span>
        </div>

        {/* Scrollable content */}
        <div className="max-h-[65vh] overflow-y-auto px-5 pb-6 pt-4">
          <Section title="What's included" items={service.highlights} />
          <Section title="Best for" items={[service.bestFor]} />
          <Section title="Process" items={service.process} />
          <Section title="Products" items={service.products} />
          <Section title="Tools" items={service.tools} />
          <Section title="Equipment" items={service.equipment} />
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5">
      <h4 className="text-sm font-semibold text-[var(--brand-primary)] mb-2">{title}</h4>
      <ul className="space-y-1 text-[var(--brand-secondary)]">
        {items.map((it) => (
          <li key={it} className="text-sm leading-relaxed">{it}</li>
        ))}
      </ul>
    </div>
  );
}