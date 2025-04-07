"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { projects } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Section from "./Section";
import { Button } from "./ui/button";
import { Icons } from "./Icons";

export default function Projects() {
  return (
    <Section
      heading="Latest Projects"
      linkText="Check out more on GitHub"
      href="https://github.com/AnmolSaini16"
      showActionBtn
      externalLink
    >
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

const Project = ({
  title,
  description,
  imageSrc,
  github,
  demo,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  github: string;
  demo?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <Card className="size-full overflow-hidden border-dashed">
        <CardHeader className="p-4">
          <div className="overflow-hidden rounded-md bg-muted relative aspect-video">
            <Image
              src={imageSrc}
              alt={title}
              className="object-cover"
              quality={95}
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 768px) 400px, 100vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-1.5">
          <CardTitle className="line-clamp-1 text-lg font-bold">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex gap-2">
            <Button size="sm" className="h-8 w-8 p-0" variant="ghost" asChild>
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code`}
              >
                <Icons.github className="size-4" />
              </Link>
            </Button>
            {demo && (
              <Button size="sm" className="h-8 w-8 p-0" variant="ghost" asChild>
                <Link
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} live demo`}
                >
                  <Icons.link className="size-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
