"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn, inAnimation } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  heading: string;
  subHeading?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const PageShell = ({
  children,
  heading,
  subHeading,
  className,
  ...props
}: Props) => {
  return (
    <div className={cn("space-y-10 md:space-y-16", className)} {...props}>
      <motion.div
        initial={inAnimation.initial}
        animate={inAnimation.animate}
        transition={inAnimation.transition}
        className="space-y-0.5"
      >
        <h1 className="font-bold text-3xl">{heading}</h1>
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
    </div>
  );
};

export default PageShell;
