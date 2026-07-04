import Link from "next/link";
import { Container } from "./Container";
import { CONTACT } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="pt-14 pb-16 md:pt-20 md:pb-24">
        {/* cover masthead labels */}
        <div className="rise flex items-center justify-between border-b border-sand pb-5 font-grotesk text-[0.72rem] uppercase tracking-[0.2em] text-stone">
          <span>Portfolio — Vol. 01</span>
          <span className="hidden sm:block">{CONTACT.location}</span>
          <span>Est. 2014</span>
        </div>

        {/* the coverline */}
        <h1 className="mt-10 font-display font-semibold leading-[0.9] tracking-tight text-[clamp(3.25rem,12vw,11rem)]">
          <span className="rise block" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
            Make them
          </span>
          <span
            className="rise block"
            style={{ "--rise-delay": "200ms" } as React.CSSProperties}
          >
            look <em className="italic text-coral">twice.</em>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <p
            className="rise max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
            style={{ "--rise-delay": "340ms" } as React.CSSProperties}
          >
            I&rsquo;m {CONTACT.name.split(" ")[0]} — a creative director building
            marketing campaigns, brand identities, and websites for companies
            that would rather be unforgettable than safe.
          </p>

          <div
            className="rise flex flex-col items-start gap-5 md:items-end"
            style={{ "--rise-delay": "460ms" } as React.CSSProperties}
          >
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#work"
                className="rounded-full bg-ink px-6 py-3 font-grotesk text-[0.8rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-coral"
              >
                See selected work
              </Link>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 font-grotesk text-[0.8rem] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-coral"
              >
                Start a project
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
            <p className="font-grotesk text-[0.72rem] uppercase tracking-[0.16em] text-stone">
              <span className="text-coral">●</span> {CONTACT.availability}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
