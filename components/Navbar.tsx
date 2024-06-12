"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookText, Home, Menu, SquareUser } from "lucide-react";
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
  { label: "Home", href: "/", icon: Home },
  { label: "Blog", href: "/blog", icon: BookText },
  { label: "Contact", href: "/contact", icon: SquareUser },
];

export default function Navbar() {
  const path = `/${usePathname().split("/")[1]}`;

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
        <ul className="items-center gap-4 relative hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "px-2.5 py-1.5 rounded-lg text-sm text-muted-foreground flex items-center hover:text-primary transition-colors",
                  link.href === path && "text-primary bg-secondary"
                )}
              >
                <link.icon className="w-4 h-4 mr-2" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
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
                <Link href={link.href} key={link.label}>
                  <DropdownMenuItem
                    className={cn(
                      "text-primary text-base focus:bg-transaprent flex items-center gap-2",
                      link.href === path && "bg-accent"
                    )}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <ThemeSwitcher />
        </div>
      </motion.nav>
    </header>
  );
}
