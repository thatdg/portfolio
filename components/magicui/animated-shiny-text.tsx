import type { CSSProperties, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

/**
 * Magic UI — AnimatedShinyText (adapted to the cobalt palette). The text sits
 * in its normal colour; a soft accent band sweeps across it. Pure CSS; the
 * sweep is disabled under prefers-reduced-motion (see globals.css).
 */
export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 80,
  ...props
}: AnimatedShinyTextProps) {
  return (
    <span
      style={{ "--shiny-width": `${shimmerWidth}px` } as CSSProperties}
      className={cn(
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%]",
        // base colour is semi-transparent so the swept band shows THROUGH it
        "text-stone/70",
        // the moving band: a cobalt sweep
        "bg-gradient-to-r from-transparent via-accent via-50% to-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
