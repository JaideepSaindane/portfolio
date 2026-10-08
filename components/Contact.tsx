import { profile } from "@/data/profile";
import { links } from "@/data/links";
import { Reveal } from "./Reveal";
import { ProfilePhoto } from "./ProfilePhoto";

const contactLinks = [
  { label: "Email", href: `mailto:${links.email}` },
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  { label: "Resume", href: links.resume },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-28 md:py-40 border-t border-line"
    >
      <div className="max-w-content mx-auto">
        <Reveal>
          <h2 className="text-[13vw] md:text-[7.5vw] leading-[0.95] font-semibold tracking-tightest uppercase mb-16 md:mb-20">
            Let&rsquo;s build
            <br />
            something.
          </h2>
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 md:gap-10">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 bg-ink/[0.04]">
                <ProfilePhoto src="/images/jaideep.jpg" alt={profile.name} />
              </div>
              <div>
                <p className="text-lg md:text-xl font-medium">
                  {profile.name}
                </p>
                <p className="text-mute">{profile.role}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm tracking-widest2 uppercase text-mute hover:text-ink transition-colors border-b border-transparent hover:border-ink pb-1"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
