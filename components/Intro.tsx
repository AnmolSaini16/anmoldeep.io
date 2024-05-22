"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import profilePic from "@/public/profile.png";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config";
import Avatar from "@/components/Avatar";
import { inAnimation } from "@/lib/utils";

export default function Intro() {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: "-40%" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
      >
        <Avatar
          src={profilePic}
          alt="Anmoldeep Singh"
          size="lg"
          sizes="112px"
        />
      </motion.div>

      <motion.h1
        className="text-3xl font-bold tracking-tight text-primary"
        initial={inAnimation.initial}
        animate={inAnimation.animate}
        transition={inAnimation.transition}
      >
        Anmoldeep Singh
      </motion.h1>

      <motion.p
        initial={inAnimation.initial}
        animate={inAnimation.animate}
        transition={inAnimation.transition}
        className="max-w-lg leading-relaxed break-words text-muted-foreground"
      >
        Hello! I'm a software engineer with a passion for building web
        applications. I thrive on creating meaningful experiences through code
        and love bringing ideas to life!
      </motion.p>

      <motion.div
        className="flex items-center gap-2 flex-wrap"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        {socialLinks.map((item) => (
          <Button variant="ghost" size="icon" asChild key={item.label}>
            <Link href={item.href} target="_blank">
              {item.icon}
            </Link>
          </Button>
        ))}
      </motion.div>
    </div>
  );
}
