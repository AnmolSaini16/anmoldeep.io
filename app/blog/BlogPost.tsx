import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { formatDate } from "@/lib/utils";
import { IPost } from "@/types";

export default function BlogPost({ post }: { post: IPost }) {
  return (
    <article className="group relative">
      {post.published_timestamp && (
        <p className="text-sm text-muted-foreground pb-1 flex items-center gap-1">
          {formatDate(post.published_timestamp)}
          <ArrowRight className="opacity-0 sm:group-hover:opacity-100 transition-opacity ease-in-out duration-200 text-primary w-4 h-4" />
        </p>
      )}
      <h2 className="font-semibold">{post.title}</h2>

      <Link href={"/blog/" + post?.id} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
}
