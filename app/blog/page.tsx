import React from "react";
import { Metadata } from "next";

import { getPosts } from "@/lib/action";
import BlogPost from "./BlogPost";
import { Shell } from "@/components/Shell";
import {
  PageSection,
  PageHeading,
  PageDescription,
  PageContent,
} from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A space where I share my thoughts, experiences, and ideas on programming, life, and everything that sparks my curiosity. Stay tuned for more!",
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <Shell className="max-w-[700px]">
      <PageSection>
        <PageHeading>Blog</PageHeading>
        <PageDescription>
          A space where I share my thoughts, experiences, and ideas on
          programming, life, and everything that sparks my curiosity. Stay tuned
          for more!
        </PageDescription>
        <PageContent>
          <ul className="flex flex-col gap-4">
            {posts?.map((post, index) => (
              <li key={post.id}>
                <BlogPost post={post} />
              </li>
            ))}
          </ul>
        </PageContent>
      </PageSection>
    </Shell>
  );
}
