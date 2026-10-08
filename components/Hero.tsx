import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { CurrentlyBuilding } from "./CurrentlyBuilding";
import { ShortVersion } from "./ShortVersion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-10 pt-24 pb-16"
    >
      <div className="max-w-content mx-auto w-full">
        <Reveal>
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-6 h-px bg-accent" />
            <span className="text-xs tracking-widest2 uppercase text-mute">
              {profile.role}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="text-[13vw] leading-[0.95] md:text-[6.4vw] font-semibold tracking-tightest uppercase mb-10 md:mb-12">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl leading-[1.15] max-w-3xl mb-8 text-ink">
            {profile.tagline[0]}
            <br />
            {profile.tagline[1]}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-xs md:text-sm tracking-widest2 uppercase text-mute mb-12 md:mb-14">
            {profile.subline}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ShortVersion />
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
