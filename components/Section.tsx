"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { cn, inAnimation } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./Icons";

type Props = {
  heading: string;
  children: React.ReactNode;
  href?: string;
  linkText?: string;
  showActionBtn?: boolean;
  externalLink?: boolean;
} & HTMLMotionProps<"section">;

const Section = ({
  heading,
  children,
  className,
  href,
  linkText,
  showActionBtn = false,
  externalLink = false,
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
      <h1 className="text-lg font-bold tracking-tight shrink-0 text-primary">
        {heading}
      </h1>

      <div className="flex-grow">{children}</div>

      {showActionBtn && href && linkText && (
        <Link
          href={href}
          target={externalLink ? "_blank" : "_self"}
          rel={externalLink ? "noopener noreferrer" : undefined}
          className="mt-1 mx-auto inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          {linkText}
          <Icons.arrowUpRight className="size-3.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </motion.section>
  );
};

export default Section;
