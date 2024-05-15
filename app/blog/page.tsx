import Link from "next/link";
import { Metadata } from "next";

import PageShell from "@/components/shell/PageShell";
import SectionShell from "@/components/shell/SectionShell";
import { blogs } from "@/config";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <PageShell
      heading="Blog"
      subHeading="I occasionally write about programming. Stay Tuned for more!"
    >
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <SectionShell heading={blog.date} key={index}>
            <Link
              href={blog.link}
              target="_blank"
              className="w-full transition-all hover:underline"
            >
              <p className="text-base truncate">{blog.title}</p>
            </Link>
          </SectionShell>
        ))}
      </div>
    </PageShell>
  );
}
