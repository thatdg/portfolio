import Link from "next/link";
import type { Project } from "@/content/projects";
import { CoverBlock } from "./CoverBlock";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="overflow-hidden">
        <CoverBlock
          project={project}
          className="aspect-[5/4] w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl font-semibold leading-tight transition-colors group-hover:text-accent md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 font-grotesk text-[0.7rem] uppercase tracking-[0.14em] text-stone">
            {project.client} — {project.category} — {project.year}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <div className="font-display text-2xl font-semibold text-accent">
            {project.headlineMetric.value}
          </div>
          <div className="font-grotesk text-[0.66rem] uppercase tracking-[0.12em] text-stone">
            {project.headlineMetric.label}
          </div>
        </div>
      </div>

      <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
        {project.summary}
      </p>
    </Link>
  );
}
