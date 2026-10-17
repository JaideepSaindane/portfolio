import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProfessionalZone } from "@/components/ProfessionalZone";
import { ProjectsZone } from "@/components/ProjectsZone";
import { PersonalZone } from "@/components/PersonalZone";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProfessionalZone />
        <ProjectsZone />
        <PersonalZone />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
