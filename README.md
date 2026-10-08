# Jaideep Saindane — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

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
component code to update copy:

- `data/profile.ts` — hero name, tagline, credibility strip, facts, "currently building" list
- `data/experience.ts` — work experience (company / role / dates / highlights / tags)
- `data/work.ts` — Selected Work case studies (the modal content for each project)
- `data/personalProjects.ts` — AquaAI, ReelAutomator, and any future side projects
- `data/beyondWork.ts` — the "Beyond Work" personal section
- `data/resume.ts` — education, skills, selected achievements
- `data/links.ts` — email, LinkedIn, GitHub, resume path

## Before you share this — customize

- [ ] Replace placeholder LinkedIn/GitHub URLs in `data/links.ts`
- [ ] Update `og:url` / `metadataBase` in `app/layout.tsx` once you have a live domain
- [ ] Replace the Beyond Work placeholder images in `public/images/beyond/` with real photos
       (same filenames: `build.jpg`, `aquariums.jpg`, `explore.jpg`, `life.jpg`)
- [ ] Swap `public/resume.pdf` whenever your resume updates
- [ ] Your photo is already at `public/images/jaideep.jpg` — replace it any time

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → import the GitHub repo
3. Framework preset: **Next.js** (auto-detected) — no config needed
4. Deploy — every future `git push` to `main` auto-deploys

## Add a custom domain later

Vercel dashboard → Project → Settings → Domains → add your domain → follow the DNS instructions it gives you.
