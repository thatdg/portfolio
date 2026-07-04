import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CoverBlock } from "@/components/CoverBlock";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import {
  getProjectBySlug,
  getProjectSlugs,
  getNextProject,
} from "@/lib/projects";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category}`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <>
      <article>
        {/* header */}
        <section className="pt-12 md:pt-16">
          <Container>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-grotesk text-[0.78rem] uppercase tracking-[0.14em] text-stone transition-colors hover:text-accent"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                &larr;
              </span>
              All work
            </Link>

            <p className="mt-10 font-grotesk text-[0.8rem] uppercase tracking-[0.2em] text-stone">
              {project.category} — {project.year}
            </p>
            <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft md:text-2xl">
              {project.summary}
            </p>
          </Container>
        </section>

        {/* poster */}
        <section className="mt-12 md:mt-16">
          <Container>
            <CoverBlock
              project={project}
              className="aspect-[3/2] w-full md:aspect-[16/7]"
              titleClassName="text-4xl md:text-7xl"
            />
          </Container>
        </section>

        {/* meta */}
        <section className="mt-14 md:mt-20">
          <Container>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-sand py-8 font-grotesk text-sm md:grid-cols-4">
              <MetaItem label="Client" value={project.client} />
              <MetaItem label="Year" value={String(project.year)} />
              <MetaItem label="Role" value={project.role.join(", ")} />
              <MetaItem label="Services" value={project.tags.join(", ")} />
            </dl>
          </Container>
        </section>

        {/* narrative */}
        <section className="mt-16 md:mt-24">
          <Container>
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <Reveal>
                <NarrativeBlock label="The challenge" body={project.challenge} />
              </Reveal>
              <Reveal delay={120}>
                <NarrativeBlock label="The solution" body={project.solution} />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* results — a real data set, so a metric grid earns its place */}
        <section className="mt-20 border-t border-ink py-16 md:mt-28 md:py-24">
          <Container>
            <p className="font-grotesk text-[0.8rem] uppercase tracking-[0.2em] text-stone">
              Results
            </p>
            <dl className="mt-10 grid gap-y-12 sm:grid-cols-3 sm:gap-x-8">
              {project.results.map((m) => (
                <div key={m.label}>
                  <dt className="font-display text-6xl font-semibold text-accent md:text-7xl">
                    {m.value}
                  </dt>
                  <dd className="mt-2 max-w-[16ch] font-grotesk text-sm uppercase tracking-[0.12em] text-ink-soft">
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* gallery */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              {project.gallery.map((item, i) => (
                <Reveal key={item.caption} delay={i * 80}>
                  <figure>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      {item.src ? (
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(155deg, ${project.accent} 0%, #17130d 125%)`,
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <figcaption className="mt-3 font-grotesk text-[0.72rem] uppercase tracking-[0.14em] text-stone">
                      {item.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* next project */}
        <section className="border-t border-sand">
          <Container>
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col gap-2 py-14 md:flex-row md:items-center md:justify-between md:py-20"
            >
              <div>
                <p className="font-grotesk text-[0.78rem] uppercase tracking-[0.16em] text-stone">
                  Next project
                </p>
                <h2 className="mt-3 font-display text-5xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-7xl">
                  {next.title}
                </h2>
              </div>
              <span className="font-display text-5xl text-accent transition-transform group-hover:translate-x-2 md:text-7xl">
                &rarr;
              </span>
            </Link>
          </Container>
        </section>
      </article>

      <Contact />
    </>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-stone">
        {label}
      </dt>
      <dd className="mt-1.5 text-ink">{value}</dd>
    </div>
  );
}

function NarrativeBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h2 className="flex items-center gap-3 font-grotesk text-[0.8rem] uppercase tracking-[0.16em] text-ink-soft">
        <span className="h-px w-8 bg-accent" />
        {label}
      </h2>
      <p className="mt-5 text-xl leading-relaxed text-ink md:text-2xl">{body}</p>
    </div>
  );
}
