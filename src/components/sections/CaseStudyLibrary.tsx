import { CaseStudyArticle } from "@/components/sections/CaseStudyArticle";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudyLibrary() {
  return (
    <div className="case-study-inline">
      <section
        aria-label="Case studies"
        className="mx-auto w-full max-w-6xl px-[clamp(1.25rem,4vw,2rem)] py-18 md:py-28"
      >
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="hidden md:col-span-3 md:block" />
          <div className="flex flex-col md:col-span-9">
            {caseStudies.map((study, index) => (
              <div
                key={study.slug}
                className={
                  index > 0 ? "mt-16 border-t border-border pt-16" : undefined
                }
              >
                <CaseStudyArticle study={study} articleId={study.slug} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
