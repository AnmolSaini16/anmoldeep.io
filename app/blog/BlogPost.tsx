import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { formatDate } from "@/lib/utils";
import { IPost } from "@/types";

export default function BlogPost({
  post,
  index,
}: {
  post: IPost;
  index: number;
}) {
  return (
    <>
      <article className="group relative flex items-start justify-between gap-6">
        <div className="space-y-0.5 min-w-0">
          {post.published_timestamp && (
            <p className="text-sm text-muted-foreground pb-1 flex items-center gap-1">
              {formatDate(post.published_timestamp)}
              <ArrowRight className="opacity-0 sm:group-hover:opacity-100 transition-opacity ease-in-out duration-200 text-primary w-4 h-4" />
            </p>
          )}
          <h2 className="font-semibold">{post.title}</h2>
          {post.description && (
            <p className="text-muted-foreground leading-snug truncate">
              {post.description}
            </p>
          )}
        </div>

        {post?.cover_image && (
          <div className="relative aspect-[2/1] h-24 w-48 min-w-48 border rounded-md bg-secondary shadow-sm hidden md:block">
            <Image
              src={post.cover_image}
              alt={post.title}
              className="object-cover rounded-md"
              sizes="198px"
              fill
              priority={index <= 1}
            />
          </div>
        )}

        <Link href={"/blog/" + post?.id} className="absolute inset-0">
          <span className="sr-only">View Article</span>
        </Link>
      </article>
    </>
  );
}
