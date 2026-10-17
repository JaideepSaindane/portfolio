import { workSummary } from "@/data/workSummary";
import { education } from "@/data/resume";
import { links } from "@/data/links";

export function LandingFacts() {
  return (
    <div className="grid sm:grid-cols-3 gap-10 md:gap-8 py-10 md:py-12 border-t border-line">
      <div>
        <h3 className="text-[11px] tracking-widest2 uppercase text-mute mb-4">
          Experience
        </h3>
        <div className="space-y-3.5">
          {workSummary.map((w) => (
            <div key={w.company}>
              <p className="font-medium text-sm leading-snug">{w.role}</p>
              <p className="text-mute text-sm">
                {w.company} &middot; {w.duration}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[11px] tracking-widest2 uppercase text-mute mb-4">
          Education
        </h3>
        <div className="space-y-3.5">
          {education.map((e) => (
            <div key={e.degree}>
              <p className="font-medium text-sm leading-snug">{e.degree}</p>
              <p className="text-mute text-sm">
                {e.school} &middot; {e.dates}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[11px] tracking-widest2 uppercase text-mute mb-4">
          Contact
        </h3>
        <div className="flex flex-col gap-2.5">
          <a
            href={`mailto:${links.email}`}
            className="text-sm hover:text-accent transition-colors"
          >
            {links.email}
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-accent transition-colors inline-flex items-center gap-1.5"
          >
            LinkedIn <span aria-hidden>↗</span>
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-accent transition-colors inline-flex items-center gap-1.5"
          >
            GitHub <span aria-hidden>↗</span>
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1.5"
          >
            Download Resume <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </div>
  );
}
