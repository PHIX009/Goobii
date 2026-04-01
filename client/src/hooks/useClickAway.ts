import { useEffect } from "react";

export default function useClickAway<T extends HTMLElement>(
  ref: React.RefObject<T>,
  onAway: () => void
) {
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) onAway();
    };

    // Support both mouse and touch (mobile)
    document.addEventListener("mousedown", handler, { passive: true });
    document.addEventListener("touchstart", handler, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handler as EventListener);
      document.removeEventListener("touchstart", handler as EventListener);
    };
  }, [ref, onAway]);
}