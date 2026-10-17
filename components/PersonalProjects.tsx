import { personalProjects } from "@/data/personalProjects";
import { Reveal } from "./Reveal";

const statusStyles: Record<string, string> = {
  SHIPPED: "bg-paper text-ink",
  BUILDING: "bg-accent text-paper",
  EXPERIMENTING: "border border-paper/30 text-paper/60",
};

export function PersonalProjects() {
  return (
    <section
      id="personal-projects"
      className="px-6 md:px-10 pb-28 md:pb-36"
    >
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {personalProjects.map((p, i) => {
            const items = p.features ?? p.concept ?? [];
            return (
              <Reveal key={p.id} delay={i * 0.08}>
                <div className="h-full flex flex-col justify-between border border-paper/15 rounded-2xl p-8 md:p-10 bg-paper/[0.04] hover:border-paper/30 transition-colors duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`font-mono text-[11px] tracking-widest2 uppercase px-2.5 py-1 rounded-full ${statusStyles[p.status]}`}
                      >
                        {p.status}
                      </span>
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-paper/60 hover:text-paper transition-colors inline-flex items-center gap-1.5"
                        >
                          Visit <span aria-hidden>↗</span>
                        </a>
                      )}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-paper">
                      {p.name}
                    </h3>
                    <p className="text-paper/60 text-base md:text-lg leading-relaxed mb-8">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs md:text-sm text-paper/70 border border-paper/15 px-3 py-1.5 rounded-full"
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
