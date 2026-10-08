"use client";

import { useState } from "react";
import Image from "next/image";

export function ProfilePhoto({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-ink/[0.04] text-mute text-xs tracking-widest2 uppercase text-center px-4">
        Add photo at
        <br />
        /public/images/jaideep.jpg
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 768px) 320px, 220px"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
