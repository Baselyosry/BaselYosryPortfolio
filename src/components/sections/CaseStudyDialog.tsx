"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { TechLogo } from "@/components/sections/TechLogo";
import { caseStudies, type CaseStudyHighlight } from "@/data/caseStudies";
import { techIconPaths } from "@/lib/tech-icons";

function slugFromLocation(): string | null {
  const hash = window.location.hash.replace(/^#/, "");
  return caseStudies.some((study) => study.slug === hash) ? hash : null;
}

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

export function CaseStudyDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [slug, setSlug] = useState<string | null>(null);
  const study = caseStudies.find((item) => item.slug === slug) ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const sync = () => {
      const next = slugFromLocation();
      setSlug(next);
      if (next) {
        if (!dialog.open) {
          dialog.showModal();
        }
      } else if (dialog.open) {
        dialog.close();
      }
    };

    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const original = root.style.overflow;
    root.style.overflow = slug ? "hidden" : original;
    return () => {
      root.style.overflow = original;
    };
  }, [slug]);

  const handleClose = () => {
    setSlug(null);
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      aria-labelledby={study ? `${study.slug}-case-title` : undefined}
      className="m-auto h-dvh max-h-dvh w-full max-w-none rounded-none bg-surface p-0 text-text md:h-auto md:max-h-[85vh] md:max-w-[46rem] md:rounded-panel md:border md:border-border"
    >
      {study ? (
        <div className="flex h-full flex-col">
          <div className="flex justify-end border-b border-border px-6 py-4">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="rounded-control border border-border px-3 py-1.5 text-small text-text transition-colors duration-[120ms] hover:border-accent hover:text-accent"
            >
              Close
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-8">
            <article className="mx-auto max-w-[62ch]">
              <header>
                <h2
                  id={`${study.slug}-case-title`}
                  className="text-section text-text"
                >
                  {study.title}
                </h2>
                <p className="mt-1 text-small text-muted">
                  {[study.kind, study.year, study.role]
                    .filter(Boolean)
                    .join(" · ")}
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
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
