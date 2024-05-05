"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 h-14 w-1 rounded-full hidden sm:block dark:bg-opacity-20 mx-auto"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeIn",
      }}
    ></motion.div>
  );
}
