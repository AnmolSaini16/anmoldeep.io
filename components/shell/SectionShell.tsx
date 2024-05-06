"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

type Props = {
  heading: string;
  children: React.ReactNode;
} & HTMLMotionProps<"section">;

const SectionShell = ({ heading, children, ...props }: Props) => {
  return (
    <motion.section
      className={cn(
        "w-full flex flex-col md:flex-row gap-2 md:gap-9 col-reverse justify-between",
        props.className
      )}
      {...props}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeIn",
      }}
    >
      <h2 className="text-left text-muted-foreground shrink-0 w-32">
        {heading}
      </h2>
      {children}
    </motion.section>
  );
};

export default SectionShell;
