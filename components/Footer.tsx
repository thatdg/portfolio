import Link from "next/link";
import { Container } from "./Container";
import { CONTACT } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-sand/70 bg-paper">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Link
            href="/"
            className="font-display text-3xl font-semibold tracking-tight"
          >
            Tony<span className="text-coral">.</span>
          </Link>
          <p className="mt-3 max-w-xs font-grotesk text-[0.8rem] uppercase tracking-[0.12em] text-stone">
            Marketing &amp; design — campaigns, brands &amp; websites.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-grotesk text-[0.8rem] uppercase tracking-[0.12em] text-ink-soft">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-coral">
            Email
          </a>
          {CONTACT.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="hover:text-coral"
              target="_blank"
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
          <span className="text-stone">© {CONTACT.year}</span>
        </div>
      </Container>
    </footer>
  );
}
