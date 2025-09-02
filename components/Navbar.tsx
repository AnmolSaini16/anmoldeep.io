"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Icons } from "./Icons";

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
      className="h-20 sm:h-24 z-[999]"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="container max-w-[700px] size-full flex items-center justify-between relative">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <Link href="/" className="font-bold font-mono">
            Anmol.
          </Link>
        </motion.div>

        <motion.ul
          className="items-center gap-6 relative hidden sm:flex"
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="relative sm:hidden">
            <Button variant="ghost" size="icon">
              <Icons.menu className="h-5 w-5" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="end"
            className="space-y-1 sm:hidden z-[1000]"
          >
            {navLinks.map((link) => (
              <DropdownMenuItem
                className={cn(
                  "text-primary tracking-wide py-2",
                  link.href === path && "bg-accent"
                )}
                key={link.label}
                asChild
              >
                <Link href={link.href}>
                  <link.icon className="w-4 h-4 mr-2" />
                  <span>{link.label}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </motion.header>
  );
}
