import Link from "next/link";
import { StaticImageData } from "next/image";

import { workplaces } from "@/config";
import Avatar from "./Avatar";
import Section from "./Section";
import { Separator } from "./ui/separator";

export async function WorkPlaces() {
  return (
    <Section heading="Work">
      <div className="space-y-8">
        <p className="leading-relaxed">
          I specialize in web development, with expertise in JavaScript,
          TypeScript, React, Next.js, Node.js, Databases, HTML, CSS, and UI/UX.
          Here are some of the places I've worked:
        </p>
        <ul className="space-y-8">
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
}: {
  title: string;
  company: string;
  time: string;
  imageSrc: StaticImageData;
  link: string;
  description: string;
  isLast: boolean;
}) => {
  return (
    <li className="relative flex flex-col justify-start pl-20">
      <div className="absolute top-0 left-0 flex flex-col items-center h-full">
        <div className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center z-10 bg-white dark:bg-gray-800">
          <Avatar
            src={imageSrc}
            alt={company}
            sizes="(min-width: 400px) 40px, calc(11.25vw - 3px)"
          />
        </div>

        {!isLast && <Separator orientation="vertical" />}
      </div>

      <div>
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-1">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-xs uppercase text-muted-foreground">{time}</p>
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline text-blue-400"
        >
          {company}
        </Link>
        <p className="text-muted-foreground mt-1.5 leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
};
