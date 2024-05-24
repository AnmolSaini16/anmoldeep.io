import Link from "next/link";
import Image from "next/image";

import { formatDate } from "@/lib/utils";
import { IPost } from "@/types";
import { Separator } from "@/components/ui/separator";

export default function BlogPost({
  post,
  index,
}: {
  post: IPost;
  index: number;
}) {
  return (
    <>
      <article className="group relative flex items-start justify-between gap-8">
        <div className="space-y-1">
          <h2 className="font-semibold text-lg">{post.title}</h2>
          {post.description && (
            <p className="text-muted-foreground leading-snug">
              {post.description}
            </p>
          )}

          {post.published_timestamp && (
            <p className="text-sm text-muted-foreground pt-1.5">
              {formatDate(post.published_timestamp)}
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

        <Link href={post.url} target="_blank" className="absolute inset-0">
          <span className="sr-only">View Article</span>
        </Link>
      </article>
      <Separator className="last:hidden" />
    </>
  );
}
