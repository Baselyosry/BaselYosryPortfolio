import type { ReactNode } from "react";

type CaseStudyTriggerProps = {
  slug: string;
  children: ReactNode;
};

export function CaseStudyTrigger({ slug, children }: CaseStudyTriggerProps) {
  return (
    <a
      href={`#${slug}`}
      className="w-fit text-small text-text underline decoration-border underline-offset-4 transition-colors duration-[120ms] hover:text-accent hover:decoration-accent"
    >
      {children}
    </a>
  );
}
