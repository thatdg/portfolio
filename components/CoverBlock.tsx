import Image from "next/image";
import type { Project } from "@/content/projects";

type CoverProject = Pick<
  Project,
  "title" | "client" | "year" | "category" | "accent" | "coverImage"
>;

/**
 * Project cover. If the project has a real `coverImage` (a file under
 * /public), it renders that; otherwise it generates a poster from the
 * `accent` hex so every project looks intentional before art exists.
 */
export function CoverBlock({
  project,
  className = "",
  titleClassName = "text-3xl md:text-5xl",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  project: CoverProject;
  className?: string;
  titleClassName?: string;
  sizes?: string;
}) {
  if (project.coverImage) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={project.coverImage}
          alt={`${project.title} — ${project.category} project`}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden isolate ${className}`}
      style={{
        background: `linear-gradient(152deg, ${project.accent} 0%, #17130d 118%)`,
      }}
      aria-hidden="true"
    >
      {/* soft light source */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 12% 8%, rgba(255,255,255,0.28), transparent 55%)",
        }}
      />
      {/* faint editorial grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-5 md:p-7 text-paper">
        <div className="flex items-center justify-between font-grotesk text-[0.7rem] uppercase tracking-[0.18em] text-paper/75">
          <span>{project.client}</span>
          <span>{project.year}</span>
        </div>

        <div>
          <span className="inline-block h-1 w-10 bg-accent" />
          <h3
            className={`font-display font-semibold leading-[0.95] mt-3 ${titleClassName}`}
          >
            {project.title}
          </h3>
          <p className="font-grotesk text-[0.7rem] uppercase tracking-[0.18em] text-paper/75 mt-2">
            {project.category}
          </p>
        </div>
      </div>
    </div>
  );
}
