import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Marquee } from "./magicui/marquee";
import { SKILLS, TOOLS, EDUCATION } from "@/content/cv";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-ink py-20 md:py-28">
      <Container>
        <div className="flex items-baseline gap-4 border-b border-sand pb-5">
          <h2 className="font-display text-4xl font-semibold md:text-6xl">
            Capabilities
          </h2>
          <span className="font-grotesk text-sm text-stone">
            Strategy to shipped
          </span>
        </div>

        {/* skill groups */}
        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {SKILLS.map((group, i) => (
            <Reveal key={group.name} delay={(i % 2) * 80}>
              <div>
                <h3 className="flex items-center gap-3 font-grotesk text-[0.8rem] uppercase tracking-[0.16em] text-ink">
                  <span className="h-px w-8 bg-accent" />
                  {group.name}
                </h3>
                <ul className="mt-4 space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[0.95rem] leading-relaxed text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* tools — a slow marquee of the stack (Magic UI). */}
        <div className="mt-16 border-t border-sand pt-8">
          <p className="font-grotesk text-[0.72rem] uppercase tracking-[0.16em] text-stone">
            Tools &amp; platforms
          </p>
          <div className="relative mt-5">
            <Marquee pauseOnHover className="[--duration:38s] [--gap:0.75rem]">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="whitespace-nowrap border border-sand px-3 py-1.5 font-grotesk text-[0.8rem] text-ink-soft"
                >
                  {tool}
                </span>
              ))}
            </Marquee>
            {/* soft paper fades at the edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent" />
          </div>
        </div>

        {/* education & certifications */}
        <div className="mt-12 border-t border-sand pt-8">
          <p className="font-grotesk text-[0.72rem] uppercase tracking-[0.16em] text-stone">
            Education &amp; certifications
          </p>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {EDUCATION.map((item) => (
              <li key={item} className="flex gap-2 text-[0.95rem] text-ink-soft">
                <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
