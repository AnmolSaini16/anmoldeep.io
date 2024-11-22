import React from "react";
import { Metadata } from "next";

import PageSection from "@/components/PageSection";
import { getPosts } from "@/lib/action";
import BlogPost from "./BlogPost";
import { Shell } from "@/components/Shell";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <Shell className="max-w-[700px]">
      <PageSection
        heading="Blog"
        subHeading="I occasionally write about programming. Stay Tuned for more!"
      >
        <div className="flex flex-col">
          {posts?.map((post, index) => (
            <React.Fragment key={post.id}>
              <BlogPost post={post} />
              {index !== posts.length - 1 && <Separator className="my-6" />}
            </React.Fragment>
          ))}
        </div>
      </PageSection>
    </Shell>
  );
}
