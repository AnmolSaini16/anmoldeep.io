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
        "relative inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle bg-secondary",
        size === "sm" && "h-10 w-10 min-w-10",
        size === "md" && "h-18 w-18 min-w-18",
        size === "lg" && "h-28 w-28 min-w-28"
      )}
    >
      <Image src={src} alt={alt || ""} sizes={sizes ?? ""} fill />
    </div>
  );
}
