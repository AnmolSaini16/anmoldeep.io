import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Not found",
};

const Custom404 = (): JSX.Element => (
  <Shell variant="centered">
    <div className="flex items-center flex-col h-full gap-4">
      <iframe
        src="https://giphy.com/embed/BweKhXaocjST6cnWMH"
        width="280"
        height="280"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/sendwishonline-alien-404-area-51-BweKhXaocjST6cnWMH">
          via GIPHY
        </a>
      </p>
      <p className="text-muted-foreground">Uh oh! This page does not exists.</p>

      <Button variant="ghost" asChild>
        <Link href="/">Return home</Link>
      </Button>
    </div>
  </Shell>
);

export default Custom404;
