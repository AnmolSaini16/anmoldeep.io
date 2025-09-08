import Link from "next/link";
import { StaticImageData } from "next/image";

import { workplaces } from "@/config";
import Avatar from "./ui/Avatar";
import Section from "./section/Section";

export async function WorkPlaces() {
  return (
    <Section heading="Work">
      <div className="space-y-8">
        <p className="text-muted-foreground leading-relaxed">
          I specialize in web development, with expertise in JavaScript,
          TypeScript, React, Next.js, Node.js, Databases, HTML, CSS, and UI/UX.
          Here are some of the places I've worked:
        </p>
        <ul className="space-y-10">
          {workplaces.map((item, index) => (
            <WorkPlace
              key={index}
              isLast={index === workplaces.length - 1}
              {...item}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}

const WorkPlace = ({
  title,
  company,
  time,
  imageSrc,
  link,
  description,
  isLast,
  location,
}: {
  title: string;
  company: string;
  time: string;
  imageSrc: StaticImageData;
  link: string;
  description: string;
  isLast: boolean;
  location: string;
}) => {
  return (
    <li className="relative flex flex-col justify-start sm:pl-20">
      <div className="absolute top-0 -bottom-10 left-0 hidden flex-col items-center sm:flex">
        <div className="z-10 flex items-center justify-center rounded-full border border-neutral-300 bg-white p-2 dark:border-neutral-700 dark:bg-gray-800">
          <Avatar src={imageSrc} alt={company} sizes="40px" />
        </div>

        {!isLast && <div className="bg-muted w-px flex-1" />}
      </div>

      <div className="grow">
        <div>
          <h3 className="text-primary mb-1 leading-none font-semibold">
            {title}
          </h3>

          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary decoration-muted-foreground/50 hover:decoration-primary text-sm font-medium underline underline-offset-4"
          >
            {company}
          </Link>

          <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
            <p>{location}</p>
            <p className="bg-muted-foreground size-1 rounded-full" />
            <time>{time}</time>
          </div>
        </div>

        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
};
