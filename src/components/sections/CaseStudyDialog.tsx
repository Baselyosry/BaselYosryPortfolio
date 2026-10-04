"use client";

import { useEffect, useRef, useState } from "react";

import { CaseStudyArticle } from "@/components/sections/CaseStudyArticle";
import { caseStudies } from "@/data/caseStudies";

function slugFromLocation(): string | null {
  const hash = window.location.hash.replace(/^#/, "");
  return caseStudies.some((study) => study.slug === hash) ? hash : null;
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
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
    }
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
              onClick={handleClose}
              className="rounded-control border border-border px-3 py-1.5 text-small text-text transition-colors duration-[120ms] hover:border-accent hover:text-accent"
            >
              Close
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-8">
            <CaseStudyArticle study={study} titleId={`${study.slug}-case-title`} />
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
