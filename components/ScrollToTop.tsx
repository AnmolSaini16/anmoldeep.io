"use client";

import { useState, useEffect } from "react";

import { Button } from "./ui/button";
import { Icons } from "./Icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Button
          size="icon"
          variant="outline"
          className="fixed bottom-20 right-4 bg-background/75 hidden md:flex"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <Icons.arrowUp />
        </Button>
      )}
    </>
  );
}
