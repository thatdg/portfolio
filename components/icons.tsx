import type { ReactNode } from "react";

/**
 * Tiny inline line-icons (no dependency, safe in server components).
 * Colour is inherited via `currentColor`, so they pick up `hover:text-accent`
 * from their link automatically.
 */
function Icon({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-[15px] w-[15px] shrink-0 ${className}`}
    >
      {children}
    </svg>
  );
}

/** Work — the portfolio grid. */
export function WorkIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </Icon>
  );
}

/** Experience — career / briefcase. */
export function ExperienceIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M8 7.5V6a2.5 2.5 0 0 1 2.5-2.5h3A2.5 2.5 0 0 1 16 6v1.5" />
      <path d="M3 12.5h18" />
    </Icon>
  );
}

/** About — person. */
export function AboutIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </Icon>
  );
}

/** CV — download (arrow into a tray). */
export function DownloadIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M12 3.5v10.5" />
      <path d="M7.5 9.5 12 14l4.5-4.5" />
      <path d="M4.5 19.5h15" />
    </Icon>
  );
}

/** CTA — arrow. */
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </Icon>
  );
}
