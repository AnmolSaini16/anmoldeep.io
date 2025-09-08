import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
};

const Custom404 = (): JSX.Element => (
  <section>
    <div className="flex h-full flex-col items-center gap-2">
      <iframe
        src="https://giphy.com/embed/8L0Pky6C83SzkzU55a"
        width="150"
        height="150"
        className="giphy-embed rounded shadow-sm"
        title="404 GIF"
      ></iframe>

      <h1 className="mt-6 text-3xl font-bold">Lost in the void? 🚀</h1>
      <p className="text-muted-foreground max-w-md text-center">
        Sorry, the page you were looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="bg-secondary hover:bg-secondary/80 mt-6 rounded-md px-4 py-2 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  </section>
);

export default Custom404;
