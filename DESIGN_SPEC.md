# DESIGN_SPEC.md

Final design for Basel's portfolio. The palette and fonts below come from the agreed brief. The layout, motion, and restraint rules are the decisions made on top of it. See the decision log at the end.

## 1. Intent

A quiet, dark, text-led page that reads like an engineer's notebook. The typography does most of the work. The terminal in the hero is the one memorable element. Everything else stays disciplined so that element lands.

Audience: engineering managers and technical recruiters skimming for ownership and real systems. Job of the page: in under a minute, show what Basel built, what he was responsible for, and how to reach him.

## 2. Tokens

Define in `globals.css` with Tailwind `@theme`.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#090909` | Page background |
| `--color-surface` | `#171717` | Terminal, dialog panel, hover surfaces |
| `--color-text` | `#F2F2F0` | Headings and body |
| `--color-muted` | `#A1A1AA` | Secondary text, dates, captions |
| `--color-accent` | `#8CA6C1` | Accent (see rules) |
| `--color-border` | `#30343A` | All rules and outlines |

Accent rules. Steel blue appears only on: link hover and active state, keyboard focus ring, the active nav item, the terminal cursor and prompt symbol, and the "Read the case study" link on hover. It never colors headings, body text, or backgrounds.

Radius: `4px` for buttons and inputs, `6px` for the terminal and dialog. Nothing else.

Spacing: 4px base unit. Section vertical padding `7rem` on desktop, `4.5rem` on mobile.

Contrast check required in Phase 5: muted on bg and accent on bg must pass WCAG AA for body-size text.

### Light theme

Added after the first build, at Basel's request. The page follows the operating system color scheme by default, and an icon toggle (sun and moon) in the navbar and the mobile menu overrides it. The choice is stored in `localStorage`. The dark palette above is the default. The light palette replaces only the six color tokens.

| Token | Light value |
|---|---|
| `--color-bg` | `#FAFAF9` |
| `--color-surface` | `#FFFFFF` |
| `--color-text` | `#18181B` |
| `--color-muted` | `#52525B` |
| `--color-accent` | `#3F5E7F` |
| `--color-border` | `#D4D4D8` |

The accent stays steel blue, darkened for light backgrounds. The accent rules and radius are unchanged. Contrast on the light background: text `16.9`, muted `7.4`, accent `6.4`, all WCAG AA. A small inline script in the root layout applies a stored theme before the first paint, so there is no flash. When nothing is stored, the OS preference decides.

## 3. Typography

- Geist Sans for headings and body.
- JetBrains Mono for the terminal, inline code, and the line of technology names under each project. Not for general labels, dates, or section titles.

| Role | Size | Line height | Weight | Tracking |
|---|---|---|---|---|
| Hero heading | `clamp(2.25rem, 5.5vw, 3.75rem)` | 1.05 | 600 | -0.03em |
| Section title | `1.5rem` | 1.3 | 600 | -0.01em |
| Project title | `1.375rem` | 1.3 | 600 | -0.01em |
| Body | `1.0625rem` | 1.65 | 400 | 0 |
| Small | `0.875rem` | 1.5 | 400 | 0 |
| Mono | `0.8125rem` | 1.6 | 400 | 0 |

Body line length: maximum `62ch`. Use tabular figures for dates. Sentence case for every heading and label.

## 4. Layout

Container: max width `72rem`, horizontal padding `clamp(1.25rem, 4vw, 2rem)`. All text is left aligned. Nothing is centered except inside the terminal if needed.

On desktop, sections use a two-column editorial grid: a narrow left column (about 3 of 12 columns) holding the section title, and a wide right column holding the content. On mobile the title stacks above the content. This is what gives the page its structure without cards.

### Navigation

Sticky. Solid `bg` background with a 1px `border` bottom line. No blur, no transparency.

```
Basel Yosry                         About  Projects  Experience  Contact   Download CV
```

