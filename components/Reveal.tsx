"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveals its children once, when they scroll into view. Falls back to
 * always-visible under reduced-motion (handled in globals.css) and if
 * IntersectionObserver is unavailable.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Stagger, in ms. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
