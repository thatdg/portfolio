import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { EXPERIENCE } from "@/content/cv";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-ink py-20 md:py-28"
    >
      <Container>
        <div className="flex items-baseline gap-4 border-b border-sand pb-5">
          <h2 className="font-display text-4xl font-semibold md:text-6xl">
            Experience
          </h2>
          <span className="font-grotesk text-sm text-stone">
            Where the numbers came from
          </span>
        </div>

        <ol>
          {EXPERIENCE.map((role, i) => (
            <li key={`${role.org}-${role.period}`}>
              <Reveal delay={i * 50}>
                <div className="grid grid-cols-1 gap-x-10 gap-y-4 border-b border-sand py-8 md:grid-cols-[11rem_1fr]">
                  <div className="font-grotesk text-[0.72rem] uppercase tracking-[0.16em] text-stone">
                    {role.period}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 font-grotesk text-[0.72rem] uppercase tracking-[0.16em] text-accent">
                      {role.org}
                    </p>
                    <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">
                      {role.summary}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {role.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-[0.95rem] leading-relaxed text-ink-soft"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
