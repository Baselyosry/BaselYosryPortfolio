export type SkillGroup = {
  group: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    group: "Backend",
    items: [
      "ASP.NET Core",
      "ASP.NET MVC",
      ".NET",
      "Node.js",
      "Express",
      "Hono",
      "Clerk",
      "Better Auth",
    ],
  },
  {
    group: "Frontend",
    items: ["Angular", "Next.js"],
  },
  {
    group: "Databases and ORM",
    items: [
      "PostgreSQL",
      "SQL Server",
      "Prisma",
      "DrizzleORM",
      "EF Core",
      "Convex",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Visual Studio",
      "Rider",
      "Cursor",
      "Claude Code",
    ],
  },
];
