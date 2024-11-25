import { WorkPlaces } from "@/components/WorkPlaces";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import About from "@/components/About";
import { Shell } from "@/components/Shell";

export default function Home() {
  return (
    <Shell className="max-w-[700px]">
      <Intro />

      <About />

      <WorkPlaces />

      <Projects />
    </Shell>
  );
}
