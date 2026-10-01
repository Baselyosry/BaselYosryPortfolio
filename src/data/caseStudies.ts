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
    role: "Backend lead, team lead, and system architect",
    overview:
      "A multi-sided marketplace for tennis players, court owners, and academies, covering court discovery, player matchmaking, tournaments, and AI-enhanced insights. Built as a cross-platform web and mobile system.",
    problem:
      "Players in Egypt had no unified place to find partners, courts, and equipment, and relied on personal networks and social media groups. Existing apps focused on court booking, club management, or padel matchmaking, and did not cover skill-based tennis matchmaking, location-aware recommendations, or an equipment marketplace. Court owners lacked data on court use and player demand.",
    architecture:
      "Distributed and service-oriented. A Node.js, Express, and TypeScript backend serves REST APIs, with Prisma over PostgreSQL and PostGIS for geospatial queries. Socket.io handles real-time updates for bookings, match invitations, tournaments, and notifications. Clerk covers authentication and role-based access control. AI runs in separate Python microservices, and Prometheus and Grafana cover monitoring. The modules are matchmaking, court booking, a marketplace, tournaments, notifications, and admin and court owner dashboards.",
    contributions: [
      "Led the backend, the team, and the system design.",
      "Built geospatial court discovery and conflict-aware reservation scheduling.",
      "Built player matchmaking and the AI-driven features for opponent matching, marketplace pricing, and demand forecasting.",
      "Integrated Clerk for role-based access control and built the admin and court owner dashboards for court approval, invoice tracking, and reporting.",
    ],
    challenges: [
      "The team did not understand Convex, so I led a migration from Convex to a Node.js and PostgreSQL stack and rewrote the backend within a one-week window to keep the graduation deadline.",
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
