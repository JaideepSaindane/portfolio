"use client";

import { useState } from "react";
import { work, type WorkProject } from "@/data/work";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CaseStudyModal } from "./CaseStudyModal";

export function SelectedWork() {
  const [active, setActive] = useState<WorkProject | null>(null);

  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">
        <SectionHeading index="04" title="Selected Work" note="Click any project for the full case study" />

        <div className="divide-y divide-line border-t border-line">
          {work.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <button
                onClick={() => setActive(project)}
                className="group w-full text-left py-10 md:py-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 transition-colors hover:bg-ink/[0.02] -mx-6 px-6 md:-mx-10 md:px-10"
              >
                <span className="text-sm text-mute num tracking-widest2 md:w-12 shrink-0">
                  {project.index}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                    <h3 className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs md:text-sm tracking-widest uppercase text-mute">
                      {project.subtitle}
                    </span>
                  </div>
                  <p className="text-mute text-base md:text-lg max-w-2xl mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.highlights.map((h) => (
                      <span key={h} className="text-sm text-ink/80">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="hidden md:flex items-center gap-2 text-sm tracking-widest2 uppercase text-mute group-hover:text-ink group-hover:gap-3 transition-all duration-300 shrink-0">
                  View
                  <span aria-hidden>&rarr;</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <CaseStudyModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
