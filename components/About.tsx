import SectionShell from "./shell/SectionShell";

export default function About() {
  return (
    <SectionShell heading="About">
      <div className="space-y-8">
        <p>
          Hi, I&apos;m Brian, born in Honduras and raised in Houston, Texas. I
          have been coding for {new Date().getFullYear() - 2021} years. As a
          software engineer, I specialize in full-stack web development and
          product design.
        </p>

        <p>
          When I&apos;m not at my desk, I am probably lifting weights, playing
          soccer, riding my e-bike, or at a local coffee shop :]
        </p>
      </div>
    </SectionShell>
  );
}
