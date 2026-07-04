import { Hero } from "@/components/Hero";
import { WorkIndex } from "@/components/WorkIndex";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const featured = getProjects().slice(0, 4);

  return (
    <>
      <Hero />
      <WorkIndex projects={featured} showViewAll />
      <About />
      <Contact />
    </>
  );
}
