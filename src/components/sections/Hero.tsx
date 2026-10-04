import { Terminal } from "@/components/terminal/Terminal";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-6xl scroll-mt-16 px-[clamp(1.25rem,4vw,2rem)] pb-18 pt-16 md:pb-28 md:pt-24"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="flex min-w-0 flex-col items-start gap-6 md:col-span-6">
          <h1 id="hero-title" className="text-hero text-text">
            {profile.hero.heading}
          </h1>
          <p className="max-w-[62ch] text-body text-text">{profile.hero.intro}</p>
          <p className="text-small text-muted">
            {profile.hero.technologies.join(", ")}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-control border border-border px-4 py-2 text-small text-text transition-colors duration-[120ms] hover:border-accent hover:text-accent"
            >
              View work
            </a>
            <a
              href={profile.cvPath}
              download
              className="rounded-control border border-border px-4 py-2 text-small text-text transition-colors duration-[120ms] hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="min-w-0 md:col-span-6">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
