import { projects, type Project } from "@/content/projects";

/** All projects, newest first. */
export function getProjects(): Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

/** A single project by slug, or undefined if it doesn't exist. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Every slug — used for static generation of case-study routes. */
export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/**
 * The project after the given one (wraps around), for "next project" links.
 */
export function getNextProject(slug: string): Project {
  const ordered = getProjects();
  const i = ordered.findIndex((p) => p.slug === slug);
  return ordered[(i + 1) % ordered.length];
}
