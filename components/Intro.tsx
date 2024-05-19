"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config";
import profilePic from "@/public/profile.png";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeIn",
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeIn",
        }}
      >
        Anmoldeep Singh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeIn",
        }}
        className="max-w-lg leading-relaxed break-words text-muted-foreground"
      >
        Hello! I'm a software engineer with a passion for building web
        applications. I thrive on creating meaningful experiences through code
        and love bringing ideas to life!
      </motion.p>

      <motion.div
        className="flex items-center gap-2 flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: 0.1,
          damping: 10,
        }}
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
