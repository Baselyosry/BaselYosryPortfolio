import { Section } from "@/components/sections/Section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="flex max-w-[62ch] flex-col gap-4">
        {profile.about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-body text-text">
            {paragraph}
          </p>
        ))}
      </div>
      <p className="mt-6 text-small text-muted">{profile.about.education}</p>
    </Section>
  );
}
