import { Section } from "@/components/sections/Section";
import { TechLogo } from "@/components/sections/TechLogo";
import { skillGroups } from "@/data/skills";
import { techIconPaths } from "@/lib/tech-icons";

export function TechStack() {
  return (
    <Section id="stack" title="Technical stack">
      <ul className="flex flex-col gap-6">
        {skillGroups.map((group) => (
          <li
            key={group.group}
            className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <span className="text-small text-muted">{group.group}</span>
            <ul className="flex flex-wrap items-center gap-4">
              {group.items.map((item) => (
                <li key={item}>
                  <TechLogo name={item} path={techIconPaths[item]} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
