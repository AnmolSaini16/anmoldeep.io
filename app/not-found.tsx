import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Not found",
};

const Custom404 = (): JSX.Element => (
  <Shell variant="centered">
    <div className="flex items-center flex-col h-full gap-2">
      <iframe
        src="https://giphy.com/embed/BweKhXaocjST6cnWMH"
        width="280"
        height="280"
        allowFullScreen
      ></iframe>
      <p className="text-sm text-muted-foreground">
        <a href="https://giphy.com/gifs/sendwishonline-alien-404-area-51-BweKhXaocjST6cnWMH">
          via GIPHY
        </a>
      </p>

      <h1 className="text-2xl pt-6 font-semibold">Oops! Page Not Found.</h1>

      <Button
        variant="ghost"
        className="underline underline-offset-4 tracking-wide"
        asChild
      >
        <Link href="/">Return home</Link>
      </Button>
    </div>
  </Shell>
);

export default Custom404;
