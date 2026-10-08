import { education, skills, achievements } from "@/data/resume";
import { links } from "@/data/links";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section id="resume" className="px-6 md:px-10 py-28 md:py-36 bg-ink/[0.02]">
      <div className="max-w-content mx-auto">
        <SectionHeading index="06" title="Resume" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <Reveal>
            <h3 className="font-serif italic text-4xl md:text-6xl leading-tight">
              The Short Version
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-ink text-paper text-sm tracking-widest2 uppercase px-7 py-4 rounded-full hover:bg-accent transition-colors duration-300 shrink-0"
            >
              Download Resume
              <span aria-hidden>&darr;</span>
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <Reveal>
            <h4 className="text-xs tracking-widest2 uppercase text-mute mb-6">
              Education
            </h4>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="font-medium leading-snug">{e.degree}</p>
                  <p className="text-mute text-sm mt-1">
                    {e.school} &middot; {e.dates}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h4 className="text-xs tracking-widest2 uppercase text-mute mb-6">
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-sm text-ink/80 border border-line px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h4 className="text-xs tracking-widest2 uppercase text-mute mb-6">
              Selected Achievements
            </h4>
            <ul className="space-y-4">
              {achievements.map((a) => (
                <li
                  key={a}
                  className="text-sm leading-relaxed text-ink/80 flex gap-2.5"
                >
                  <span className="text-accent shrink-0">—</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
