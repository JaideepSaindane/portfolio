import { education } from "@/data/resume";
import { links } from "@/data/links";
import { WorkExperienceTimeline } from "./WorkExperienceTimeline";

export function CareerSummary() {
  return (
    <div>
      <div>
        <h3 className="text-[11px] tracking-widest2 uppercase text-mute mb-3">
          Education
        </h3>
        <div className="space-y-1.5">
          {education.map((e) => (
            <p key={e.degree} className="text-sm leading-snug">
              <span className="font-medium">{e.degree}</span>
              <span className="text-mute"> — {e.school}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <WorkExperienceTimeline />

        <a
          href={links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-ink text-paper text-sm tracking-widest2 uppercase px-6 py-3.5 rounded-full hover:bg-accent transition-colors duration-300 mt-10 ml-[28px]"
        >
          Download Resume
          <span aria-hidden>&darr;</span>
        </a>
      </div>
    </div>
  );
}
