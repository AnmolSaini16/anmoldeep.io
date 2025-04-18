"use client";

import Link from "next/link";
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

export default function Navbar() {
  const path = `/${usePathname().split("/")[1]}`;

  return (
    <header className="h-16 sm:h-20 z-[999]">
      <nav className="container max-w-[700px] size-full flex items-center justify-between">
        <ul className="items-center gap-6 relative hidden sm:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`relative py-2.5 px-1 text-sm font-medium tracking-wide transition-colors ${
                  href === path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {href === path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 bg-primary w-full h-0.5 rounded"
                  />
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="relative sm:hidden">
            <Button variant="ghost" size="icon">
              <Icons.menu className="h-5 w-5" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="start"
            className="space-y-1 sm:hidden"
          >
            {navLinks.map((link) => (
              <DropdownMenuItem
                className={cn(
                  "text-primary font-medium tracking-wide py-2",
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

        <ThemeSwitcher />
      </nav>
    </header>
  );
}
