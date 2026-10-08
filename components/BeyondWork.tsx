import Image from "next/image";
import { beyondWork } from "@/data/beyondWork";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function BeyondWork() {
  return (
    <section id="beyond-work" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <SectionHeading index="06" title="Beyond Work" />

        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-16 md:gap-y-20">
          {beyondWork.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-ink/[0.03]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-5 left-5 text-[11px] tracking-widest2 uppercase bg-paper/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-mute leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
