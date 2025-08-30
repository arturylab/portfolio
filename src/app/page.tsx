import HeroSection from "@/components/Hero";
import SkillsCards from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsCards />
      <Projects />
      <Experience />
      <Education />
    </>
  );
}
