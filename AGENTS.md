# AGENTS.md

Personal portfolio for Basel Yosry, a backend and full-stack engineer based in Cairo. One page, no backend, no database, deployed on Vercel.

Read this file at the start of every session. Then read DESIGN_SPEC.md, CONTENT.md, and the current phase in IMPLEMENTATION_PLAN.md and TASKS.md before changing code.

## Source of truth

- Design decisions: DESIGN_SPEC.md. They are final. Do not redesign, rename tokens, or "improve" the look.
- Words, facts, dates, project details: CONTENT.md. Nothing else is a source.
- Order of work and acceptance criteria: IMPLEMENTATION_PLAN.md.
- Open work: TASKS.md. Do one task at a time.

If two files disagree, or a task is unclear, stop and ask. Do not guess.

## Facts and content

- Never invent facts, metrics, dates, employers, client names, links, or achievements. If CONTENT.md has a TODO for something, leave it out of the UI and tell me what is missing.
- No lorem ipsum, no placeholder testimonials, no fake stats, no fake loading states, no fake API calls.
- All content lives in typed files under `src/data/`. Components never hardcode copy.

## Working rules

- Touch only the files a task names, plus files strictly required to make it work. Do not refactor unrelated code.
- Read a file before editing it. Prefer small edits over rewriting a whole file.
- After each task run `npm run lint` and `npx tsc --noEmit`. After each phase also run `npm run build`. Fix errors before moving on.
- Commit after each task with a short plain message, for example `add navbar with mobile disclosure`.
- Do not install a dependency that is not on the allowed list below. Ask first.
- If a command fails, read the error and fix the cause. Do not retry blindly or disable the check.

## Stack and code standards

- Next.js App Router, TypeScript in strict mode, Tailwind CSS. Use the current stable versions that `create-next-app` provides. Check `node -v` first.
- No `any`. No non-null assertions without a comment saying why.
- Server Components by default. `"use client"` only for: the terminal, the case study dialog and its open triggers, the mobile nav toggle, the active-section observer. Keep client boundaries as small as possible.
- Design tokens live in `src/app/globals.css` (Tailwind `@theme`). Components use tokens. No raw hex values in components.
- Fonts through `next/font`: Geist (the `geist` package) and JetBrains Mono. Self-hosted, no layout shift.
- Images through `next/image` with explicit dimensions. Technology logos are inline SVG.
- Semantic HTML: `header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`. Exactly one `h1`. Visible focus styles on everything interactive.
- Allowed dependencies: next, react, react-dom, tailwindcss, typescript, eslint and its Next config, geist, simple-icons. `lucide-react` only if a task needs an icon. `motion` is not installed unless a task in TASKS.md says so.

## Terminal rules (security)

The terminal is a simulation that only reads from `src/data/`. It is not a shell.

- Never use `eval`, `new Function`, `dangerouslySetInnerHTML`, `innerHTML`, or dynamic imports driven by user input.
- Render command output as React elements and text nodes only.
- Look commands up with `Object.hasOwn` or a `Map`, never with `commands[input]` on a plain object. Inputs like `constructor` and `__proto__` must produce the normal "command not found" message.
- Cap input length and history size.
- It must work with the page's content already present in the HTML. The terminal is an enhancement, never the only way to reach content.

## What "not AI slop" means here

Do not add any of the following, even if it looks nice:

- Gradients, glows, blurred blobs, glassmorphism, grain overlays, animated backgrounds.
- Identical rounded cards in a grid, drop shadows under everything.
- Fade-and-slide-up on every section, or hover lift on everything.
- Numbered markers (01 / 02 / 03) on items that are not a sequence.
- ALL CAPS tracked-out eyebrow labels above headings.
- Taglines, "scroll down" cues, bouncing arrows, emoji, decorative icons.
- Arrows appended to every link. Use an arrow only for a link that leaves the site.
- Traffic-light dots on the terminal window.
- A second accent color. Steel blue is the only one, and only where DESIGN_SPEC.md says.

When in doubt, remove it.

## Copy rules

- Sentence case everywhere. Plain verbs. Concrete nouns.
- No em dashes. No words like passionate, cutting-edge, seamless, robust, leverage, innovative, crafted, journey.
- Say what was built and what Basel did. Do not describe how great it is.
- Buttons and links name the action: "Download CV", "Read the case study". Same action, same name everywhere.

## Reporting back

At the end of each task, say in a few lines: what changed, what you ran and the result, and anything you did not verify. Do not claim something works if you did not run it.
