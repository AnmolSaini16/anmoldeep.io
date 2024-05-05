import SectionShell from "@/components/shell/SectionShell";
import { WorkPlaces } from "@/components/WorkPlaces";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SesctionDivider";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {/* Intro */}
      <Intro />

      <SectionDivider />

      {/* About */}
      <About />

      {/* Current Work */}
      <WorkPlaces />

      {/* Projects Glimpse */}
      <Projects />
    </div>
  );
}
