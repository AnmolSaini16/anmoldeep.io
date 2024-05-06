"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <header className="z-[999]">
      <motion.nav
        className="w-full flex items-center justify-between pt-8"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.1,
          damping: 10,
        }}
      >
        <Link href="/">
          <h1 className="font-permanent-marker text-2xl text-primary">AS</h1>
        </Link>

        <ul className="flex items-center gap-4 relative">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-1 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
                  link.href === path && "rounded-md text-primary bg-secondary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeSwitcher />
      </motion.nav>
    </header>
  );
}
