# CONTENT.md

Source of truth for every word and fact on the site. Verified against `Basel_Yosry_CV.pdf` on 2026-10-01. The CV is placed at `public/Basel_Yosry_CV.pdf`.

Status markers:

- `CONFIRMED`: Basel stated it directly, or it appears in `Basel_Yosry_CV.pdf`.
- `UNVERIFIED`: written in an earlier draft, needs Basel's confirmation before it can ship.
- `TODO`: missing. Do not render anything for it. Ask Basel.

Rule for the implementing model: if a field is `TODO` or `UNVERIFIED`, leave it out of the UI and list it in your task report.

## Identity

- Name: Basel Yosry. Full name: Basel Yosry Abdellatif. CONFIRMED (CV)
- Role positioning: backend engineer, also works full-stack. CONFIRMED
- Location: Cairo, Egypt. CONFIRMED
- Education: BSc in Computer Science, MUST (Misr University for Science and Technology), Cairo, 2022 to 2026. GPA 3.8. Graduation project final grade A+. CONFIRMED (CV)
- Relevant coursework (not shown in the UI, the About section shows the degree line only): Data Structures, Algorithms, Databases, Software Engineering, Operating Systems, Networks, System Analysis and Design. CONFIRMED (CV)
- Email: baselyosry96@gmail.com. CONFIRMED (CV)
- GitHub URL: https://github.com/Baselyosry. CONFIRMED (CV)
- LinkedIn URL: https://linkedin.com/in/baselyosry. CONFIRMED (CV)
- Phone: +20 112 852 0864. CONFIRMED (CV). Not displayed. DESIGN_SPEC lists email, GitHub, LinkedIn, and CV as the contact links only.
- CV file: `public/Basel_Yosry_CV.pdf`. CONFIRMED (file added)
- Availability line (for example "Open to backend roles"): TODO. Include only if true and Basel wants it.

## Draft copy for approval

These are the working proposals. Basel edits them. Until he edits a line, the build uses it as written.

Hero heading:
> Basel Yosry builds backend systems.

Hero intro:
> Backend and full-stack engineer in Cairo. I co-founded Tristack, where I build and deploy web platforms for clients in Egypt and Saudi Arabia.

Hero technology line (plain text): C#, TypeScript, Node.js, PostgreSQL.

About, paragraph 1:
> I graduated in Computer Science from MUST in 2026. Most of my work is backend: designing the data model, the API, and the deployment, then keeping it running.

About, paragraph 2:
> At Tristack, a software house I co-founded with two partners, I handle backend development, DevOps, and project management. That means I am usually the person who scopes the work, builds it, and ships it.

Notes for Basel: the "co-founded Tristack" claim and its responsibilities come from your own earlier description. The "scopes, builds, ships" sentence is a summary of that. Cut it if it overstates.

## Selected work

Four entries: TennisFinder, MPC, FHTC, Klineck. All four are confirmed against the CV. Order: TennisFinder first, then the rest by strength.

Dar Al Funoon (bilingual Arabic and English museum and cultural platform built under Tristack) stays a candidate. It is not in the CV and has no stack, role, year, or links, so it is not one of the four. Basel can swap it in later once those facts exist.

### TennisFinder

