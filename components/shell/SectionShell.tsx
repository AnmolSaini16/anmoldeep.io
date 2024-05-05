"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  heading: string;
  children: React.ReactNode;
};

const SectionShell = ({ heading, children }: Props) => {
  return (
    <motion.section
      className={cn(
        "w-full flex flex-col md:flex-row gap-2 md:gap-9 col-reverse justify-between"
      )}
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
