import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-6xl scroll-mt-16 px-[clamp(1.25rem,4vw,2rem)] py-18 md:py-28"
    >
      <div className="grid gap-8 md:grid-cols-12 md:gap-12">
        <h2 id={`${id}-title`} className="text-section text-text md:col-span-3">
          {title}
        </h2>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
