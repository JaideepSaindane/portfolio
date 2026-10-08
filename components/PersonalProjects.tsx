import { personalProjects } from "@/data/personalProjects";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const statusStyles: Record<string, string> = {
  SHIPPED: "bg-ink text-paper",
  BUILDING: "bg-accent text-paper",
  EXPERIMENTING: "border border-line text-mute",
};

export function PersonalProjects() {
  return (
    <section id="personal-projects" className="px-6 md:px-10 py-28 md:py-36 bg-ink/[0.02]">
      <div className="max-w-content mx-auto">
        <SectionHeading index="04" title="Things I Build" note="Products, not projects" />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {personalProjects.map((p, i) => {
            const items = p.features ?? p.concept ?? [];
            return (
              <Reveal key={p.id} delay={i * 0.08}>
                <div className="h-full flex flex-col justify-between border border-line rounded-2xl p-8 md:p-10 bg-paper hover:border-ink/30 transition-colors duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`text-[11px] tracking-widest2 uppercase px-2.5 py-1 rounded-full ${statusStyles[p.status]}`}
                      >
                        {p.status}
                      </span>
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-mute hover:text-ink transition-colors inline-flex items-center gap-1.5"
                        >
                          Visit <span aria-hidden>↗</span>
                        </a>
                      )}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                      {p.name}
                    </h3>
                    <p className="text-mute text-base md:text-lg leading-relaxed mb-8">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-xs md:text-sm text-ink/80 border border-line px-3 py-1.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
