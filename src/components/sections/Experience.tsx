import { Section } from "@/components/sections/Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="border-l border-border">
        {experience.map((entry) => (
          <li key={entry.organization} className="pb-10 pl-6 last:pb-0">
            <h3 className="text-project text-text">{entry.organization}</h3>
            <p className="mt-1 text-small text-muted">
              {[entry.role, entry.period, entry.location]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <div className="mt-3 flex max-w-[62ch] flex-col gap-2">
              {entry.summary.map((sentence) => (
                <p key={sentence} className="text-body text-text">
                  {sentence}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
