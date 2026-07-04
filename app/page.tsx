import { Hero } from "@/components/Hero";
import { WorkIndex } from "@/components/WorkIndex";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { getProjectBySlug } from "@/lib/projects";
import type { Project } from "@/content/projects";

// Curated home reel — led by the projects with the clearest outcomes.
const FEATURED = [
  "the-attic",
  "heatplan-scotland",
  "chromebook-roadshow",
  "kyle-falconer",
  "club-one-fitness",
  "heatmasters",
];

export default function Home() {
  const featured = FEATURED.map(getProjectBySlug).filter(
    (p): p is Project => Boolean(p),
  );

  return (
    <>
      <Hero />
      <WorkIndex projects={featured} showViewAll />
      <Experience />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
