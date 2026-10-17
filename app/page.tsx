import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CareerZone } from "@/components/CareerZone";
import { BuildsZone } from "@/components/BuildsZone";
import { PersonalZone } from "@/components/PersonalZone";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CareerZone />
        <BuildsZone />
        <PersonalZone />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
