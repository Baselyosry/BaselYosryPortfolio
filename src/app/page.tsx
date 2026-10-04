import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { CaseStudyLibrary } from "@/components/sections/CaseStudyLibrary";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { CaseStudyDialog } from "@/components/sections/CaseStudyDialog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <CaseStudyLibrary />
      <Experience />
      <TechStack />
      <Contact />
      <CaseStudyDialog />
    </>
  );
}
