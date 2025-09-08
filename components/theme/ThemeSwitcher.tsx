"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    {
      key: "system",
      icon: Monitor,
      label: "System theme",
    },
    {
      key: "light",
      icon: Sun,
      label: "Light theme",
    },
    {
      key: "dark",
      icon: Moon,
      label: "Dark theme",
    },
  ];

  return (
    <div
      className={cn(
        "ring-border fixed right-5 bottom-4 flex h-8 max-w-8 gap-1 overflow-hidden rounded-full p-1 ring-1 backdrop-blur-sm transition-all",
        "hover:max-w-[120px]",
        theme === "system" && "justify-start",
        theme === "light" && "justify-center",
        theme === "dark" && "justify-end",
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;

        return (
          <button
            type="button"
            key={key}
            className="relative size-6 shrink-0 cursor-pointer rounded-full"
            onClick={() => setTheme(key)}
            aria-label={label}
          >
            {isActive && (
              <motion.div
                layoutId="activeTheme"
                className="bg-secondary absolute inset-0 rounded-full"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <Icon
              className={cn(
                "relative m-auto size-4",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
