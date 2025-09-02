"use client";

import { motion } from "framer-motion";

import profilePic from "@/public/profile.png";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import { Icons } from "./Icons";
import { socialLinks } from "@/config";

export default function Intro() {
  return (
    <section className="flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="pb-1"
      >
        <Avatar src={profilePic} alt="Anmoldeep Singh" size="md" sizes="80px" />
      </motion.div>

      <motion.h1
        className="text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        Anmoldeep Singh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="leading-relaxed text-muted-foreground"
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
              className="inline-flex items-center text-sm gap-1 text-muted-foreground hover:text-primary transition-colors group"
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
