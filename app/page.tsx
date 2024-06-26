import { WorkPlaces } from "@/components/WorkPlaces";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";

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
