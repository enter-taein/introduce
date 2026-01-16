import ProjectCard from "../features/portfolio/ProjectCard";
import { projects } from "../features/portfolio/data";

export default function Projects() {
  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}