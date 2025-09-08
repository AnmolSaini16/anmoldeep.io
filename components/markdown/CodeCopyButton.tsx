"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

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
    <button
      className="absolute top-1.5 right-1.5 inline-flex size-8 items-center justify-center rounded-md bg-zinc-800 p-0 transition-colors hover:bg-zinc-700"
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="size-4 text-emerald-500" />
      ) : (
        <Copy className="size-4 text-gray-400" />
      )}
    </button>
  );
}
