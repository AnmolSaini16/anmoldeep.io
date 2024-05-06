import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

export default function Avatar({
  src,
  alt,
  sizes,
  size = "sm",
}: {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "relative inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle font-medium uppercase text-primary bg-secondary",
        size === "sm" && "h-10 w-10 text-sm",
        size === "md" && "h-18 w-18 text-base",
        size === "lg" && "h-28 w-28 text-2xl"
      )}
    >
      <Image src={src} alt={alt || ""} sizes={sizes ?? ""} fill />
    </div>
  );
}
