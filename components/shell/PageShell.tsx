"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  heading: string;
  subHeading?: string;
};

const PageShell = ({ children, heading, subHeading }: Props) => {
  return (
    <motion.div
      className="space-y-10"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeIn",
      }}
    >
      <div className="space-y-0.5">
        <p className="font-bold text-xl">{heading}</p>
        <p className="text-muted-foreground">{subHeading}</p>
      </div>

      <motion.div
        className="w-full flex-grow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeIn",
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageShell;
