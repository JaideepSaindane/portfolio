import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 mb-12 md:mb-16">
        <span className="text-sm text-mute num tracking-widest2">{index}</span>
        <h2 className="text-sm md:text-base font-medium tracking-widest2 uppercase">
          {title}
        </h2>
        <div className="flex-1 h-px bg-line" />
        {note && (
          <span className="hidden md:block text-sm text-mute">{note}</span>
        )}
      </div>
    </Reveal>
  );
}
