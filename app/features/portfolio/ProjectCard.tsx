import type { Project } from "./data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border p-4">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm opacity-80">{project.desc}</p>
      {project.href && (
        <a className="mt-3 inline-block underline text-sm" href={project.href} target="_blank" rel="noreferrer">
          링크 열기
        </a>
      )}
    </article>
  );
}