"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

import { cn, inAnimation } from "@/lib/utils";

function PageSection({
  children,
  className,
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      initial={inAnimation.initial}
      animate={inAnimation.animate}
      transition={inAnimation.transition}
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
  return <h1 className={cn("text-3xl font-bold", className)} {...props} />;
}

function PageDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-base sm:text-lg text-muted-foreground", className)}
      {...props}
    />
  );
}

function PageContent({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={inAnimation.initial}
      animate={inAnimation.animate}
      transition={{ ...inAnimation.transition, delay: 0.12 }}
      className="w-full flex-grow pt-6"
      {...props}
    />
  );
}

export { PageSection, PageHeading, PageDescription, PageContent };
