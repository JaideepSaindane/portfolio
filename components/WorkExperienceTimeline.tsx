import { experience } from "@/data/experience";
import { Reveal } from "./Reveal";

const roles = experience
  .flatMap((company) =>
    company.roles.map((role) => ({ ...role, company: company.company }))
  )
  .reverse();

export function WorkExperienceTimeline() {
  return (
    <div>
      <h3 className="text-[11px] tracking-widest2 uppercase text-mute mb-6">
        Work Experience
      </h3>

      <div className="relative">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line" />

        <div className="flex flex-col gap-8">
          {roles.map((role, i) => (
            <Reveal key={`${role.company}-${role.role}`} delay={i * 0.06}>
              <div className="relative flex gap-5">
                <span className="relative z-10 mt-1.5 w-[11px] h-[11px] rounded-full bg-ink shrink-0" />
                <div>
                  <span className="block text-xs tracking-widest2 uppercase text-accent mb-1.5">
                    {role.dates}
                  </span>
                  <h4 className="text-base md:text-lg font-medium leading-snug mb-1">
                    {role.role}
                  </h4>
                  <p className="text-mute text-sm uppercase tracking-wide">
                    {role.company}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
