"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn, inAnimation } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  heading: string;
  subHeading?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const PageSection = ({
  heading,
  subHeading,
  children,
  className,
  ...props
}: Props) => {
  return (
    <section className={cn("space-y-14", className)} {...props}>
      <motion.div
        initial={inAnimation.initial}
        animate={inAnimation.animate}
        transition={inAnimation.transition}
        className="space-y-1"
      >
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary">
          {heading}
        </h1>
        {subHeading && <p className="text-muted-foreground">{subHeading}</p>}
      </motion.div>

      <motion.div
        initial={inAnimation.initial}
        animate={inAnimation.animate}
        transition={{ ...inAnimation.transition, delay: 0.18 }}
        className="w-full flex-grow"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default PageSection;
