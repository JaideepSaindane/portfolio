# Project Context — read this first

This file exists so a future session (yours or Claude's) can get up to speed in one read.
If you're Claude picking this up cold: read this whole file before touching anything.

## What this is

Jaideep Saindane's personal portfolio site — positioned as an AI / Product Manager portfolio,
not a developer resume site. Premium, editorial, minimal aesthetic ("Linear + Apple + a good
personal editorial site"), monochrome palette with a single orange accent. Built to answer
"who is this, what have they done, what do they build, how do I reach them" in under a minute.

## Live links

- **Production site:** https://jaideepsaindane.vercel.app
- **Also resolves (kept as alias, not the canonical one):** https://portfolio-ruby-theta-71.vercel.app
- **GitHub repo:** https://github.com/JaideepSaindane/portfolio (public)
- **Vercel project:** `jaideepsaindane` under team `jaideepsaindane-6515s-projects`
  (local `.vercel/project.json` may still show the old name `portfolio` in its cached
  `projectName` field — harmless, it's keyed by `projectId` which hasn't changed)

## CI/CD — this is live and confirmed working

`git push origin main` → Vercel auto-builds and deploys to production. No manual deploy step
needed. This was explicitly tested end-to-end (push → build → live) and works. GitHub repo is
connected via the Vercel GitHub App (installed on Jaideep's GitHub account) plus a GitHub login
connection on his Vercel account — both were missing initially and had to be set up manually;
if a *new* Vercel project is ever created for this repo, those same two steps would need
redoing.

Local Vercel CLI is linked (`.vercel/project.json` present) — `npx vercel ls jaideepsaindane`,
`npx vercel inspect <url> --wait` etc. all work without re-auth.

## Tech stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Static export, no
database, no API routes, no auth. Pure content site.

```
/app            Routes, layout, metadata (SEO/OG tags), global CSS
/components     UI components — one responsibility each, mostly presentational
/data           ALL editable content lives here as typed TS objects — see below
/public         Static assets: resume.pdf, images, favicon
/archive        The original static HTML/CSS/JS version (pre-rebuild), kept for reference only
```

## How to run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build, also what Vercel runs
```

Known gotcha: if you run `npm run build` while a `npm run dev` instance is still running against
the same `.next` folder, the dev server's HMR chunks get out of sync with the fresh build and the
page renders unstyled (404s on `/_next/static/...`). Fix: kill all `next dev` processes, `rm -rf
.next`, restart dev.

## Content model — where to edit what

Everything a recruiter/visitor sees is driven by `/data/*.ts`. You should essentially never need
to touch component JSX to update copy.

| File | Controls |
|---|---|
| `data/profile.ts` | Name, role, hero subline ("Product × AI × Growth × Strategy"), "currently building" rotating words |
| `data/experience.ts` | **Source of truth for work history.** Feeds the Hero's vertical Work Experience timeline, the dedicated Experience section, AND (loosely) mirrored in the Journey timeline. Change dates/titles here once, they propagate. |
| `data/timeline.ts` | The horizontal "Journey" section (Engineering → MBA → first job → second job). Deliberately a *condensed* view — Meesho's multiple roles are collapsed into one node here even though `experience.ts` has them split out. Keep in sync manually if dates change. |
| `data/resume.ts` | Education (also shown in Hero), Skills tags, Selected Achievements (Resume section only) |
| `data/work.ts` | The 3 "Selected Work" case studies (Vaani, AI Interview Analyzer, GenAI Recommendation Engine) — each has a 7-section case study (Context→Learned) shown in a modal |
| `data/personalProjects.ts` | "Things I Build" — AquaAI (shipped, linked) and ReelAutomator (experimenting, no link yet) |
| `data/beyondWork.ts` | "Beyond Work" section — Build / Aquariums / Explore / Life |
| `data/links.ts` | Email, LinkedIn, GitHub, resume path, AquaAI URL |

## Verified career history (source: Jaideep's actual resume PDF, now at `public/resume.pdf`)

This was corrected over several rounds — this is the accurate version, don't regress it:

- **Accenture Strategy** — Management Consulting Analyst — **May 2022 – May 2024**
- **Meesho** — Assistant Manager, Strategy & Operations, CTO's Office — **Jul 2024 – Jul 2025**
- **Meesho** — Manager, Strategy & Operations, CTO's Office — **Jul 2025 – Nov 2025**
  (early-track promotion from the Assistant Manager role above)
- **Meesho** — Growth Product Manager — **Nov 2025 – Present**
- **Education:** B.Tech Engineering Design + M.Tech Biomedical Design (dual degree), IIT Madras,
  2015–2020. MBA, IIM Calcutta, 2020–2022.

Note: the resume's bullet points for the CTO's Office stint aren't explicitly split between the
Assistant Manager and Manager sub-periods. I (Claude) made a judgment call allocating program
management / customer-research bullets to Assistant Manager and the GenAI 0→1 strategy bullets
to Manager, based on seniority fit — not verified against an exact source. If Jaideep ever wants
specific bullets moved between those two roles, that's a `data/experience.ts` edit.

## Design decisions worth knowing

- **Accent color:** `#ff5a1f` (vivid orange), set as `--accent` CSS var in `app/globals.css`.
  Chosen deliberately over blue/purple to avoid the "generic AI startup" look.
- **Fonts:** Inter (sans, everything) + Fraunces (serif italic, used sparingly for the hero
  subline-adjacent statements and Selected Work project titles — the one "editorial" flourish).
- **Palette:** near-white paper (`#fafaf8`) / near-black ink (`#0b0b0c`) / grey mute, monochrome
  except the one accent. No gradients, no glassmorphism, no stock AI imagery — this was an
  explicit constraint from the original brief.
- **Animations:** Framer Motion `whileInView` fade-up reveals throughout (see
  `components/Reveal.tsx`), a sticky hero photo on desktop, a rotating "currently building" word,
  case-study modal transitions. Deliberately restrained — no animation that doesn't aid
  understanding.
- **Hero layout (current, as of the latest round of edits):** Name full-width on its own line →
  two-column row below it: left column has the subline + Education (no label wrapper — "The
  Short Version" label was explicitly removed) + a vertical Work Experience timeline (dot +
  orange date + role + company, styled like the Journey nodes but always vertical) + Download
  Resume button; right column is the profile photo, `sticky` on desktop so it tracks alongside
  the growing left column, inline/non-sticky on mobile positioned between name and subline.
- Section numbering on desktop: 01 About *(folded into Hero, no separate numbered section)* →
  02 The Journey → 03 Experience → 04 Selected Work → 05 Things I Build → 06 Beyond Work →
  07 Resume → Contact (unnumbered, final).

## Known open items / things Jaideep hasn't done yet

- **Beyond Work images are placeholders.** `public/images/beyond/{build,aquariums,explore,life}.jpg`
  are generated placeholder graphics (plain background + label), not real photos. Swap the files
  in place (same filenames) whenever real photos are ready — no code change needed.
- **ReelAutomator has no live URL** — it's marked `EXPERIMENTING` in `data/personalProjects.ts`
  with no `url` field. Add one when/if it ships.
- **No custom domain** — currently only on the free `jaideepsaindane.vercel.app`. A custom domain
  was discussed as a "nice to have later," never purchased.
- **Selected Work case studies (Vaani, AI Interview Analyzer, GenAI Recommendation Engine)** were
  written by Claude based on bullet points Jaideep gave in the original build brief, expanded into
  qualitative case-study prose. Not independently re-verified against the resume the way the
  Experience section was. Worth a pass if those case studies ever get real scrutiny from a reader.

## History of major changes (chronological)

1. Built initial static HTML/CSS/JS portfolio (dark/techy aesthetic) — later fully discarded in
   favor of a Next.js rebuild, but kept at `/archive/legacy-static-site` for reference.
2. Full rebuild to Next.js 14 + TypeScript + Tailwind + Framer Motion per a detailed "premium PM
   portfolio" brief — editorial aesthetic, case-study modals, data-driven content architecture.
3. Set up git, GitHub repo, and Vercel deployment; debugged and fixed the GitHub↔Vercel
   auto-deploy connection (needed both a Vercel login connection AND the Vercel GitHub App
   installed — two separate authorizations).
4. Renamed the Vercel project (and its domain) from `portfolio` to `jaideepsaindane`.
5. Several rounds of hero/layout iteration: added a condensed "Short Version" summary to the
   hero, then reworked it into Education + a proper vertical Work Experience timeline per
   Jaideep's sketch; added the "Journey" horizontal timeline section; added the profile photo
   (iterated on placement twice — ended at the current sticky two-column layout); removed
   section dividers; fixed vertical spacing.
6. Corrected all work-experience titles and dates against the actual resume PDF, including
   splitting out the previously-missing Assistant Manager role.

See `git log --oneline` in this repo for the exact commit-level history — commit messages are
descriptive and match the rounds above.
