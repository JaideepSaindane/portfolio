# Jaideep Saindane — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

**Live:** https://jaideepsaindane.vercel.app

> 👉 **New session / coming back after a while? Read [`CONTEXT.md`](./CONTEXT.md) first.**
> It has the full picture: deployment setup, CI/CD status, content model, verified career
> history, design decisions, and everything still left to do. This README only covers local dev.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
/app            Routes, layout, metadata, global styles
/components     UI components (Nav, Hero, Experience, SelectedWork, etc.)
/data           All editable content — experience, projects, resume, links
/public         Static assets (resume.pdf, images, favicon)
/archive        The original static HTML/CSS/JS version, kept for reference
```

## Updating content

Almost everything on the site is driven by the files in `/data` — you shouldn't need to touch
component code to update copy. See `CONTEXT.md` for the full table of which file controls what.

## Deploying

This repo auto-deploys to Vercel on every push to `main` — already set up and confirmed working.
Just `git push origin main`. See `CONTEXT.md` for the CI/CD details and the Vercel project name.

## Known open items

See the "Known open items" section in `CONTEXT.md` — short version: Beyond Work section still
has placeholder images, ReelAutomator has no live link yet, and there's no custom domain.
