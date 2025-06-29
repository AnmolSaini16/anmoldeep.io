"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Navbar() {
  const path = `/${usePathname().split("/")[1]}`;

  return (
    <header className="h-20 sm:h-24 z-[999]">
      <nav className="container max-w-[700px] size-full flex items-center justify-between relative">
        <Link href="/" className="font-bold font-mono">
          Anmol.
        </Link>

        <ul className="items-center gap-6 relative hidden sm:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
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
    </header>
  );
}
