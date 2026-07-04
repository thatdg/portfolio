import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { CONTACT } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-coral text-ink">
      <Container className="py-20 md:py-32">
        <Reveal>
          <p className="font-grotesk text-[0.8rem] uppercase tracking-[0.2em] text-ink/70">
            Contact — {CONTACT.availability}
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Let&rsquo;s make something worth remembering.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10 border-t border-ink/25 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-grotesk text-[0.72rem] uppercase tracking-[0.16em] text-ink/70">
              Email
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-2 inline-block font-display text-3xl font-semibold underline decoration-ink/30 decoration-2 underline-offset-[6px] transition-colors hover:decoration-ink md:text-5xl"
            >
              {CONTACT.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 font-grotesk text-[0.82rem] uppercase tracking-[0.14em]">
            {CONTACT.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
