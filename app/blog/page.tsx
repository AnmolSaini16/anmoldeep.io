import PageShell from "@/components/shell/PageShell";
import { Button } from "@/components/ui/button";
import { blogs } from "@/config";
import Link from "next/link";

export default function Blog() {
  return (
    <PageShell
      heading="Blogs"
      subHeading="I occasionally write about programming. Stay Tuned for more!"
    >
      <div className="space-y-2">
        {blogs.map((blog, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full flex gap-2"
            asChild
          >
            <Link href={blog.link} target="_blank">
              <p className="text-muted-foreground min-w-28 text-left">
                {blog.date}
              </p>
              <p className="text-base truncate text-start">{blog.title}</p>
            </Link>
          </Button>
        ))}
      </div>
    </PageShell>
  );
}
