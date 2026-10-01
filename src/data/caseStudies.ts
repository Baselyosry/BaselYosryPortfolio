export type CaseStudy = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  role?: string;
  overview?: string;
  problem?: string;
  architecture?: string;
  contributions?: string[];
  challenges?: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tennisfinder",
    title: "TennisFinder",
    kind: "Graduation project",
    year: "2026",
    overview:
      "A multi-sided marketplace for tennis players, court owners, and academies, covering court discovery, player matchmaking, tournaments, and AI-enhanced insights.",
    architecture:
      "Led a backend migration from Convex to a custom Node.js and PostgreSQL stack within a one-week window to meet the graduation deadline.",
    contributions: [
      "Built geospatial court discovery and conflict-aware reservation scheduling.",
      "Built AI-driven features for opponent matchmaking, marketplace pricing, and demand forecasting.",
      "Integrated Clerk for role-based access control and built an admin dashboard for court approval, invoice tracking, and reporting.",
    ],
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
    ],
  },
];
