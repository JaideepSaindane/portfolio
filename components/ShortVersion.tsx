import { experience } from "@/data/experience";
import { education } from "@/data/resume";
import { links } from "@/data/links";

const roles = experience.flatMap((company) =>
  company.roles.map((role) => ({
    ...role,
    company: company.company,
  }))
);

export function ShortVersion() {
  return (
    <div className="border-t border-line pt-8 md:pt-10">
      <span className="text-xs tracking-widest2 uppercase text-mute block mb-6 md:mb-8">
        The Short Version
      </span>

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

      <div className="grid sm:grid-cols-[1fr_auto] gap-x-10 gap-y-6 items-start mt-8 pt-8 border-t border-line">
        <div>
          <h3 className="text-[11px] tracking-widest2 uppercase text-mute mb-3">
            Work Experience
          </h3>
          <ul className="space-y-3">
            {roles.map((role) => (
              <li key={`${role.company}-${role.role}`} className="flex gap-3">
                <span className="w-1 h-1 rounded-full bg-ink/40 mt-2.5 shrink-0" />
                <p className="text-sm leading-snug">
                  <span className="font-medium">{role.role}</span>
                  <span className="text-mute"> ({role.dates})</span>
                  <br className="sm:hidden" />
                  <span className="text-mute italic"> — {role.company}</span>
                </p>
              </li>
            ))}
          </ul>
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
