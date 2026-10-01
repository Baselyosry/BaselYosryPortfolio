# TASKS.md

One task at a time, in order. Each task lists what to touch and how to know it is done. Tick the box only after running the checks in AGENTS.md. If a task needs content that is TODO in CONTENT.md, stop and ask.

## Phase 0: Environment

- [ ] T-000 Inspect environment. Report OpenCode version, provider, exact model ID, Node and npm versions, existing files. Done when the report is written. No code changes.
- [ ] T-001 Capability test. Read a file, edit two files in one pass, run a terminal command. Done when each result is reported as pass or fail.

## Phase 1: Specs

- [ ] T-010 Confirm the five spec files are at the project root and the CV is in the project folder. Done when listed.
- [ ] T-011 Compare CONTENT.md against the CV and list mismatches. Do not edit CONTENT.md yourself. Done when the list is delivered.

## Phase 2: Foundation

- [ ] T-020 Initialize Next.js (App Router, TypeScript, Tailwind, ESLint, `src/`). Files: project root. Done when `npm run dev` and `npm run build` run.
- [ ] T-021 Add tokens from DESIGN_SPEC.md to `globals.css` and set base styles (background, text color, selection, focus ring, `scroll-behavior`, reduced motion block). Done when the page shows the correct colors.
- [ ] T-022 Load Geist and JetBrains Mono with `next/font` in `layout.tsx`. Done when both render and there is no layout shift.
- [ ] T-023 Root layout: `lang`, metadata title and description from CONTENT.md, skip link, `main` landmark. Done when the skip link works by keyboard.
- [ ] T-024 Navbar: sticky, solid background, bottom border, wordmark, four links, bordered CV button. Files: `components/layout/Navbar.tsx`. Done when it matches the spec at 1440px.
- [ ] T-025 Mobile nav: "Menu" button with `aria-expanded`, vertical list. Small client component. Done when it works by touch and keyboard at 375px.
- [ ] T-026 Footer: name and year. Done.
- [ ] T-027 Typed data files in `src/data/`: `profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`. Fill only CONFIRMED content. Done when types are strict and nothing uses `any`.

## Phase 3: Static sections

- [ ] T-030 Section shell component: two-column editorial grid (title left, content right), stacked on mobile, with `aria-labelledby` and `scroll-margin-top`. Done when reused by every section.
- [ ] T-031 Hero without terminal: heading, intro, technology line, two buttons. Done when it matches the wireframe and has the only `h1`.
- [ ] T-032 About: two paragraphs and the education line from CONTENT.md. Done.
- [ ] T-033 Selected work list: entries with year, title, description, mono technology line, and a "Read the case study" button (no action yet). Thin rules between entries. No numbering, no cards. Done when TennisFinder is first with the larger title.
- [ ] T-034 Experience timeline from `experience.ts`. Skip any field marked TODO. Done when the left rule and entries align.
- [ ] T-035 Check logo availability in `simple-icons` for every item in the stack list. Report which are missing. Do not substitute anything yet.
- [ ] T-036 Stack section: grouped monochrome logos with accessible names and hover tooltips. Done when hover turns logos to `text` color and screen readers announce names.
- [ ] T-037 Contact section and links from `profile.ts`. Omit anything TODO. Done.
- [ ] T-038 Phase 3 check: disable JavaScript and read the page. Compare every string to CONTENT.md. Report any string that is not there.

## Phase 4: Interactive features

- [ ] T-040 Case study dialog component using native `<dialog>`. Fixed article template with the section order from DESIGN_SPEC.md. Done when it opens, closes with Escape and the close button, locks page scroll, and returns focus.
- [ ] T-041 Wire the "Read the case study" buttons and hash deep links (`#tennisfinder`). Loading the URL with the hash opens the dialog. Done when back and forward behave sensibly.
- [ ] T-042 Case study content for TennisFinder. Blocked until Basel supplies the answers listed in CONTENT.md. Use only what he provides.
- [ ] T-043 Terminal UI: window, output log, input, prompt, cursor. Static initial output rendered on the server. Done when it looks correct with JavaScript off.
- [ ] T-044 Terminal commands in `commands.ts`: `help`, `whoami`, `projects`, `open <name>`, `experience`, `skills`, `contact`, `cv`, `clear`. Safe lookup with `Object.hasOwn` or a `Map`. Done when `constructor` and `__proto__` return the unknown command message.
- [ ] T-045 Terminal keyboard: history with arrow keys, Tab completion, input length cap, history cap. Done when each is demonstrated.
- [ ] T-046 Terminal section scrolling and `open <name>` linking to the dialog. Done when each command lands in the right place.
- [ ] T-047 Terminal on mobile: 16px input, tappable command suggestions. Done when it works at 375px without page zoom.
- [ ] T-048 Hero typing line and cursor blink with CSS only. Disabled under `prefers-reduced-motion`. Done when the final text is present in the HTML with JavaScript off.

## Phase 5: Polish

- [ ] T-050 Responsive review at 320, 375, 768, 1024, 1440, 1920. Report and fix overflow or alignment problems.
- [ ] T-051 Keyboard-only walkthrough of the full page, dialog, and terminal. Report and fix focus problems.
- [ ] T-052 Contrast check for muted and accent text on `bg` and `surface`. Report ratios. Adjust only if a check fails, and ask before changing a token.
- [ ] T-053 Metadata: title, description, canonical, Open Graph, Twitter card, favicon, `robots`, sitemap.
- [ ] T-054 Open Graph image, type only, per CONTENT.md. Done when it renders at 1200 by 630.
- [ ] T-055 Client JavaScript audit. List every `"use client"` file and justify each. Remove any that are not needed.
- [ ] T-056 Lighthouse on mobile. Record the real numbers. Fix issues under a score of 90.

## Phase 6: Final review (new session, review mode)

- [ ] T-060 Run lint, type check, and build. Report results.
- [ ] T-061 Check against the Definition of done in IMPLEMENTATION_PLAN.md. Report each item as pass or fail with evidence.
- [ ] T-062 Anti-slop review against AGENTS.md. List every violation found.
- [ ] T-063 Copy review: em dashes, filler words, and any claim not in CONTENT.md.
- [ ] T-064 Deploy a Vercel preview and test on a real phone.

## Content tasks for Basel (not for the model)

- [ ] C-01 Decide whether Tristack goes in the timeline and hero copy.
- [ ] C-02 Decide the four featured projects, including whether Dar Al Funoon replaces one.
- [ ] C-03 Confirm or remove the TennisFinder "backend architecture migration" claim.
- [ ] C-04 Confirm whether FHTC uses PostgreSQL alongside Convex.
- [ ] C-05 Fill in roles and dates for MNT-Halan, CodeCampsis, and WE.
- [ ] C-06 Provide email, GitHub, and LinkedIn.
- [ ] C-07 Answer the case study questions in CONTENT.md, one project at a time, TennisFinder first.
- [ ] C-08 Decide on the availability line.
- [ ] C-09 Check which client projects can be shown publicly by name.
