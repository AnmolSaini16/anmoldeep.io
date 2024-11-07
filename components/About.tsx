import Section from "./Section";

export default function About() {
  return (
    <Section heading="About">
      <div className="space-y-6 leading-relaxed">
        <p>
          I've been immersed in the world of coding for{" "}
          {new Date().getFullYear() - 2021} years now. It all started during my
          third year of college when I discovered my passion for Web
          Development, and since then, there's been no turning back.
        </p>

        <p>
          I've honed my skills as a software engineer, specializing in
          full-stack web development. Crafting websites and applications is not
          just my job; it's my calling, and I pour my heart into every project I
          undertake.
        </p>

        <p>
          When I&apos;m not glued to my desk, you'll likely find me at the gym,
          cycling, reading blogs/books 😊.
        </p>
      </div>
    </Section>
  );
}
