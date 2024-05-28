import { Metadata } from "next";

import PageShell from "@/components/shell/PageShell";
import { getPosts } from "@/lib/action";
import BlogPost from "./BlogPost";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <PageShell
      heading="Blog"
      subHeading="I occasionally write about programming. Stay Tuned for more!"
    >
      <div className="flex flex-col gap-6 md:gap-8">
        {posts?.map((post, index) => (
          <BlogPost post={post} index={index} key={post.id} />
        ))}
      </div>
    </PageShell>
  );
}
