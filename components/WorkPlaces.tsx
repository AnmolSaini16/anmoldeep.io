import Link from "next/link";
import { StaticImageData } from "next/image";

import { workplaces } from "@/config";
import Avatar from "./Avatar";
import Section from "./Section";
import { Separator } from "./ui/separator";
import { Icons } from "./Icons";

export async function WorkPlaces() {
  return (
    <Section heading="Work">
      <div className="space-y-8">
        <p className="leading-relaxed text-muted-foreground">
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
      <div className="absolute top-0 left-0 hidden sm:flex flex-col items-center h-full">
        <div className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center z-10 bg-white dark:bg-gray-800">
          <Avatar src={imageSrc} alt={company} sizes="40px" />
        </div>

        {!isLast && <Separator orientation="vertical" />}
      </div>

      <div className="flex-grow space-y-3">
        <div className="space-y-1.5">
          <h3 className="font-semibold leading-none text-primary">{title}</h3>

          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-primary text-sm font-medium"
          >
            {company}
            <Icons.arrowUpRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-all sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
          </Link>

          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <p>{location}</p>
            <p className="size-1 bg-muted-foreground rounded-full" />
            <time>{time}</time>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
};
