import Link from "next/link";

import { formatDate } from "@/lib/utils";
import { IPost } from "@/types";

export default function BlogPost({ post }: { post: IPost }) {
  return (
    <article className="relative flex flex-col gap-1">
      <h1 className="font-semibold text-lg flex-grow">{post.title}</h1>
      <p className="text-muted-foreground line-clamp-1">{post.description}</p>
      {post.published_timestamp && (
        <p className="text-sm text-muted-foreground">
          {formatDate(post.published_timestamp)}
        </p>
      )}

      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0"
        aria-label={`View ${post.title}`}
      >
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
}
