import { Section } from "@/components/sections/Section";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <Section id="projects" title="Selected work">
      <ul className="flex flex-col">
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className={index > 0 ? "mt-8 border-t border-border pt-8" : undefined}
          >
            <div className="grid grid-cols-[3rem_1fr] gap-x-4 sm:grid-cols-[4rem_1fr] sm:gap-x-6">
              <div className="pt-1 text-small tabular-nums text-muted">
                {project.year}
              </div>
              <div className="flex flex-col gap-3">
                <h3
                  className={
                    project.featured ? "text-section text-text" : "text-project text-text"
                  }
                >
                  {project.title}
                </h3>
                <p className="max-w-[62ch] text-body text-text">
                  {project.description}
                </p>
                <p className="font-mono text-mono text-muted">
                  {project.stack.join(", ")}
                </p>
                <button
                  type="button"
                  className="w-fit text-small text-text underline decoration-border underline-offset-4 transition-colors duration-[120ms] hover:text-accent hover:decoration-accent"
                >
                  Read the case study
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
