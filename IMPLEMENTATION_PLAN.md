# IMPLEMENTATION_PLAN.md

How the site gets built. Work in phases. Finish and verify one phase before starting the next. Each phase has an exit check. If the exit check fails, fix it in the same phase.

## How sessions work

Use a fresh session per phase, with one of three purposes:

- Planning: read the spec files, inspect the repo, list what is missing. No code changes.
- Implementation: build the tasks of one phase from TASKS.md.
- Review: read the code, run the app, report problems. No fixes unless asked.

Start every session with: "Read AGENTS.md, DESIGN_SPEC.md, CONTENT.md, then the current phase in IMPLEMENTATION_PLAN.md and TASKS.md. Summarize what you will do before changing anything."

Never let one session change the whole codebase to fix one component.

## Phase 0: Environment

Goal: know what we are working with before writing code.

- Confirm the OpenCode version, the configured provider, and the exact model ID it sends (the display name and the API ID can differ).
- Confirm `node -v`, `npm -v`, and git.
- Check what already exists in the project folder.
- Run a small capability test: read a file, edit two files in one task, run a terminal command, and follow one rule from AGENTS.md. Note anything the model cannot do (for example image input), so later phases do not depend on it.

Exit: a short note listing versions, model ID, and which capabilities passed.

## Phase 1: Specs in place

Goal: the model has persistent context.

- Place the five spec files at the project root.
- Add `Basel_Yosry_CV.pdf` to the project. Verify CONTENT.md against it and update.
- Resolve the open decisions in CONTENT.md: Tristack in the timeline, the final four projects, the unverified claims.

Exit: CONTENT.md has no `UNVERIFIED` items on anything that will be displayed. `TODO` items remain only for case study depth, and those are tracked in TASKS.md.

## Phase 2: Foundation

Goal: a running, empty but correct shell.

- Initialize Next.js with TypeScript, Tailwind, ESLint, App Router, `src/` directory.
- Tokens in `globals.css`. Fonts through `next/font`. Base styles, skip link, focus ring.
- Root layout with metadata. Navbar and footer. Responsive nav with the mobile disclosure.
- Typed data files in `src/data/` with the real content that exists.

Exit: `npm run dev` shows nav, empty sections with correct titles, and footer. Lint, types, and build pass. No overflow at 320px.

## Phase 3: Static sections

Goal: all content visible without any interaction.

- Hero (without the terminal), About, Selected work list, Experience timeline, Technical stack, Contact.
- Selected work entries show everything except the case study content.
- Stack logos from `simple-icons`, monochrome, with tooltips.

Exit: the whole page reads correctly with JavaScript disabled. Content matches CONTENT.md exactly. Nothing displayed that is not in CONTENT.md.

## Phase 4: Interactive features

Goal: add the three interactive pieces, one at a time.

1. Case study dialog: native `<dialog>`, hash deep links, focus return, scroll lock.
2. Terminal: command parsing, history, tab completion, scrolling, `open <name>`, mobile suggestions.
3. Hero typing line and cursor blink with CSS only, with reduced motion support.

Exit: each feature works with mouse, keyboard, and touch. Terminal rejects `constructor`, `__proto__`, and very long input with the normal error. Reduced motion verified.

## Phase 5: Polish

Goal: quality floor.

- Responsive review at 320, 375, 768, 1024, 1440, 1920.
- Keyboard-only pass through the whole page and both interactive features.
- Contrast check on muted and accent text.
- Metadata, Open Graph image, canonical URL, favicon, `robots`, sitemap.
- Performance: fonts, images, no unused client JavaScript. Check bundle for accidental client components.

Exit: no horizontal overflow, visible focus everywhere, Lighthouse run on mobile with results recorded (aim for 95 or higher on performance, accessibility, best practices, SEO, but report the real numbers).

## Phase 6: Final review

Goal: independent check in a separate session.

- `npm run lint`, `npx tsc --noEmit`, `npm run build` all pass.
- Review against the Definition of done below.
- Review against the anti-slop list in AGENTS.md. Remove anything that violates it.
- Read all visible copy once for em dashes, filler words, and claims not in CONTENT.md.
- Deploy to Vercel preview. Test the preview URL on a real phone.

Exit: Basel signs off.

## Definition of done

- [ ] All six sections render correct content from CONTENT.md.
- [ ] Four selected work entries are accurate and text-led, with no cards.
- [ ] Case studies open and close correctly, with hash links and focus return.
- [ ] Terminal commands work, including history and tab completion.
- [ ] Navigation and CV download work.
- [ ] Mobile, tablet, and desktop layouts verified.
- [ ] No horizontal overflow or broken layout.
- [ ] Keyboard navigation and reduced motion verified.
- [ ] No fabricated achievements, metrics, or links.
- [ ] Lint, type check, and production build pass.
- [ ] Metadata and social preview configured.
- [ ] Anti-slop review passed.

## Risks to watch

- The model adds decoration unprompted. Review diffs for gradients, shadows, extra animations, and extra dependencies.
- The model fills content gaps with plausible text. Review every string against CONTENT.md.
- Case studies are only as good as the content Basel provides. They are written last, one project at a time, from his answers.
- Logo availability in `simple-icons` for C#, .NET, SQL Server, EF Core. Decide on a fallback if any are missing.
