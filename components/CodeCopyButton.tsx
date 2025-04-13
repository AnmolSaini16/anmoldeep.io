"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "./ui/button";

export default function CodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <Button
      className="absolute right-1.5 top-1.5 z-10 p-0 size-8 transition-colors bg-neutral-800 hover:bg-neutral-700"
      variant="ghost"
      size="icon"
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="size-4 text-emerald-500" />
      ) : (
        <Copy className="size-4 text-gray-400" />
      )}
    </Button>
  );
}
