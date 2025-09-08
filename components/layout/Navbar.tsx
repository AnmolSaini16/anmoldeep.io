"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Icons } from "../Icons";

const navLinks = [
  { label: "Home", href: "/", icon: Icons.home },
  { label: "Blog", href: "/blog", icon: Icons.blog },
  {
    label: "Contact",
    href: "/contact",
    icon: Icons.contact,
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const path = `/${usePathname().split("/")[1]}`;

  return (
    <motion.header
      className="z-999 h-20 sm:h-24"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="relative container flex size-full max-w-[700px] items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <Link href="/" className="font-mono font-bold">
            Anmol.
          </Link>
        </motion.div>

        <motion.ul
          className="relative flex items-center gap-6"
          initial="hidden"
          animate="show"
          variants={listVariants}
        >
          {navLinks.map(({ label, href }) => (
            <motion.li key={label} variants={itemVariants}>
              <Link
                href={href}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  href === path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
}
