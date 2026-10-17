import { ProfessionalTimeline } from "./ProfessionalTimeline";
import { Resume } from "./Resume";
import { Reveal } from "./Reveal";

export function ProfessionalZone() {
  return (
    <div id="professional">
      <div className="px-6 md:px-10 pt-28 pb-12 md:pt-36 md:pb-16 border-t border-line">
        <div className="max-w-content mx-auto">
          <Reveal>
            <span className="text-sm text-mute num tracking-widest2 block mb-5">
              01 — Professional
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tightest mb-4">
              Professional
            </h2>
            <p className="text-lg text-mute max-w-xl">
              The roles, timeline, and credentials behind the work.
            </p>
          </Reveal>
        </div>
      </div>

      <ProfessionalTimeline />
      <Resume />
    </div>
  );
}
