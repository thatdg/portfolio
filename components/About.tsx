import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { CONTACT } from "@/content/site";
import { BIO } from "@/content/cv";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-ink py-20 md:py-28">
      <Container>
        <p className="font-grotesk text-[0.8rem] uppercase tracking-[0.2em] text-stone">
          About
        </p>

        <div className="mt-8 grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/tony.png"
                  alt={`${CONTACT.name}, ${CONTACT.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute right-5 top-5 h-1 w-10 bg-accent" />
              </div>
              <figcaption className="mt-3 font-grotesk text-[0.72rem] uppercase tracking-[0.14em] text-stone">
                {CONTACT.name} — {CONTACT.location}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="max-w-xl">
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Marketing with an <em className="italic text-accent">owner&rsquo;s</em>{" "}
              eye.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              {BIO.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
