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
    <section className="space-y-4">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: "-40%" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
        className="pb-2"
      >
        <Avatar
          src={profilePic}
          alt="Anmoldeep Singh"
          size="lg"
          sizes="112px"
        />
      </motion.div>

      <motion.h1
        className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary"
        initial={inAnimation.initial}
        animate={inAnimation.animate}
        transition={inAnimation.transition}
      >
        Hey, I'm Anmoldeep Singh! 👋
      </motion.h1>

      <motion.p
        initial={inAnimation.initial}
        animate={inAnimation.animate}
        transition={inAnimation.transition}
        className="leading-relaxed break-words text-muted-foreground"
      >
        I'm a software engineer with a passion for building web applications. I
        thrive on creating meaningful experiences through code and love bringing
        ideas to life!
      </motion.p>

      <motion.div
        className="flex items-center flex-wrap gap-x-6 gap-y-1"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        {socialLinks.map((item) => (
          <Button
            variant="link"
            size="sm"
            asChild
            key={item.label}
            className="px-0 text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 hover:no-underline"
          >
            <Link href={item.href} target="_blank">
              <item.icon className="size-4" />
              {item.label}
            </Link>
          </Button>
        ))}
      </motion.div>
    </section>
  );
}
