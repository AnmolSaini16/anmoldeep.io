"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  heading: string;
  subHeading?: string;
} & HTMLMotionProps<"div">;

const PageShell = ({ children, heading, subHeading, ...props }: Props) => {
  return (
    <motion.div
      className={cn("space-y-10", props.className)}
      {...props}
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeIn",
          delay: 0.17,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageShell;
