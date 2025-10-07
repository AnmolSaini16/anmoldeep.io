"use client";

import { motion } from "framer-motion";

import profilePic from "@/public/profile.png";
import Avatar from "@/components/ui/Avatar";
import Link from "next/link";
import { socialLinks } from "@/config";
import AnimatedSection from "./section/AnimatedSection";

export default function Intro() {
  return (
    <AnimatedSection className="flex flex-col gap-3">
      <Avatar src={profilePic} alt="Anmoldeep Singh" size="md" sizes="80px" />

      <h1 className="mt-1 text-3xl font-semibold tracking-tight">
        Anmoldeep Singh
      </h1>

      <p className="text-muted-foreground leading-relaxed">
        I'm a software engineer with a passion for building web applications. I
        thrive on creating meaningful experiences through code and love bringing
        ideas to life!
      </p>

      <div className="flex flex-wrap items-center gap-6">
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
              className="decoration-muted-foreground/50 hover:decoration-primary underline underline-offset-4 transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
