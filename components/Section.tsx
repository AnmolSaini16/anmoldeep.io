"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn, inAnimation } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  heading: string;
  children: React.ReactNode;
  href?: string;
  showActionBtn?: boolean;
  linkText?: string;
} & HTMLMotionProps<"section">;

const Section = ({
  heading,
  children,
  className,
  showActionBtn = false,
  href = "/",
  linkText,
  ...props
}: Props) => {
  return (
    <motion.section
      className={cn("w-full flex flex-col gap-4", className)}
      {...props}
      initial={inAnimation.initial}
      animate={inAnimation.animate}
      transition={inAnimation.transition}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-left text-muted-foreground text-lg md:text-xl font-medium tracking-tight shrink-0 leading-[1.1]">
          {heading}
        </h2>

        {showActionBtn && (
          <Link
            href={href}
            className="group flex items-center gap-2 text-muted-foreground text-sm"
            target="_blank"
          >
            {linkText}
            <ArrowUpRight className="w-5 h-5 transition-all md:group-hover:text-primary md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>

      {children}
    </motion.section>
  );
};

export default Section;