Wordmark is plain text, Geist 600. The CV download is a bordered button, visually separate from the links. Active section link uses the accent color and a 1px underline. Mobile: wordmark on the left, a "Menu" button on the right toggling a simple vertical list. Use a real `button` with `aria-expanded`.

### Hero

Left: heading, one short intro paragraph, one line of technology names as plain text, two buttons (View work, Download CV). Right: the terminal. On mobile the terminal sits below the buttons.

```
+---------------------------------------------------------------+
| Basel Yosry                    About Projects Exp... Contact CV |
+---------------------------------------------------------------+
|                                                               |
|  Basel Yosry builds             +---------------------------+ |
|  backend systems.               | basel@portfolio: zsh      | |
|                                 |---------------------------| |
|  Backend and full-stack         | $ whoami                  | |
|  engineer in Cairo. ...         | Basel Yosry. Backend ...  | |
|                                 | $ help                    | |
|  C#  TypeScript  Node.js        | ...                       | |
|  PostgreSQL                     | $ _                       | |
|                                 +---------------------------+ |
|  [View work] [Download CV]                                    |
+---------------------------------------------------------------+
```

No eyebrow label above the heading. The terminal's `whoami` already does that job. No availability indicator unless Basel confirms it is accurate and wants it (see CONTENT.md).

### About

Left column: section title. Right column: two short paragraphs in body text. Education (Computer Science, MUST, 2026) is a plain line, not a badge.

### Selected work

A list of entries separated by 1px `border` rules. No cards, no boxes, no images, no logos here.

```
Selected work     2026   TennisFinder
                         Graduation project. A multi-sided tennis marketplace
                         with geospatial court discovery, conflict-aware
                         reservations, and AI-assisted insights.

                         Node.js, TypeScript, Express, PostgreSQL, Prisma
                         Read the case study
                         ---------------------------------------------------
                  2026   MPC (Makkah Park Clinic)
                         ...
```

Each entry: year in muted tabular text in a narrow column, then title, one-sentence description, a mono line of technology names, and a "Read the case study" button styled as a text link. No numbering, because the projects are not a sequence. The kind of project (graduation, freelance, collaborative) is written as the first words of the description, not as a label.

TennisFinder is first and gets a slightly larger title and a two-sentence description. That is the only emphasis. No other treatment.

The title is not a link. The only action is the case study button. If a project has a live URL or repository, it appears inside the case study.

### Case study overlay

Use the native `<dialog>` element opened with `showModal()`. It gives focus trapping and Escape handling for free. Panel is `surface`, `6px` radius, full height on mobile, centered with a max width of `46rem` on desktop, scrollable inside. Page scroll is locked while open. Backdrop is solid black at 70 percent opacity, no blur.

Content order, as an editorial article:

