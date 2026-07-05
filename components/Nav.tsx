import Link from "next/link";
import { Container } from "./Container";
import { CONTACT } from "@/content/site";
import {
  WorkIcon,
  ExperienceIcon,
  AboutIcon,
  DownloadIcon,
  ArrowIcon,
} from "./icons";

const links = [
  { href: "/work", label: "Work", Icon: WorkIcon },
  { href: "/#experience", label: "Experience", Icon: ExperienceIcon },
  { href: "/#about", label: "About", Icon: AboutIcon },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/70 bg-paper/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-tight"
          aria-label={`${CONTACT.name} — home`}
        >
          Tony<span className="text-accent">.</span>
        </Link>

        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 font-grotesk text-[0.78rem] uppercase tracking-[0.14em] text-ink-soft md:flex">
            {links.map(({ href, label, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  <Icon className="opacity-70" />
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={CONTACT.cvUrl}
                download
                title="Download CV (PDF)"
                aria-label={`Download ${CONTACT.name} CV — PDF`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-sand px-3 py-1.5 text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <DownloadIcon className="transition-transform group-hover:translate-y-0.5" />
                CV
                <span className="text-[0.6rem] tracking-[0.12em] opacity-55">PDF</span>
              </a>
            </li>
          </ul>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 font-grotesk text-[0.78rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
          >
            Let&rsquo;s talk
            <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </Container>
    </header>
  );
}
