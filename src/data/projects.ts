export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  description: string;
  stack: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "tennisfinder",
    title: "TennisFinder",
    kind: "Graduation project",
    year: "2026",
    description:
      "Graduation project. A multi-sided marketplace for tennis players, court owners, and academies, covering court discovery, player matchmaking, tournaments, and AI-enhanced insights. Includes geospatial court discovery, conflict-aware reservation scheduling, and an admin dashboard.",
    stack: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Clerk"],
    featured: true,
  },
  {
    slug: "mpc",
    title: "MPC (Makkah Park Clinic)",
    kind: "Freelance project",
    year: "2026",
    description:
      "Freelance project. A bilingual Arabic and English healthcare platform with patient records, visit history, appointment scheduling with real-time availability, payments, and automated invoicing.",
    stack: ["Hono", "TypeScript", "PostgreSQL", "DrizzleORM"],
    featured: false,
  },
  {
    slug: "fhtc",
    title: "FHTC",
    kind: "Freelance project",
    year: "2026",
    description:
      "Freelance project. An academic supervision platform automating student training lifecycles, from application submission to payment processing, with a multi-stage workflow engine, payments, and support tickets.",
    stack: ["Convex", "TypeScript", "Better Auth", "PostgreSQL"],
    featured: false,
  },
  {
    slug: "klineck",
    title: "Klineck",
    kind: "Collaborative freelance project",
    year: "2026",
    description:
      "Collaborative freelance project. A SaaS clinic management platform with multi-clinic isolation and role-based access, prescriptions, and invoicing.",
    stack: ["Next.js", "PostgreSQL", "DrizzleORM"],
    featured: false,
  },
];
