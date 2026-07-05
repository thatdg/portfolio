"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

interface NumberTickerProps extends React.ComponentPropsWithoutRef<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
}

/**
 * Magic UI — NumberTicker. Springs a number from `startValue` to `value` the
 * first time it scrolls into view. SSR/no-JS render the final value, so the
 * real number is always in the HTML; the count-up is a client-only flourish
 * and is skipped entirely under prefers-reduced-motion.
 */
export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const motionValue = useMotionValue(direction === "down" ? value : startValue);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const format = (n: number) =>
    Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(n.toFixed(decimalPlaces)));

  // On the client (motion allowed), reset to the start value so it can count up.
  useEffect(() => {
    if (reduced || !ref.current) return;
    ref.current.textContent = format(direction === "down" ? value : startValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    if (reduced || !isInView) return;
    const t = setTimeout(() => {
      motionValue.set(direction === "down" ? startValue : value);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [motionValue, isInView, delay, value, direction, startValue, reduced]);

  useEffect(() => {
    if (reduced) return;
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = format(latest);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [springValue, decimalPlaces, reduced]);

  return (
    <span ref={ref} className={cn("inline-block tabular-nums", className)} {...props}>
      {format(direction === "down" ? startValue : value)}
    </span>
  );
}
