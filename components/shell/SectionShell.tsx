"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { cn, inAnimation } from "@/lib/utils";

type Props = {
  heading: string;
  children: React.ReactNode;
} & HTMLMotionProps<"section">;

const SectionShell = ({ heading, children, className, ...props }: Props) => {
  return (
    <motion.section
      className={cn(
        "w-full flex flex-col md:flex-row gap-2 md:gap-9 col-reverse justify-between",
        className
      )}
      {...props}
      initial={inAnimation.initial}
      animate={inAnimation.animate}
      transition={inAnimation.transition}
    >
      <h2 className="text-left text-muted-foreground shrink-0 w-32">
        {heading}
      </h2>
      {children}
    </motion.section>
  );
};

export default SectionShell;
