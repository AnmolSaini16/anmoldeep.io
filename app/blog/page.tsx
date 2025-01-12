import React from "react";
import { Metadata } from "next";
import Link from "next/link";

import { getPosts } from "@/lib/action";
import { Shell } from "@/components/Shell";
import {
  PageSection,
  PageHeading,
  PageDescription,
  PageContent,
} from "@/components/PageSection";
import { formatDate } from "@/lib/utils";
import { IPost } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <PageHeading>Blog ✍️</PageHeading>
        <PageDescription>
          Sharing thoughts, experiences, and ideas on programming, life, and
          curiosity.
        </PageDescription>
        <PageContent>
          <ul className="space-y-4">
            {posts?.map((post) => (
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

const BlogPost = ({ post }: { post: IPost }) => (
  <Link
    href={`/blog/${post.slug}`}
    aria-label={`View ${post.title}`}
    className=""
  >
    <Card className="size-full overflow-hidden transition sm:hover:bg-secondary/40 border border-dashed">
      <CardHeader className="p-4 pb-1">
        <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-sm text-muted-foreground flex items-center gap-2">
        <span>{formatDate(post.published_timestamp)}</span>
        {post?.page_views_count && (
          <>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>
              {post.page_views_count}{" "}
              {post.page_views_count === 1 ? "view" : "views"}
            </span>
          </>
        )}
      </CardContent>
    </Card>
  </Link>
);
