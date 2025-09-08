"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

function PageSection({
  children,
  className,
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn("space-y-1.5", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}

function PageHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn("text-2xl font-bold", className)} {...props} />;
}

function PageDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-base text-muted-foreground", className)}
      {...props}
    />
  );
}

function PageContent({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.12 }}
      className="w-full grow pt-8"
      {...props}
    />
  );
}

export { PageSection, PageHeading, PageDescription, PageContent };
