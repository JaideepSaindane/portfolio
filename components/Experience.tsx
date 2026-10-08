import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <SectionHeading index="02" title="Experience" />

        <div className="space-y-20 md:space-y-28">
          {experience.map((company) => (
            <div
              key={company.company}
              className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-16"
            >
              <Reveal>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {company.company}
                </h3>
              </Reveal>

              <div>
                {company.roles.map((role, i) => (
                  <Reveal key={role.role} delay={i * 0.06}>
                    <div
                      className={`pb-10 mb-10 border-b border-line last:border-0 last:mb-0 last:pb-0`}
                    >
                      {i > 0 && (
                        <span className="text-xs tracking-widest2 uppercase text-mute block mb-3">
                          Previously
                        </span>
                      )}
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-5">
                        <h4 className="text-xl md:text-2xl font-medium">
                          {role.role}
                        </h4>
                        <span className="text-sm text-mute num shrink-0">
                          {role.dates}
                        </span>
                      </div>
                      <ul className="space-y-2.5 mb-6">
                        {role.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-mute text-base md:text-lg leading-relaxed flex gap-3"
                          >
                            <span className="text-accent mt-1 shrink-0">
                              —
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] tracking-widest uppercase text-mute border border-line px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
