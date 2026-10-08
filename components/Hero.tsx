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
        <Reveal>
          <h1 className="text-[13vw] leading-[0.95] md:text-[6.4vw] font-semibold tracking-tightest uppercase mb-10 md:mb-14">
            {profile.name}
          </h1>
        </Reveal>

        {/* mobile photo — shown above the subline, not sticky */}
        <Reveal delay={0.08} className="md:hidden mb-8">
          <div className="relative w-40 h-52 rounded-2xl overflow-hidden border border-line">
            <ProfilePhoto src="/images/jaideep.jpg" alt={profile.name} />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_320px] gap-10 md:gap-16 items-start">
          <div>
            <Reveal delay={0.1}>
              <p className="text-sm md:text-lg tracking-widest2 uppercase text-mute mb-10 md:mb-14">
                {profile.subline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <CareerSummary />
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 md:mt-10">
                <CurrentlyBuilding items={profile.currentlyBuilding} />
              </div>
            </Reveal>
          </div>

          {/* desktop photo — sticks alongside the content as it scrolls */}
          <Reveal delay={0.15} className="hidden md:block md:sticky md:top-28">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-line">
              <ProfilePhoto src="/images/jaideep.jpg" alt={profile.name} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
