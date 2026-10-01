"use client";

import type { ReactNode } from "react";

type CaseStudyTriggerProps = {
  slug: string;
  children: ReactNode;
};

export function CaseStudyTrigger({ slug, children }: CaseStudyTriggerProps) {
  const open = () => {
    const hash = `#${slug}`;
    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <button
      type="button"
      onClick={open}
      className="w-fit text-small text-text underline decoration-border underline-offset-4 transition-colors duration-[120ms] hover:text-accent hover:decoration-accent"
    >
      {children}
    </button>
  );
}
