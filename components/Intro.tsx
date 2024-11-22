"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
        className="pb-4"
      >
        <Avatar
          src={profilePic}
          alt="Anmoldeep Singh"
          size="xl"
          sizes="112px"
        />
      </motion.div>

      <motion.h1
        className="text-2xl md:text-3xl font-semibold tracking-tight text-primary"
        initial={inAnimation.initial}
        animate={inAnimation.animate}
        transition={inAnimation.transition}
      >
        Hey, I'm Anmoldeep Singh 👋
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
        className="flex items-center flex-wrap gap-2 pt-2"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        {socialLinks.map((item) => (
          <Button
            variant="secondary"
            size="xs"
            asChild
            key={item.label}
            className="group gap-1.5 rounded-full font-normal"
          >
            <Link href={item.href} target="_blank">
              {item.icon}
              {item.label}
              <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground transition-all md:group-hover:text-primary md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        ))}
      </motion.div>
    </section>
  );
}
