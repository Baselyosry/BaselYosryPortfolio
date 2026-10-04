import type { ReactNode } from "react";

import { TechLogo } from "@/components/sections/TechLogo";
import { type CaseStudy, type CaseStudyHighlight } from "@/data/caseStudies";
import { techIconPaths } from "@/lib/tech-icons";

function CaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h3 className="text-small font-semibold text-text">{title}</h3>
      <div className="mt-3 flex flex-col gap-3">{children}</div>
    </section>
  );
}

function Paragraphs({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line) => (
        <p key={line} className="max-w-[62ch] text-body text-text">
          {line}
        </p>
      ))}
    </>
  );
}

function HighlightList({ highlights }: { highlights: CaseStudyHighlight[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {highlights.map((highlight) => (
        <li key={highlight.title}>
          <p className="text-body font-semibold text-text">{highlight.title}</p>
          <p className="mt-1 max-w-[62ch] text-body text-muted">
            {highlight.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

type CaseStudyArticleProps = {
  study: CaseStudy;
  articleId?: string;
  titleId?: string;
};

export function CaseStudyArticle({
  study,
  articleId,
  titleId,
}: CaseStudyArticleProps) {
  return (
    <article id={articleId} className="mx-auto max-w-[62ch] scroll-mt-20">
      <header>
        <h2 id={titleId} className="text-section text-text">
          {study.title}
        </h2>
        <p className="mt-1 text-small text-muted">
          {[study.kind, study.year, study.role].filter(Boolean).join(" · ")}
        </p>
      </header>

      {study.overview ? (
        <CaseSection title="Overview">
          <p className="text-body text-text">{study.overview}</p>
        </CaseSection>
      ) : null}

      {study.problem ? (
        <CaseSection title="The problem">
          <p className="text-body text-text">{study.problem}</p>
        </CaseSection>
      ) : null}

      {study.architecture ? (
        <CaseSection title="System architecture">
          <p className="text-body text-text">{study.architecture}</p>
        </CaseSection>
      ) : null}

      {study.highlights?.length ? (
        <CaseSection title="Engineering highlights">
          <HighlightList highlights={study.highlights} />
        </CaseSection>
      ) : null}

      {study.contributions?.length ? (
        <CaseSection title="What I built">
          <Paragraphs lines={study.contributions} />
          {study.collaboration ? (
            <p className="max-w-[62ch] text-small text-muted">
              {study.collaboration}
            </p>
          ) : null}
        </CaseSection>
      ) : null}

      {study.challenges?.length ? (
        <CaseSection title="Challenges and how they were solved">
          <Paragraphs lines={study.challenges} />
        </CaseSection>
      ) : null}

      {study.decisions?.length ? (
        <CaseSection title="Technical decisions">
          <Paragraphs lines={study.decisions} />
        </CaseSection>
      ) : null}

      <CaseSection title="Stack">
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {study.stack.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 text-small text-muted"
            >
              <TechLogo name={item} path={techIconPaths[item]} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CaseSection>

      {study.status ? (
        <CaseSection title="Project status">
          <p className="text-body text-text">{study.status}</p>
        </CaseSection>
      ) : null}

      {study.links?.length ? (
        <CaseSection title="Links">
          <ul className="flex flex-col gap-2">
            {study.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-body text-text underline decoration-border underline-offset-4 transition-colors duration-[120ms] hover:text-accent hover:decoration-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </CaseSection>
      ) : null}
    </article>
  );
}
