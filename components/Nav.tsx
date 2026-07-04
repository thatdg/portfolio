import Link from "next/link";
import { Container } from "./Container";

const links = [
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/70 bg-paper/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-tight"
          aria-label="Tony — home"
        >
          Tony<span className="text-coral">.</span>
        </Link>

        <nav className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 font-grotesk text-[0.78rem] uppercase tracking-[0.14em] text-ink-soft md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-coral">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-5 py-2 font-grotesk text-[0.78rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-coral"
          >
            Let&rsquo;s talk
          </Link>
        </nav>
      </Container>
    </header>
  );
}
