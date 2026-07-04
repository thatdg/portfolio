import { Container } from "./Container";
import { Reveal } from "./Reveal";

const capabilities = [
  "Brand strategy",
  "Campaign & content",
  "Identity & art direction",
  "Web design & build",
  "Social & community",
  "Naming & voice",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-ink py-20 md:py-28">
      <Container>
        <p className="font-grotesk text-[0.8rem] uppercase tracking-[0.2em] text-stone">
          About
        </p>

        <div className="mt-8 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Strategy first.
              <br />
              Then the <em className="italic text-coral">fun</em> part.
            </h2>
          </Reveal>

          <Reveal delay={120} className="max-w-xl">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                For a decade I&rsquo;ve helped brands find the one true thing
                they can say — then say it louder than their budget should
                allow. I work across the whole arc: positioning, campaign,
                identity, and the site it all lands on.
              </p>
              <p>
                Before going independent I led creative for agencies and
                in-house teams. I still believe the best marketing doesn&rsquo;t
                feel like marketing — it feels like something you&rsquo;d tell a
                friend.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-sand pt-6 font-grotesk text-sm text-ink-soft">
              {capabilities.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="text-coral">/</span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
