import { Timeline } from "./Timeline";
import { Experience } from "./Experience";
import { SelectedWork } from "./SelectedWork";
import { Resume } from "./Resume";
import { Reveal } from "./Reveal";

export function CareerZone() {
  return (
    <div id="career">
      <div className="px-6 md:px-10 pt-28 pb-12 md:pt-36 md:pb-16 border-t border-line">
        <div className="max-w-content mx-auto">
          <Reveal>
            <span className="text-sm text-mute num tracking-widest2 block mb-5">
              01 — Career
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tightest mb-4">
              Professional
            </h2>
            <p className="text-lg text-mute max-w-xl">
              My credibility, experience, and the work behind it.
            </p>
          </Reveal>
        </div>
      </div>

      <Timeline />
      <Experience />
      <SelectedWork />
      <Resume />
    </div>
  );
}
