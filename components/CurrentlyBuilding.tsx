"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function CurrentlyBuilding({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 2200);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div className="inline-flex items-center gap-2.5 text-sm">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <span className="text-mute">Currently building —</span>
      <span className="relative inline-block min-w-[9.5rem] h-5 overflow-hidden align-middle">
        <AnimatePresence mode="wait">
          <motion.span
            key={items[index]}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0 font-medium text-ink"
          >
            {items[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
