"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { cn, inAnimation } from "@/lib/utils";
import { Button } from "./ui/button";
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
  const LinkIcon = externalLink ? Icons.externalLink : Icons.arrowUpRight;
  return (
    <motion.section
      className={cn("w-full flex flex-col gap-6", className)}
      {...props}
      initial={inAnimation.initial}
      animate={inAnimation.animate}
      transition={inAnimation.transition}
    >
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight shrink-0">
          {heading}
        </h1>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex-grow">{children}</div>

      {showActionBtn && href && linkText && (
        <Button
          variant="ghost"
          size="sm"
          className="group inline-flex items-center w-fit mx-auto gap-1.5 tracking-wide"
          asChild
        >
          <Link
            href={href}
            target={externalLink ? "_blank" : "_self"}
            rel={externalLink ? "noopener noreferrer" : undefined}
          >
            {linkText}
            <LinkIcon className="size-4 text-muted-foreground transition-all sm:group-hover:text-primary sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      )}
    </motion.section>
  );
};

export default Section;
