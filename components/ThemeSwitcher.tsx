"use client";

import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

import { Button } from "./ui/button";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IoSunny className="size-5 text-orange-300 fill-orange-300 hidden dark:block" />
      <IoMoon className="size-5 fill-primary text-primary block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
