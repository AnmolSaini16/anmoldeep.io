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
  CardHeader,
  CardTitle,
} from "./ui/card";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      heading="Latest Projects"
      linkText="View All"
      href="https://github.com/AnmolSaini16"
      showActionBtn
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </Section>
  );
}

const Project = ({
  title,
  description,
  imageSrc,
  link,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  link: string;
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
      <Link href={link} target="_blank" aria-label={`View ${title} project`}>
        <Card className="size-full overflow-hidden transition sm:hover:bg-secondary/40 border border-dashed">
          <CardHeader className="p-4 aspect-[16/9] shado">
            <Image
              src={imageSrc}
              alt={title}
              quality={95}
              className="object-cover size-full"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="line-clamp-1 tracking-normal text-base">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-2 leading-normal">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
