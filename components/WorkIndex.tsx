import Link from "next/link";
import type { Project } from "@/content/projects";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

/**
 * The signature device: selected work as an editorial contents page.
 * Each row is a project; the coral figure on the right is its headline
 * result — because marketing work is remembered by what it moved.
 */
export function WorkIndex({
  projects,
  heading = "Selected work",
  showViewAll = false,
}: {
  projects: Project[];
  heading?: string;
  showViewAll?: boolean;
}) {
  return (
    <section id="work" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <div className="flex items-end justify-between border-b border-ink pb-5">
          <div className="flex items-baseline gap-4">
            <h2 className="font-display text-4xl font-semibold md:text-6xl">
              {heading}
            </h2>
            <span className="font-grotesk text-sm text-stone">
              ({String(projects.length).padStart(2, "0")})
            </span>
          </div>
          {showViewAll && (
            <Link
              href="/work"
              className="group hidden items-center gap-2 font-grotesk text-[0.8rem] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-coral sm:inline-flex"
            >
              All work
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          )}
        </div>

        <ol>
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 60}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group grid grid-cols-1 gap-x-6 gap-y-3 border-b border-sand py-7 transition-colors hover:bg-paper-2 md:grid-cols-[3.5rem_1fr_auto] md:items-center md:py-8"
                >
                  {/* index */}
                  <span className="font-grotesk text-sm text-stone transition-colors group-hover:text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* title + summary */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
                        {p.title}
                      </h3>
                      <span
                        className="translate-x-[-6px] text-coral opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        &#8599;
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-lg font-grotesk text-[0.7rem] uppercase tracking-[0.14em] text-stone">
                      {p.client} — {p.category} — {p.year}
                    </p>
                  </div>

                  {/* headline metric */}
                  <div className="md:text-right">
                    <div className="font-display text-3xl font-semibold text-coral md:text-4xl">
                      {p.headlineMetric.value}
                    </div>
                    <div className="font-grotesk text-[0.7rem] uppercase tracking-[0.14em] text-stone">
                      {p.headlineMetric.label}
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>

        {showViewAll && (
          <div className="mt-8 sm:hidden">
            <Link
              href="/work"
              className="font-grotesk text-[0.8rem] uppercase tracking-[0.14em] text-coral"
            >
              All work &rarr;
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
