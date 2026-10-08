import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
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
