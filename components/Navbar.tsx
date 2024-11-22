"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
      <nav className="container max-w-[700px] w-full h-full flex items-center justify-between">
        <ul className="items-center gap-4 relative hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "relative px-3 py-2 rounded-md text-sm font-medium tracking-wide hover:text-primary transition-colors",
                  link.href === path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.href === path && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 -z-10 rounded-md bg-secondary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

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
            className="space-y-1 relative md:hidden"
          >
            {navLinks.map((link) => (
              <DropdownMenuItem
                className={cn(
                  "text-primary font-medium tracking-wide focus:bg-transaprent",
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
      </nav>
    </header>
  );
}
