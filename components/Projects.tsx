"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { projects } from "@/config";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Projects() {
  return (
    <div className="w-full pb-16">
      <div className="flex flex-row items-center justify-between pb-6">
        <Link
          href="https://github.com/AnmolSaini16"
          className="group flex items-center gap-2 text-muted-foreground"
          target="_blank"
        >
          Latest projects
          <ArrowUpRight className="w-5 h-5 transition-all md:group-hover:text-primary md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
        </Link>
      </div>
      <div className="space-y-8">
        {projects.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

const Project = ({
  title,
  description,
  imageSrc,
  link,
  tags,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  link: string;
  tags: string[];
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
      className="group mb-3 md:mb-8 last:mb-0"
    >
      <Link href={link} target="_blank">
        <Card className="w-full overflow-hidden md:pr-8 relative md:min-h-[16rem] transition md:group-odd:pl-8 bg-gray-100 hover:bg-gray-200 dark:bg-primary-foreground dark:hover:bg-white/10">
          <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 md:max-w-[50%] flex flex-col h-full md:group-odd:ml-[18rem] space-y-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="leading-relaxex text-muted-foreground">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border border-gray-300 dark:border-gray-600"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Image
            src={imageSrc}
            alt={title}
            quality={95}
            sizes="452px"
            className="absolute hidden md:block top-12 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-odd:group-hover:translate-x-3
            group-odd:group-hover:translate-y-3
            group-odd:group-hover:rotate-2

            group-odd:right-[initial] group-odd:-left-40"
          />
        </Card>
      </Link>
    </motion.div>
  );
};
