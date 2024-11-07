import { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import { getPosts } from "@/lib/action";
import BlogPost from "./BlogPost";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <Shell className="max-w-[700px]">
      <PageHeader
        heading="Blog"
        subHeading="I occasionally write about programming. Stay Tuned for more!"
      >
        <div className="flex flex-col gap-6">
          {posts?.map((post) => (
            <BlogPost post={post} key={post.id} />
          ))}
        </div>
      </PageHeader>
    </Shell>
  );
}
