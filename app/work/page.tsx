import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected web, brand, campaign, and creative projects by Tony Syme — B2B marketing across trade, live events, education, and retail.",
};

export default function WorkPage() {
  const projects = getProjects();

  return (
    <>
      <section className="border-b border-ink py-16 md:py-24">
        <Container>
          <p className="font-grotesk text-[0.8rem] uppercase tracking-[0.2em] text-stone">
            Selected work — {String(projects.length).padStart(2, "0")}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
            Work that
            <br />
            earned its <em className="italic text-gradient">keep.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Web, brand, campaigns, and creative — for trade, live events,
            education, and retail clients across Scotland. Each one measured by
            what it actually moved.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Contact />
    </>
  );
}
