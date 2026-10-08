import { experience } from "@/data/experience";
import { education } from "@/data/resume";
import { links } from "@/data/links";
import { profile } from "@/data/profile";

export function ShortVersion() {
  const companies = experience.map((e) => e.company).join(" · ");

  return (
    <div className="border-t border-line pt-8 md:pt-10">
      <span className="text-xs tracking-widest2 uppercase text-mute block mb-6 md:mb-8">
        The Short Version
      </span>

      <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-x-10 gap-y-8 items-start">
        <div>
          <h3 className="text-[11px] tracking-widest2 uppercase text-mute mb-3">
            Experience
          </h3>
          <p className="text-base md:text-lg font-medium leading-snug mb-1.5">
            {profile.facts[0]}
          </p>
          <p className="text-mute text-sm">{companies}</p>
        </div>

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

        <div className="sm:self-center">
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ink text-paper text-sm tracking-widest2 uppercase px-6 py-3.5 rounded-full hover:bg-accent transition-colors duration-300 whitespace-nowrap"
          >
            Download Resume
            <span aria-hidden>&darr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
