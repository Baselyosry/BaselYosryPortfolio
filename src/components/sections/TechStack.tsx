import {
  siAngular,
  siBetterauth,
  siClaudecode,
  siClerk,
  siConvex,
  siCplusplus,
  siCursor,
  siDotnet,
  siDrizzle,
  siExpress,
  siGit,
  siGithub,
  siHono,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostman,
  siPostgresql,
  siPrisma,
  siPython,
  siRider,
  siTypescript,
} from "simple-icons";

import { Section } from "@/components/sections/Section";
import { TechLogo } from "@/components/sections/TechLogo";
import { skillGroups } from "@/data/skills";

const iconPaths: Record<string, string> = {
  ".NET": siDotnet.path,
  TypeScript: siTypescript.path,
  JavaScript: siJavascript.path,
  Python: siPython.path,
  "C++": siCplusplus.path,
  "Node.js": siNodedotjs.path,
  Express: siExpress.path,
  Hono: siHono.path,
  Clerk: siClerk.path,
  "Better Auth": siBetterauth.path,
  Angular: siAngular.path,
  "Next.js": siNextdotjs.path,
  PostgreSQL: siPostgresql.path,
  Prisma: siPrisma.path,
  DrizzleORM: siDrizzle.path,
  Convex: siConvex.path,
  Git: siGit.path,
  GitHub: siGithub.path,
  Postman: siPostman.path,
  Rider: siRider.path,
  Cursor: siCursor.path,
  "Claude Code": siClaudecode.path,
};

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
                  <TechLogo name={item} path={iconPaths[item]} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
