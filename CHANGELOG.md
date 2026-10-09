# Changelog

Human-readable log of notable changes, newest first. For full detail, `git log` has every
commit with descriptive messages. Read `CONTEXT.md` for the current-state summary — this file
is for "what happened and why," not "what's true right now."

## 2026-10-09

- Corrected Meesho work history to match the actual resume: split the CTO's Office stint into
  Assistant Manager (Jul 2024 – Jul 2025) and Manager (Jul 2025 – Nov 2025), tightened Growth
  Product Manager start to Nov 2025, and Accenture dates to May 2022 – May 2024. Mirrored in
  both the Experience section and the Journey timeline.
- Removed the oversized gap between the hero subline and Education (stacked margin/padding bug).
- Wrote `CONTEXT.md` and this changelog so a future session can get oriented without re-deriving
  everything from scratch.

## 2026-10-08

- Removed section divider lines between Education and Work Experience in the hero.
- Fixed hero photo placement: was top-aligned next to just the name, leaving a large empty gap
  beneath it. Restructured to a two-column layout (content left, photo right, sticky on desktop)
  so the photo's height matches the content it sits beside.
- Reworked the hero's career summary: removed the "The Short Version" label, put Education
  directly under the subline, replaced the bulleted work-experience summary with a proper
  vertical timeline (dot + orange date + role + company) matching the Journey section's visual
  style but always vertical and scoped to work roles only.
- Added "The Journey" — a horizontal timeline section (vertical on mobile) covering education
  and both jobs in chronological order.
- Added the profile photo to the site for the first time (previously only used in Contact).
- Removed the hero's role kicker ("AI / Product Manager" label) and the long tagline sentence;
  kept only "Product × AI × Growth × Strategy" as the hero's supporting line.
- Renamed the Vercel project (and its domain) from `portfolio` to `jaideepsaindane`.
- Set up and debugged GitHub → Vercel auto-deploy (needed a Vercel login connection AND the
  Vercel GitHub App installed — two separate steps, both initially missing). Confirmed working
  end-to-end with a real push → build → live-site test.
- Added real LinkedIn and GitHub profile links (previously placeholders).
- Set up git, created the GitHub repo, did the first Vercel deploy.
- Full rebuild from a static HTML/CSS/JS site to Next.js 14 + TypeScript + Tailwind +
  Framer Motion, per a detailed "premium AI/PM portfolio" brief — editorial aesthetic, data-driven
  content, Selected Work case-study modals, Beyond Work section, resume section. Old static site
  preserved at `/archive/legacy-static-site`.
- Built the original static portfolio site (dark/techy aesthetic) — this version was later fully
  superseded by the Next.js rebuild above, same day.
