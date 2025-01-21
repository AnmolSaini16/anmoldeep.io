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
        src="https://giphy.com/embed/8L0Pky6C83SzkzU55a"
        width="150"
        height="150"
        className="giphy-embed rounded shadow"
        title="404 GIF"
      ></iframe>

      <h1 className="text-3xl font-bold mt-4">Lost in the void? 🚀</h1>
      <p className="text-base text-muted-foreground text-center max-w-md">
        Sorry, the page you were looking for doesn’t exist.
      </p>

      <Button variant="outline" className="tracking-wide mt-4" asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  </Shell>
);

export default Custom404;
