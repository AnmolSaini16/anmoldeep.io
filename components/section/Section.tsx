"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../Icons";

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
      className={cn("flex w-full flex-col gap-4", className)}
      {...props}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="text-primary shrink-0 text-lg font-bold tracking-tight">
        {heading}
      </h2>

      <div className="grow">{children}</div>

      {showActionBtn && href && linkText && (
        <Link
          href={href}
          target={externalLink ? "_blank" : "_self"}
          rel={externalLink ? "noopener noreferrer" : undefined}
          className="text-muted-foreground hover:text-primary group mx-auto mt-1 inline-flex items-center gap-1 text-sm transition-colors"
        >
          {linkText}
          <Icons.arrowUpRight className="size-3.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </motion.section>
  );
};

export default Section;
