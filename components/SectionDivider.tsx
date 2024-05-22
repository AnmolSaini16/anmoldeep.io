"use client";

import React from "react";
import { motion } from "framer-motion";

import { inAnimation } from "@/lib/utils";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 h-14 w-1 rounded-full hidden sm:block dark:bg-opacity-20 mx-auto"
      initial={inAnimation.initial}
      animate={inAnimation.animate}
      transition={inAnimation.transition}
    ></motion.div>
  );
}
