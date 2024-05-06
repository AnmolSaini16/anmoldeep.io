import Link from "next/link";

import { workplaces } from "@/config";
import Avatar from "./Avatar";
import SectionShell from "./shell/SectionShell";

export async function WorkPlaces() {
  return (
    <SectionShell heading="Work">
      <div className="space-y-8">
        <p className="leading-relaxed">
          I specialize in web development, with expertise in JavaScript,
          TypeScript, React, Next.js, Node.js, Databases, HTML, CSS, and UI/UX.
          Here are some of the places I've worked:
        </p>
        <ul className="space-y-8">
          {workplaces.map((item, index) => (
            <li className="flex w-full justify-between" key={index}>
              <div className="flex items-center gap-2">
                <Avatar
                  src={item.imageSrc}
                  alt={item.company}
                  sizes="(min-width: 400px) 40px, calc(11.25vw - 3px)"
                />
                <div>
                  <p>{item.title}</p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-muted-foreground hover:underline"
                  >
                    {item.company}
                  </Link>
                </div>
              </div>
              <p className="text-muted-foreground">{item.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
