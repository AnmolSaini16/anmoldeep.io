"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import ThemeSwitcher from "./ThemeSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const path = `/${usePathname().split("/")[1]}`;

  return (
    <header className="h-20 md:h-24 z-[999]">
      <motion.nav
        className="container max-w-3xl w-full h-full flex items-center justify-between"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.1,
          damping: 10,
        }}
      >
        <ul className="items-center gap-4 relative hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary transition-all",
                  link.href === path && "text-primary bg-secondary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="relative md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="start"
            className="relative md:hidden"
          >
            {navLinks.map((link) => (
              <DropdownMenuItem
                className={cn(
                  "text-primary focus:bg-transaprent",
                  link.href === path && "bg-accent"
                )}
                key={link.label}
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeSwitcher />
      </motion.nav>
    </header>
  );
}
