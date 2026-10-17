import { profile } from "@/data/profile";
import { links } from "@/data/links";
import { Reveal } from "./Reveal";
import { ProfilePhoto } from "./ProfilePhoto";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-center px-6 md:px-10 pt-28 pb-0"
    >
      <div className="max-w-content mx-auto w-full">
        <div className="grid md:grid-cols-[1.1fr_auto] gap-12 md:gap-10 items-center">
          <div>
            <Reveal>
              <p className="text-xs md:text-sm tracking-widest2 uppercase text-mute mb-6">
                {profile.subline}
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.05] font-bold tracking-tightest mb-6">
                {profile.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-base md:text-lg text-mute leading-relaxed max-w-xl mb-10">
                {profile.description.map((part, i) => (
                  <span
                    key={i}
                    className={part.bold ? "font-semibold text-ink" : undefined}
                  >
                    {part.text}
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 bg-accent text-paper text-sm font-medium px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity duration-300"
                >
                  View my work
                  <span aria-hidden>&rarr;</span>
                </a>
                <a
                  href={links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-line text-sm font-medium px-6 py-3.5 rounded-full hover:border-ink transition-colors duration-300"
                >
                  <span aria-hidden>&darr;</span>
                  Download resume
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="justify-self-center">
            <div className="flex items-center gap-6">
              <div className="relative shrink-0">
                <div className="absolute -top-5 -left-5 text-accent rotate-[-8deg] z-10">
                  <svg width="44" height="44" viewBox="0 0 60 60" fill="none">
                    <path
                      d="M50 45 C 35 15, 20 10, 12 12"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 12 L14 22 M12 12 L22 14"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-line">
                  <ProfilePhoto src="/images/jaideep.jpg" alt={profile.name} />
                </div>
              </div>

              <div className="hidden lg:flex flex-col gap-1 font-hand text-2xl text-ink/80 shrink-0">
                {profile.sideWords.map((word, i) => (
                  <span key={word} className="relative leading-tight">
                    {word}
                    {i === profile.sideWords.length - 1 && (
                      <svg
                        className="absolute -bottom-1.5 left-0 text-accent"
                        width="80"
                        height="10"
                        viewBox="0 0 80 10"
                        fill="none"
                      >
                        <path
                          d="M2,5 Q10,0 20,5 T40,5 T60,5 T78,5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 mt-16 md:mt-20 py-10 md:py-12 border-t border-line">
            {profile.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-2 ${i > 0 ? "md:border-l md:border-line" : ""}`}
              >
                <p className="text-3xl md:text-4xl font-bold tracking-tight mb-1.5">
                  {stat.value}
                </p>
                <p className="text-sm text-mute">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
