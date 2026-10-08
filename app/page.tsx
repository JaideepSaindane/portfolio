import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Experience } from "@/components/Experience";
import { SelectedWork } from "@/components/SelectedWork";
import { PersonalProjects } from "@/components/PersonalProjects";
import { BeyondWork } from "@/components/BeyondWork";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Experience />
        <SelectedWork />
        <PersonalProjects />
        <BeyondWork />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
