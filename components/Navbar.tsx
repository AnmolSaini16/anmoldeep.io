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
  const path = usePathname();

  return (
    <header className="z-[999]">
      <motion.nav
        className="w-full flex items-center justify-between pt-4 md:pt-8"
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
        <ul className="items-center gap-4 relative hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors",
                  link.href === path && "text-primary bg-secondary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto md:ml-0">
          <ThemeSwitcher />
        </div>

        <div className="relative md:hidden">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="relative md:hidden">
              {navLinks.map((link) => (
                <Link href={link.href} key={link.label}>
                  <DropdownMenuItem
                    className={cn(
                      "text-primary focus:bg-transaprent",
                      link.href === path && "text-primary bg-accent"
                    )}
                  >
                    {link.label}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.nav>
    </header>
  );
}
