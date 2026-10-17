import { PersonalProjects } from "./PersonalProjects";
import { Reveal } from "./Reveal";

export function BuildsZone() {
  return (
    <div id="builds" className="bg-ink text-paper">
      <div className="px-6 md:px-10 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-content mx-auto">
          <Reveal>
            <span className="font-mono text-sm text-accent tracking-widest2 block mb-5">
              02 — Experiments
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tightest mb-4">
              Things I Build
            </h2>
            <p className="text-lg text-paper/60 max-w-xl">
              A playground for AI, code, and new ideas — products, not just
              projects.
            </p>
          </Reveal>
        </div>
      </div>

      <PersonalProjects />
    </div>
  );
}
