"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import profilePic from "@/public/profile.png";
import { socialLinks } from "@/config";
import Avatar from "@/components/Avatar";
import { inAnimation } from "@/lib/utils";
import { Icons } from "./Icons";

export default function Intro() {
  return (
    <section className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: "-45%" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
        className="pb-2"
      >
        <Avatar src={profilePic} alt="Anmoldeep Singh" size="md" sizes="80px" />
      </motion.div>

      <motion.h1
        className="text-2xl font-bold tracking-tight text-primary"
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
        className="flex items-center gap-4 flex-wrap"
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
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>{link.label}</span>
              <Icons.arrowUpRight className="size-3.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
