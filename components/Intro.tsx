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
    <section className="flex flex-col gap-4">
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
        className="text-3xl font-bold tracking-tight text-primary"
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
        className="flex items-center gap-3 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1 + index * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full"
              asChild
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="size-4" />
              </Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
