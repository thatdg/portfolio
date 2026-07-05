import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { CONTACT } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-accent text-paper">
      <Container className="py-20 md:py-32">
        <Reveal>
          <p className="font-grotesk text-[0.8rem] uppercase tracking-[0.2em] text-paper/70">
            Contact — {CONTACT.availability}
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Need a marketer who moves the numbers?
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10 border-t border-paper/25 pt-10 md:flex-row md:items-end md:justify-between">
          <div className="space-y-6">
            <div>
              <p className="font-grotesk text-[0.72rem] uppercase tracking-[0.16em] text-paper/70">
                Email
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-2 inline-block font-display text-3xl font-semibold underline decoration-paper/40 decoration-2 underline-offset-[6px] transition-colors hover:decoration-paper md:text-5xl"
              >
                {CONTACT.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-2 font-grotesk text-[0.82rem] uppercase tracking-[0.14em]">
              <span className="text-paper/70">{CONTACT.location}</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <a
              href={CONTACT.cvUrl}
              download
              className="rounded-full bg-paper px-6 py-3 font-grotesk text-[0.8rem] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Download CV
            </a>
            <div className="flex flex-wrap gap-x-8 gap-y-3 font-grotesk text-[0.82rem] uppercase tracking-[0.14em]">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
