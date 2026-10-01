import { Section } from "@/components/sections/Section";
import { profile } from "@/data/profile";

const linkClass =
  "text-body text-text underline decoration-border underline-offset-4 transition-colors duration-[120ms] hover:text-accent hover:decoration-accent";

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "");
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[62ch] text-body text-text">
        Email is the fastest way to reach me.
      </p>
      <ul className="mt-6 flex flex-col gap-2">
        <li>
          <a href={`mailto:${profile.email}`} className={linkClass}>
            {profile.email}
          </a>
        </li>
        <li>
          <a href={profile.github} className={linkClass}>
            {displayUrl(profile.github)}
          </a>
        </li>
        <li>
          <a href={profile.linkedin} className={linkClass}>
            {displayUrl(profile.linkedin)}
          </a>
        </li>
        <li>
          <a href={profile.cvPath} download className={linkClass}>
            Download CV
          </a>
        </li>
      </ul>
    </Section>
  );
}
