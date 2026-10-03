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
      "Graduation project. A tennis platform API for court discovery and booking, player matchmaking, tournaments, and a used-equipment marketplace. A layered Node.js and TypeScript service over PostgreSQL with Prisma, integrating an external AI service for recommendations and price prediction.",
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Supabase",
    ],
    featured: true,
  },
  {
    slug: "mpc",
    title: "MPC (Makkah Park Clinic)",
    kind: "Freelance project",
    year: "2026",
    description:
      "Freelance project. A bilingual Arabic and English clinic platform with a content-managed catalog, appointment lead capture, and an offers and courses store with cart and checkout. Built as an edge monorepo with React and TanStack Start, Hono and oRPC on Cloudflare Workers, and Drizzle over Cloudflare D1.",
    stack: [
      "React",
      "TanStack Start",
      "Hono",
      "TypeScript",
      "Cloudflare Workers",
      "DrizzleORM",
      "Cloudflare D1",
      "Clerk",
    ],
    featured: false,
  },
  {
    slug: "fhtc",
    title: "FHTC",
    kind: "Freelance project",
    year: "2026",
    description:
      "Freelance project. A bilingual Arabic and English licensing portal that takes a health practitioner from application and document review through payment to document issuance and renewal. The backend is Convex with Better Auth, with Moyasar payments, Qoyod accounting sync, and automated email.",
    stack: ["Convex", "TypeScript", "Better Auth", "React", "TanStack Start", "Moyasar"],
    featured: false,
  },
  {
    slug: "klineck",
    title: "Klineck",
    kind: "Collaborative freelance project",
    year: "2026",
    description:
      "Collaborative freelance project. A multi-clinic practice management platform covering patients, visits and queue, prescriptions, diagnoses, invoicing, and subscriptions. Multi-clinic isolation runs on Better Auth organizations with clinic-scoped queries over PostgreSQL and Drizzle.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "DrizzleORM", "Better Auth"],
    featured: false,
  },
];
