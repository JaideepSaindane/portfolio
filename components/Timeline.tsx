import { timeline } from "@/data/timeline";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Timeline() {
  return (
    <section id="journey" className="px-6 md:px-10 py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto">
        <SectionHeading index="02" title="The Journey" />

        <div className="relative">
          {/* connecting line — horizontal on desktop, vertical on mobile */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line md:left-0 md:right-0 md:top-[5px] md:w-auto md:h-px md:bottom-auto" />

          <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6">
            {timeline.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="relative md:flex-1"
              >
                <div className="flex md:flex-col items-start gap-5 md:gap-0">
                  <span className="relative z-10 mt-1 md:mt-0 w-[11px] h-[11px] rounded-full bg-ink shrink-0 md:mb-6" />
                  <div className="md:pr-6">
                    <span className="block text-xs tracking-widest2 uppercase text-accent mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-medium text-base md:text-lg leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-mute text-sm uppercase tracking-wide">
                      {item.place}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