- Kind: graduation project. Year: 2026. CONFIRMED
- Role: backend lead, overall team lead, and system design and architect. CONFIRMED (Basel, 2026-10-01)
- Summary: a multi-sided marketplace for tennis players, court owners, and academies, covering court discovery, player matchmaking, tournaments, and AI-enhanced insights. Cross-platform web and mobile. CONFIRMED (CV)
- Stack: Node.js, Express, TypeScript, Prisma, PostgreSQL, Clerk. CONFIRMED (CV)
- Architecture decision: the team was not familiar with Convex, so Basel led a migration from Convex to a custom Node.js and PostgreSQL stack within a one-week window to meet the graduation deadline. CONFIRMED (CV, Basel 2026-10-01)
- Architecture: distributed and service-oriented. A Node.js, Express, and TypeScript backend serves REST APIs, with Prisma, PostgreSQL and PostGIS for geospatial queries, Socket.io for real-time updates, and Clerk for authentication and role-based access control. AI runs in separate Python microservices, and Prometheus and Grafana cover monitoring. Modules: matchmaking, court booking, marketplace, tournaments, notifications, and admin and court owner dashboards. CONFIRMED (Basel's project document, 2026-10-01)
- Problem: players in Egypt had no unified place to find partners, courts, and equipment, and relied on personal networks and social media groups. Existing apps focused on court booking, club management, or padel matchmaking, and did not cover skill-based tennis matchmaking, location-aware recommendations, or an equipment marketplace. Court owners lacked data on court use and player demand. CONFIRMED (Basel's project document, 2026-10-01)
- Core features: geospatial court discovery, conflict-aware reservation scheduling, and AI-driven features for opponent matchmaking, marketplace pricing, and demand forecasting. Clerk for role-based access control, and an admin dashboard for court approval, invoice tracking, and reporting. CONFIRMED (CV)
- AI: separate Python microservices handle player compatibility scoring, price recommendations, marketplace item categorization, and court demand forecasting. Matchmaking uses cosine similarity and ML-based scoring. CONFIRMED (Basel's project document, 2026-10-01)
- Links: none public. CONFIRMED (Basel, 2026-10-01)

### MPC (Makkah Park Clinic)

- Kind: freelance project. Year: 2026. Relationship to Tristack: independent freelance, the CV does not place it under Tristack.
- Summary: a bilingual Arabic and English healthcare platform with a decoupled architecture. APIs for patient records, visit history, and appointment scheduling with real-time availability, plus payment integration and automated invoicing, as a standalone backend for a Next.js frontend. Built with KSA data residency in mind. CONFIRMED
- Stack: Hono, TypeScript, PostgreSQL, DrizzleORM. CONFIRMED
- Client name is confirmed displayable, 2026-10-01.
- Case study fields, remaining TODO:
  - How was data residency handled?
  - How are Arabic and English handled in the data and the API?
  - What exactly did Basel build?
  - Challenges and how they were solved.
  - Repo or live link, if public.

### FHTC

- Kind: freelance project. Year: 2026. CONFIRMED
- Summary: an academic supervision platform automating student training lifecycles, from application submission to payment processing. A multi-stage workflow engine, Moyasar payment integration with automated accounting sync, and a support ticketing system. CONFIRMED (CV)
- Stack: Convex, TypeScript, Better Auth, PostgreSQL. The CV lists PostgreSQL alongside Convex; where PostgreSQL is used is not stated. CONFIRMED (CV)
- Client name is confirmed displayable, 2026-10-01.
- Case study fields, remaining TODO:
  - What does FHTC stand for and who uses it?
  - How is the multi-stage workflow modeled?
  - What was Basel's role?
  - Challenges and how they were solved.
  - Repo or live link, if public.

### Klineck

- Kind: collaborative freelance project. Year: 2026. CONFIRMED
- Summary: a SaaS clinic management platform with multi-clinic isolation and role-based access. Backend logic for prescriptions, invoicing, and multi-tenant data modeling. CONFIRMED (CV)
- Stack: Next.js (API Routes), PostgreSQL, DrizzleORM. CONFIRMED (CV)
- Client name is confirmed displayable, 2026-10-01.
- Case study fields, remaining TODO:
  - How are tenants isolated (schema, row-level, or app layer)?
  - Who did Basel collaborate with, and which parts did he own?
  - Challenges and how they were solved.
  - Repo or live link, if public.

### Wording rule for contributions

Describe the engineering decision and Basel's ownership, only where it is true. Examples of the target style, to be used only if each is accurate:

- "Designed and implemented a custom backend with Node.js and PostgreSQL."
- "Developed REST APIs that support real clinic workflows."
- "Applied SOLID principles and design patterns in backend code."

## Experience

Order newest first. Tristack is current and stays in the timeline (Basel confirmed, 2026-10-01). The CV does not list Tristack.

### Tristack

- Co-founder. Software house delivering web and technology solutions to clients in Egypt and Saudi Arabia, with two partners. CONFIRMED
- Responsibilities: backend development, DevOps, project management. CONFIRMED
- Start date: TODO
- One or two sentences of concrete work (which clients, which kinds of systems, what DevOps means in practice: hosting, CI, deployments): TODO

### MNT-Halan (Talabeyah)

- Location: Cairo, Egypt. Role: Full-Stack Developer Intern. Dates: Aug 2026 to Sep 2026. CONFIRMED (CV)
- Full-stack feature work across Angular, TypeScript, JavaScript, and .NET, collaborating with the team using Git. CONFIRMED (CV)
- Frontend: CSS Flexbox and Grid, responsive design, modern JavaScript (ES6+, async/await), TypeScript interfaces and utility types, Angular, and the Observer pattern. CONFIRMED (CV)
- Backend and OOP: C# with SOLID and the Singleton, Strategy, Factory, Builder, and Decorator patterns, alongside Entity Framework Core, LINQ, and SQL Server. CONFIRMED (CV)

### CodeCampsis

- Location: German startup, remote. Role: Backend Engineer Intern. Dates: Sep 2025 to Dec 2025. CONFIRMED (CV)
- Built REST APIs for an internal e-learning platform using ASP.NET Core and SQL Server, and implemented ASP.NET Core Identity with role-based access control for learners, instructors, and admins. CONFIRMED (CV)
- Worked directly with stakeholders to translate business requirements into technical solutions. CONFIRMED (CV)

### WE (Telecom Egypt)

- Location: Cairo, Egypt. Role: Backend Web Development Trainee. Dates: Jul 2025 to Sep 2025. CONFIRMED (CV)
- Completed a 170-hour ASP.NET backend program covering C#, OOP, SOLID, LINQ, and Entity Framework Core, then built a full MVC and Web API project applying database design, business logic, and RESTful endpoints using Agile practices. CONFIRMED (CV)

## Technical stack (logos only)

Groups follow DESIGN_SPEC. CONFIRMED list:

- Languages: C#, TypeScript, JavaScript, Python, C++, SQL
- Backend: ASP.NET Core, ASP.NET MVC, .NET, Node.js, Express, Hono, Clerk, Better Auth
- Frontend: Angular, Next.js
- Databases and ORM: PostgreSQL, SQL Server, Prisma, DrizzleORM, EF Core, Convex
- Tools: Git, GitHub, Postman, Visual Studio, Rider, Cursor, Claude Code

Notes: the CV also lists OOP, SOLID, Design Patterns, LINQ, RESTful APIs, RDBMS Design, and Type-Safe Systems under Architecture. They are not logos and have no group in DESIGN_SPEC, so they are not shown. Tailwind is not in the CV; add it only if Basel confirms he uses it. simple-icons availability is checked in T-035.

## Terminal text

The terminal reads from the data above. Fixed strings:

- Welcome: `Welcome. Type help to see what you can ask.`
- Unknown command: `command not found: <input>. Type help for the list.`
- `help` lists: whoami, projects, open <name>, experience, skills, contact, cv, clear.

## Contact section

Closing line draft: `Email is the fastest way to reach me.`

Then email, GitHub, LinkedIn, CV as plain text links:

- Email: baselyosry96@gmail.com
- GitHub: https://github.com/Baselyosry
- LinkedIn: https://linkedin.com/in/baselyosry
- CV: `public/Basel_Yosry_CV.pdf`

## SEO

- Title: `Basel Yosry, backend engineer`. Proposed.
- Description: one sentence taken from the hero intro once approved.
- Open Graph image: simple type-only image, `#090909` background, name in Geist. To be generated in Phase 5.
