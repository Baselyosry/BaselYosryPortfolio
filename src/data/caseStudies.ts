export type CaseStudyHighlight = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  role?: string;
  overview?: string;
  problem?: string;
  architecture?: string;
  highlights?: CaseStudyHighlight[];
  contributions?: string[];
  collaboration?: string;
  decisions?: string[];
  challenges?: string[];
  stack: string[];
  status?: string;
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
      "A tennis platform backend for Egypt. It covers court discovery and booking, player matchmaking, tournaments, coaching and academies, and a used-equipment marketplace. It is a single Node.js and Express service in TypeScript, using Prisma over PostgreSQL for persistence and Supabase for authentication and file storage, with an external AI service for recommendations and price prediction.",
    problem:
      "Players had no single place to find partners, courts, and equipment, and court owners had no data on court use or demand. The platform had to model many domains over one schema and keep them consistent: bookings, matches, tournaments, coaching sessions, memberships, and a marketplace. Several features depend on recommendations, so the backend also had to consume an AI service without letting its availability or response shape break core requests.",
    architecture:
      "A layered, service-oriented monolith. Requests move through routes, thin controllers, and services, and only services touch Prisma. Cross-cutting middleware covers authentication, role guards, rate limiting, logging, uploads, and a central error mapper. The API exposes roughly 103 route handlers across 20 modules over 25 Prisma models. Supabase verifies JWTs against a remote JWKS, uploads go to Supabase Storage, and AI runs in a separate Python service reached over HTTP.",
    highlights: [
      {
        title: "AI integration layer with graceful degradation",
        body: "A dedicated service encapsulates every AI call, normalizes several possible external response shapes into one internal contract, and returns null on failure so callers fall back to database logic. Matchmaking results are cached for one hour. A failed AI call never fails the request.",
      },
      {
        title: "UUID to internal ID bridge",
        body: "The AI service expects numeric user IDs while the database uses UUIDs. The bridge resolves or indexes the mapping, caches it for 60 seconds, and falls back to a deterministic hash. Syncing runs as a two-step dry run then commit.",
      },
      {
        title: "Interval-overlap scheduling",
        body: "Court bookings and training sessions use half-open interval checks (start before the other end, end after the other start) so adjacent slots do not conflict. Training sessions check both the coach and the player calendars.",
      },
      {
        title: "Layered authorization",
        body: "Supabase JWTs are verified against remote JWKS with an issuer check, then middleware loads the database user and a role guard gates owner and admin routes. Ownership is checked again in each service, for example that a court, item, or tournament belongs to the caller.",
      },
      {
        title: "Atomic demand forecast and seed migration",
        body: "Court demand forecasting writes the forecast row and updates the court price in one Prisma transaction. A large idempotent seed migration bootstraps around 30 Egyptian clubs as venues with generated courts, keeping source notes per record.",
      },
    ],
    contributions: [
      "Designed the layered architecture and the 25-model Prisma schema.",
      "Built the booking, matchmaking, tournament, marketplace, coaching, membership, ranking, and dashboard APIs.",
      "Built the AI integration layer, response normalization, caching, fallbacks, and the UUID to internal ID bridge.",
      "Implemented Supabase JWT authentication, role guards, ownership checks, and Supabase Storage uploads.",
      "Wrote the smoke suite, which covers 106 assertions across the modules, and the seed migration.",
    ],
    collaboration:
      "The backend service is my own work; its 74 commits are under my identity. The AI model runs in a separate Python service that is not part of this repository.",
    decisions: [
      "Layered monolith with thin controllers and all data access in services, so HTTP concerns stay separate from business logic.",
      "External AI over HTTP with an adapter and fallbacks instead of in-process ML, keeping the API resilient and the model independently deployable.",
      "One polymorphic review table over four target types, validated in code instead of with foreign keys. The trade-off is no database-level duplicate prevention, so the duplicate-review guard is currently ineffective.",
      "Offset pagination and an in-memory distance sort for court discovery. This is simple, but it does not scale with data volume, and several hot paths also lack non-unique indexes.",
    ],
    challenges: [
      "The booking overlap check runs before the insert with no transaction, row lock, or exclusion constraint, so two concurrent requests for one slot can both succeed. This is a known limitation, not a solved problem.",
      "Authentication was migrated from Clerk to Supabase, which left a legacy directory and an unused dependency in the tree.",
      "A development authentication bypass is present and is documented for removal before production.",
    ],
    stack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Supabase"],
    status:
      "Functional MVP. A single smoke suite of 106 assertions is documented as passing. There are no unit tests, CI pipeline, Docker image, or deployment configuration, and the API is not production-hardened. The AI model lives in a separate service outside this repository.",
  },
  {
    slug: "mpc",
    title: "MPC (Makkah Park Clinic)",
    kind: "Freelance project",
    year: "2026",
    role: "Full-stack engineer",
    overview:
      "A bilingual Arabic and English clinic platform for Makkah Park Medical Clinics in Saudi Arabia. It combines a content-managed public site, appointment lead capture, and a catalog of offers and courses with a cart, checkout, and payment flow, plus a role-gated admin panel.",
    problem:
      "The clinic needed an Arabic-first web presence it could manage itself, together with online sales for offers and courses. The system had to model bilingual content cleanly, capture appointment leads, and run a storefront on serverless infrastructure with end-to-end type safety between the client and the API.",
    architecture:
      "A pnpm and Nx monorepo split into a React 19 and TanStack Start front end, a Hono server on Cloudflare Workers, a shared API package of oRPC procedures, and a Drizzle schema over Cloudflare D1 (SQLite). One Worker serves typed RPC at /rpc, an OpenAPI reference, and the payment webhook. Clerk authenticates requests and supplies roles, and Alchemy provisions the Workers and database as code.",
    highlights: [
      {
        title: "Type-safe RPC without codegen",
        body: "The React client imports the router type directly and calls procedures through a typed client, so request and response shapes are checked at compile time. The same router is also exposed as an OpenAPI surface.",
      },
      {
        title: "Edge-first serverless architecture",
        body: "A single Hono Worker hosts routing, authentication context, RPC, OpenAPI, and webhooks. Data lives in D1 through Drizzle, and infrastructure is defined in Alchemy.",
      },
      {
        title: "Relational bilingual content",
        body: "Pages, offers, and courses use translation tables with a unique constraint per entity and language, resolved by joins, instead of free-form JSON columns.",
      },
      {
        title: "Payment webhook idempotency",
        body: "Inbound webhooks are deduplicated through a ledger table with a unique event id, then propagate status from payment to order. The pipeline structure is real; the gateway behind it is a mock.",
      },
    ],
    contributions: [
      "Built the application code, Drizzle schema, and oRPC procedure layer.",
      "Built the Clerk-authenticated admin panel for pages, catalog, inquiries, and appointments.",
      "Implemented the bilingual content model and the localized read paths for pages, offers, and courses.",
      "Implemented the cart, checkout, order, and payment-initiation flow and the idempotent webhook handler.",
      "Defined the Cloudflare Workers and D1 infrastructure in Alchemy.",
    ],
    collaboration:
      "This was an independent build. The repository commits were pushed under a shared team account rather than my own.",
    decisions: [
      "oRPC over a hand-written REST client for compile-time type safety, accepting tighter coupling between the front end and the API package.",
      "Cloudflare Workers with D1, accepting SQLite semantics and no row-level security in exchange for edge deployment and low operational overhead.",
      "Translation tables instead of JSON columns, accepting joins on every localized read.",
      "A payment gateway adapter with a mock implementation, so a real provider could replace it without touching the checkout flow. No real provider is wired up.",
    ],
    challenges: [
      "The payment gateway is mocked, so checkout ends at a fake redirect. The webhook pipeline around it is implemented, but the signature check is a placeholder.",
      "The public marketing pages render hardcoded content and do not yet read from the CMS endpoints that exist.",
      "Commerce reads and writes lack ownership checks in places, the cart accepts a client-supplied price, and the webhook does not enforce its signature. These are known gaps.",
      "There are no tests and no CI.",
    ],
    stack: [
      "React",
      "TanStack Start",
      "Hono",
      "oRPC",
      "TypeScript",
      "Cloudflare Workers",
      "DrizzleORM",
      "Cloudflare D1",
      "Clerk",
      "Zod",
    ],
    status:
      "Working prototype. The API, admin panel, and catalog are functional. Payments run against a mock gateway, the public pages are not yet wired to the CMS, and several security gaps remain, so it is not production-hardened.",
  },
  {
    slug: "fhtc",
    title: "FHTC",
    kind: "Freelance project",
    year: "2026",
    role: "Full-stack engineer",
    overview:
      "A bilingual Arabic and English licensing portal for a Saudi health-specialty body. It runs a professional license end to end: an applicant completes a profile, submits an application for a specialty, uploads documents for review, pays a fee or installments, receives an issued document with a validity period, and can renew it in the final 30 days.",
    problem:
      "The licensing workflow is long and stateful: applications move between incomplete, revision, review, payment, and completion states based on document and payment outcomes. Fees can be paid in full or in installments, payments must reconcile with an accounting system, and renewals need reminders. The system had to keep this state consistent while running on a serverless backend.",
    architecture:
      "A pnpm and Turbo monorepo with a React 19 and TanStack Start front end and a Convex backend. Domain logic is split into Convex queries, mutations, actions, and HTTP actions, with a Better Auth component handling authentication and admin roles. Data lives in Convex's document store across roughly 22 tables. Side effects such as email and accounting sync run through the Convex scheduler, and a daily cron drives renewal reminders.",
    highlights: [
      {
        title: "License application state machine",
        body: "A guarded lifecycle spans applications, files, payments, installments, and notifications. Status transitions are driven by document verification and payment outcomes, and a user cannot open a second active application.",
      },
      {
        title: "Document completeness engine",
        body: "The system derives which documents are missing, complete, or verified from the latest file per document type, then sets the next application status, including revision and review states.",
      },
      {
        title: "Live Moyasar payments and webhook reconciliation",
        body: "Checkout creates a hosted Moyasar invoice with amounts converted from SAR to halalas. The webhook verifies a shared secret and re-fetches the invoice from Moyasar before trusting its status, then updates the payment and the application.",
      },
      {
        title: "Installments and accounting sync",
        body: "Payments can be split into installments with their own invoices and statuses. Qoyod is synchronized with deduplicated invoice payments, and sync errors are recorded on the payment instead of failing the request.",
      },
      {
        title: "Scheduled renewal reminders",
        body: "A daily cron scans completed licenses within 30 days of expiry and schedules reminder emails, guarded by a sent timestamp so reminders are not duplicated.",
      },
    ],
    contributions: [
      "Owned the data model, the user profile functions, and the application create, update, and query logic.",
      "Built the support ticket system with threaded messages and validated attachments.",
      "Set up authentication with the Better Auth Convex component and the admin plugin.",
      "Implemented the renewal lifecycle and the daily reminder cron.",
      "Contributed to the payment, installment, and email subsystems, which were committed under a shared team account.",
    ],
    collaboration:
      "Work was committed under two Git identities, my own and a shared team account, and I confirm both represent my work. The data model, applications, tickets, authentication, and cron are under my identity; payments, installments, and email are under the shared account.",
    decisions: [
      "Convex as the backend runtime instead of a REST API over SQL, gaining transactional mutations and reactive queries at the cost of vendor coupling and joins in code.",
      "Email and accounting side effects run through the scheduler, so a failed email does not roll back a database write. Failures are recorded rather than surfaced.",
      "Application, payment, and ticket numbers are generated with read-then-insert retry loops because Convex has no unique constraints. The retry reduces but does not remove the risk of a collision under concurrency.",
      "Statuses are stored as string constants rather than one shared enum, and a few admin mutations accept any string, which is a known fragility.",
    ],
    challenges: [
      "Authorization is binary: an admin role grants every admin function, with no editor or viewer tier.",
      "A profile-completion check before starting an application is currently commented out.",
      "There are no tests and no CI pipeline.",
    ],
    stack: [
      "Convex",
      "TypeScript",
      "Better Auth",
      "React",
      "TanStack Start",
      "Moyasar",
      "Qoyod",
    ],
    status:
      "Feature-complete core with ongoing refinement. The Moyasar and Qoyod integrations are real HTTP clients with normalization and error handling; whether they ran against live production credentials is not verified. No tests or CI are present.",
  },
  {
    slug: "klineck",
    title: "Klineck",
    kind: "Collaborative freelance project",
    year: "2026",
    role: "Backend engineer, collaborative",
    overview:
      "A multi-clinic practice management platform built as a SaaS. Each clinic works inside its own organization and manages patients, contacts, visits and a visit queue, prescriptions, diagnoses, allergies, invoices and payments, and a subscription. It is a Next.js App Router application with route handlers over PostgreSQL through Drizzle, and Better Auth for identity and organizations.",
    problem:
      "A clinic management product has to keep several domains consistent per clinic: clinical records, prescriptions, billing, and team roles can never leak between organizations. The platform also needed a subscription model with usage limits and background work for visit reminders and notification delivery.",
    architecture:
      "Next.js App Router with a large set of route handlers under src/app/api. PostgreSQL is accessed with node-postgres through Drizzle, with migrations checked in. Better Auth provides identity, organizations, invitations, and phone-number login, with the roles owner, doctor, and secretary. Multi-clinic isolation is enforced in the application layer: handlers resolve the active organization from the session and scope every query by clinic id. Axiom records structured logs, PostHog captures product events, and reminder and notification work runs on a PostgreSQL-backed queue.",
    highlights: [
      {
        title: "Clinic-scoped multi-tenancy",
        body: "The active organization is read from the session and stored as a clinic id, and every query filters on it. Better Auth organizations and roles model clinics and their teams.",
      },
      {
        title: "Invoicing and payments backend",
        body: "Invoices and payments have their own APIs, and a transactional helper updates invoice status from its payments. A paid-invoice flow moves an invoice through payment.",
      },
      {
        title: "Prescriptions and diagnoses",
        body: "Prescriptions with line items and patient and visit relations, plus diagnoses attached to visits and patients, with consistent ordering.",
      },
      {
        title: "Visit queue and timezone-aware scheduling",
        body: "Visits have queue ordering and validated statuses, and scheduling and reminders handle timezones explicitly.",
      },
      {
        title: "Allergy conflict check with a language model",
        body: "A safety check compares a patient's prescribed medications against known allergies using the Vercel AI SDK and records each review. This is a language model call, not a trained model.",
      },
      {
        title: "Background processing",
        body: "A PostgreSQL-backed queue drives notification delivery and a visit-reminders worker, and cron endpoints restrict overdue subscriptions.",
      },
    ],
    contributions: [
      "Built the contacts, patients, allergies, and diagnoses APIs and their schema relations.",
      "Built the invoices and payments APIs, including the transactional invoice-status update and the paid-invoice flow.",
      "Built the prescriptions APIs and their relations.",
      "Implemented visit queue ordering, visit status validation, and timezone handling for visit scheduling and reminders.",
      "Added the notification queue.",
    ],
    collaboration:
      "A collaborative project in the Hextra organization. My work, committed under my own identity, covers the backend domains above. The wider front end, billing, and infrastructure were built by teammates, so they are not claimed here.",
    decisions: [
      "Multi-tenancy at the application layer through a clinic id on every query, rather than database row-level security.",
      "Next.js route handlers with Zod validation and an observability wrapper around each handler, keeping the API colocated with the app.",
      "A PostgreSQL-backed queue (pgmq) instead of an external broker for reminders and notifications.",
      "Subscriptions modeled as tiers with per-clinic usage limits and a lifecycle that can restrict an overdue account.",
    ],
    challenges: [
      "Tests are effectively absent: a single placeholder test exists despite a Jest setup.",
      "The overdue-subscription endpoint has an optional secret check that is currently commented out.",
      "The allergy check depends on an external language model and is a safety aid, not a clinical decision system.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "DrizzleORM",
      "Better Auth",
      "React",
    ],
    status:
      "Working system in active development. Build, deploy, and security-scan workflows are configured. Test coverage is effectively absent, so it should not be described as production-ready.",
  },
];
