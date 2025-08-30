import HeroSection from "@/components/Hero";
import SkillsCards from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsCards />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
