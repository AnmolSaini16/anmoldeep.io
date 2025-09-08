import Section from "./section/Section";

export default function About() {
  return (
    <Section heading="About">
      <div className="text-muted-foreground space-y-4 leading-relaxed">
        <p>
          I&apos;ve been immersed in the world of coding for more than{" "}
          {new Date().getFullYear() - 2022} years now. It all started during my
          third year of college when I discovered my passion for Web
          Development, and since then, there&apos;s been no turning back.
        </p>

        <p>
          I&apos;ve honed my skills as a software engineer, specializing in
          full-stack web development. Crafting websites and applications is not
          just my job; it&apos;s my calling, and I pour my heart into every
          project I undertake.
        </p>

        <p>
          When I&apos;m not glued to my desk, you&apos;ll likely find me at the
          gym, swimming, reading blogs/books 😊.
        </p>
      </div>
    </Section>
  );
}
