import Link from "next/link";
import { Container } from "./Container";
import { CONTACT } from "@/content/site";
import { DownloadIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-sand/70 bg-paper">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Link
            href="/"
            className="font-display text-3xl font-semibold tracking-tight"
          >
            Tony<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-xs font-grotesk text-[0.8rem] uppercase tracking-[0.12em] text-stone">
            {CONTACT.name} — {CONTACT.role}. {CONTACT.availability}.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-grotesk text-[0.8rem] uppercase tracking-[0.12em] text-ink-soft">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
            Email
          </a>
          {CONTACT.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
          <a
            href={CONTACT.cvUrl}
            download
            title="Download CV (PDF)"
            className="group inline-flex items-center gap-1.5 hover:text-accent"
          >
            <DownloadIcon className="transition-transform group-hover:translate-y-0.5" />
            CV
            <span className="text-[0.62rem] tracking-[0.12em] opacity-55">PDF</span>
          </a>
          <span className="text-stone">© {CONTACT.year}</span>
        </div>
      </Container>
    </footer>
  );
}