1. Title, kind of project, year, role.
2. Overview.
3. The problem.
4. Architecture and key decisions.
5. What I built (Basel's specific contributions).
6. Challenges and how they were solved.
7. Stack: small monochrome logos with names.
8. Links, only if they exist.

Opening: 150ms fade and a 8px upward settle. Closing: 100ms fade. Closing returns focus to the button that opened it. The URL hash updates (`#tennisfinder`) so a case study can be linked directly, and loading the page with that hash opens it. No separate routes.

### Experience

A vertical timeline: a 1px `border` line on the left, entries to the right. Each entry has the organization, role, dates, and two or three plain sentences of what Basel did. Order and contents come from CONTENT.md. Tristack is included if Basel confirms (recommended).

### Technical stack

Logos only, grouped. Group names in muted small text in the left column, logos in a wrap row in the right column.

- Logos are inline SVG, 28px, filled with `muted`. On hover they turn `text`. No brand colors.
- Each logo has an accessible name (`aria-label` or visually hidden text) and a tooltip on hover showing the technology name.
- No percentages, bars, levels, or descriptions.
- Source: `simple-icons`, imported per icon. If an icon is not available in the package (check C#, .NET, SQL Server, EF Core), say so in the task report. Do not hand-draw brand logos.

Groups: Languages, Backend, Frontend, Databases and ORM, Tools. Exact members are in CONTENT.md.

### Contact

Short closing line, then plain text links for email, GitHub, LinkedIn, and CV. Show the actual address and handles as text, not only icons. Footer: name and year, nothing else.

## 5. Terminal widget

A simulated terminal. Content only, no shell. Security rules are in AGENTS.md.

Visual: `surface` background, 1px `border`, `6px` radius, JetBrains Mono. Title bar is plain muted text `basel@portfolio: zsh` with a bottom border. No traffic-light dots. Prompt `basel@portfolio:~$` in muted text with the final `$` in accent. Cursor is a block in accent.

Behavior:

- Real `input` element, 16px minimum font size on mobile to prevent iOS zoom.
- Initial output is rendered in the HTML, so it exists without JavaScript.
- Commands: `help`, `whoami`, `projects`, `open <name>`, `experience`, `skills`, `contact`, `cv`, `clear`.
- `projects` lists the projects and scrolls to Selected work. `open tennisfinder` opens that case study. `experience`, `skills`, and `contact` print a short summary and scroll to their sections. `cv` starts the CV download.
- Output text comes from `src/data/` so it never drifts from the page.
- Unknown command: `command not found: xyz. Type help for the list.`
- Arrow up and down move through history. Tab completes command names.
- On touch devices show tappable command suggestions under the input.
- Output area has `role="log"` and `aria-live="polite"`. The input has a visible or visually hidden label.
- Does not trap focus. Escape or Tab moves out normally.

## 6. Motion

Motion is used rarely and on purpose.

- The one planned moment: in the hero terminal, the first `whoami` line types out once on load. Do it with CSS `steps()` so the final text is already in the HTML. No JavaScript needed, no flash of final content.
- Cursor blink: 1s step animation.
- Case study overlay: as described above.
- Links and buttons: color and border-color transitions of 120ms. No movement.
- Smooth anchor scrolling through CSS `scroll-behavior`, with `scroll-margin-top` on sections to clear the sticky nav.
- Not allowed: scroll-triggered fades, parallax, staggered reveals, hover lift, animated backgrounds, loaders.
- `prefers-reduced-motion: reduce` disables the typing, the blink, the overlay animation, and smooth scrolling.

The `motion` library is not needed for any of this. Do not install it unless a task in TASKS.md calls for it.

## 7. Accessibility and quality floor

- Keyboard reachable everything, visible 2px accent focus ring with 2px offset.
- Skip link to main content.
- Text and UI contrast meets WCAG AA.
- No horizontal overflow from 320px to 1920px.
- Works with JavaScript disabled except the terminal commands, the dialog, and the mobile menu.
- Metadata: title, description, canonical, Open Graph and Twitter images, `lang="en"`.

## 8. Decision log

What was changed from the earlier plan, and why.

- Removed numbered markers (01 / 02 / 03) on projects. They are not a sequence, and numbered lists are a common generated-page tell.
- Removed all-caps labels, the "Quietly technical. Seriously engineered." tagline, and arrows on every link. They say nothing a manager needs.
- Removed the `whoami` label above the hero heading. The terminal already does it.
- Moved the terminal into the hero and made it the single memorable element, instead of one widget among many.
- Dropped scroll fade-ins on sections. Motion is limited to the terminal line, the overlay, and small color transitions.
- Made `motion` optional. Native `<dialog>` and CSS cover every interaction.
- Restricted JetBrains Mono to the terminal, code, and technology names so it does not become decoration.
- Added hash links for case studies so a specific project can be shared.
- Kept the palette exactly as agreed, including `#090909` and `#171717`.
- Added a light theme (later request). It follows the OS by default and can be overridden with a navbar toggle that persists. The dark palette is unchanged; the six light color tokens are listed in section 2.
