import Link from "next/link";
import { Container } from "./Container";
import { CONTACT } from "@/content/site";
import { PROOF } from "@/content/cv";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="pt-14 pb-16 md:pt-20 md:pb-20">
        {/* masthead labels */}
        <div className="rise flex items-center justify-between border-b border-sand pb-5 font-grotesk text-[0.72rem] uppercase tracking-[0.2em] text-stone">
          <span>{CONTACT.role}</span>
          <span>{CONTACT.location}</span>
        </div>

        {/* the coverline */}
        <h1 className="mt-10 font-display font-semibold leading-[0.9] tracking-tight text-[clamp(3rem,11vw,10rem)]">
          <span className="rise block" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
            Marketing that
          </span>
          <span
            className="rise block"
            style={{ "--rise-delay": "180ms" } as React.CSSProperties}
          >
            moves the
          </span>
          <span
            className="rise block"
            style={{ "--rise-delay": "300ms" } as React.CSSProperties}
          >
            <em className="italic text-accent">numbers.</em>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <p
            className="rise max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
            style={{ "--rise-delay": "420ms" } as React.CSSProperties}
          >
            I&rsquo;m {CONTACT.firstName} — a commercially minded B2B marketing
            manager. Five years turning brand, web, and campaigns into
            measurable growth for trade, distribution, and live-events
            businesses across Scotland.
          </p>

          <div
            className="rise flex flex-col items-start gap-5 md:items-end"
            style={{ "--rise-delay": "540ms" } as React.CSSProperties}
          >
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#work"
                className="rounded-full bg-ink px-6 py-3 font-grotesk text-[0.8rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
              >
                View selected work
              </Link>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 font-grotesk text-[0.8rem] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-accent"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
            <p className="font-grotesk text-[0.72rem] uppercase tracking-[0.16em] text-stone">
              <span className="text-accent">&#9679;</span> {CONTACT.availability}
            </p>
          </div>
        </div>

        {/* proof strip — real outcomes, kept to a single editorial line */}
        <dl className="mt-14 grid grid-cols-2 gap-y-6 border-t border-sand pt-8 sm:grid-cols-4">
          {PROOF.map((p) => (
            <div key={p.label} className="flex flex-col">
              <dt className="font-display text-3xl font-semibold text-accent md:text-4xl">
                {p.value}
              </dt>
              <dd className="mt-1 font-grotesk text-[0.7rem] uppercase tracking-[0.14em] text-stone">
                {p.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
