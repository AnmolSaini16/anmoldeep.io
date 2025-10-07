import React from "react";
import { Metadata } from "next";

import { getPosts } from "@/lib/action";
import AnimatedSection from "@/components/section/AnimatedSection";
import { BlogPost } from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A space where I share my thoughts, experiences, and ideas on programming, life, and everything that sparks my curiosity. Stay tuned for more!",
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <AnimatedSection className="space-y-1.5">
      <h1 className="text-2xl font-bold">Blog</h1>

      <p className="text-muted-foreground">
        Sharing thoughts, experiences, and ideas on programming, life, and
        curiosity.
      </p>

      <ul className="flex flex-col gap-6 pt-8">
        {posts?.map((post, index) => (
          <AnimatedSection
            key={post.id}
            delay={0.1 + index * 0.05}
            component="li"
          >
            <BlogPost post={post} />
          </AnimatedSection>
        ))}
      </ul>
    </AnimatedSection>
  );
}
