import { BeyondWork } from "./BeyondWork";
import { Reveal } from "./Reveal";

export function PersonalZone() {
  return (
    <div id="personal" className="bg-cream">
      <div className="px-6 md:px-10 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-content mx-auto">
          <Reveal>
            <span className="font-serif italic text-base text-green block mb-5">
              03 — Personal
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tightest mb-4">
              My Little World
            </h2>
            <p className="text-lg text-mute max-w-xl">
              A personal corner of the internet — aquascapes, writing, and
              whatever I&rsquo;m exploring outside of work.
            </p>
          </Reveal>
        </div>
      </div>

      <BeyondWork />
    </div>
  );
}
