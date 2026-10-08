"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { WorkProject } from "@/data/work";

export function CaseStudyModal({
  project,
  onClose,
}: {
  project: WorkProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] bg-paper overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-content mx-auto px-6 md:px-10 pt-24 pb-24 md:pt-32"
          >
            <div className="flex items-center justify-between mb-16 md:mb-20">
              <span className="text-sm text-mute num tracking-widest2">
                {project.index} — SELECTED WORK
              </span>
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-line hover:border-ink transition-colors"
              >
                <span className="text-lg leading-none">&times;</span>
              </button>
            </div>

            <h2 className="font-serif italic text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-4">
              {project.title}
            </h2>
            <p className="text-sm md:text-base tracking-widest uppercase text-mute mb-10">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-16 md:mb-24">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-widest uppercase text-mute border border-line px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {project.stack?.map((s) => (
                <span
                  key={s}
                  className="text-[11px] tracking-widest uppercase text-paper bg-ink px-2.5 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 md:gap-y-16">
              {project.caseStudy.map((section) => (
                <div
                  key={section.label}
                  className="border-t border-line pt-6"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs text-accent num tracking-widest2">
                      {section.label}
                    </span>
                    <h3 className="text-xs tracking-widest2 uppercase text-mute">
                      {section.heading}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-20 md:mt-28 text-sm tracking-widest2 uppercase text-mute hover:text-ink transition-colors inline-flex items-center gap-2"
            >
              <span>&larr;</span> Back to work
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
