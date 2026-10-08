import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { CurrentlyBuilding } from "./CurrentlyBuilding";
import { CareerSummary } from "./CareerSummary";
import { ProfilePhoto } from "./ProfilePhoto";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-10 pt-24 pb-16"
    >
      <div className="max-w-content mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8 md:gap-16 mb-10 md:mb-12">
          <Reveal className="flex-1 min-w-0">
            <h1 className="text-[13vw] leading-[0.95] md:text-[6.4vw] font-semibold tracking-tightest uppercase">
              {profile.name}
            </h1>
            <p className="mt-8 md:mt-10 text-sm md:text-lg tracking-widest2 uppercase text-mute">
              {profile.subline}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="shrink-0">
            <div className="relative w-36 h-44 sm:w-44 sm:h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden border border-line">
              <ProfilePhoto src="/images/jaideep.jpg" alt={profile.name} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <CareerSummary />
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 md:mt-10">
            <CurrentlyBuilding items={profile.currentlyBuilding} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
