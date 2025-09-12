import { motion } from "framer-motion";

type Props = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  duration: string;
  bestFor: string;
  onClick: () => void;
};

export default function ServiceCard({
  id, title, description, highlights, duration, bestFor, onClick
}: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layoutId={`card-${id}`}
      className="group text-left w-full rounded-2xl border border-border bg-card/60 hover:bg-card transition-colors p-5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-pop)]"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="flex items-start justify-between gap-4">
        <motion.h3 layoutId={`card-title-${id}`} className="text-xl font-bold text-[var(--brand-primary)]">
          {title}
        </motion.h3>
        <motion.span layoutId={`card-duration-${id}`} className="text-sm text-[var(--brand-secondary)] whitespace-nowrap">
          {duration}
        </motion.span>
      </div>

      <motion.p layoutId={`card-desc-${id}`} className="mt-2 text-[var(--brand-secondary)]">
        {description}
      </motion.p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {highlights.slice(0, 3).map((h) => (
          <li key={h} className="text-xs px-2 py-1 rounded-full border border-border text-[var(--brand-secondary)]">
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-3 text-xs text-[var(--brand-secondary)]">Best for: {bestFor}</div>
    </motion.button>
  );
}