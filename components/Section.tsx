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
  openInNewTab?: boolean;
} & HTMLMotionProps<"section">;

const Section = ({
  heading,
  children,
  className,
  showActionBtn = false,
  href = "/",
  linkText,
  openInNewTab = false,
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
      <h2 className="text-left text-lg sm:text-xl font-semibold shrink-0">
        {heading}
      </h2>

      <div className="flex-grow">{children}</div>

      {showActionBtn && (
        <Button
          variant="ghost"
          size="sm"
          className="group w-fit mx-auto"
          asChild
        >
          <Link
            href={href}
            target={openInNewTab ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {linkText}
            <ArrowUpRight className="w-4 h-4 ml-1.5 text-muted-foreground transition-all sm:group-hover:text-primary sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      )}
    </motion.section>
  );
};

export default Section;
