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
        <h2 className="text-left text-lg sm:text-xl font-semibold shrink-0">
          {heading}
        </h2>

        {showActionBtn && (
          <Button size="sm" variant="link" className="group px-0" asChild>
            <Link href={href} target="_blank">
              {linkText}
              <ArrowUpRight className="w-5 h-5 ml-2 transition-all text-muted-foreground sm:group-hover:text-primary sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        )}
      </div>

      {children}
    </motion.section>
  );
};

export default Section;
