import Link from "next/link";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

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
    <article className="group relative flex flex-col space-y-2">
      <div className="relative hidden align-middle select-none items-center justify-center overflow-hidden w-full h-[150px] rounded-sm bg-secondary md:inline-flex">
        {post?.cover_image ? (
          <Image
            src={post.cover_image}
            alt={post.title}
            className="object-cover rounded-sm"
            sizes="335px"
            fill
            priority={index <= 1}
          />
        ) : (
          <ImageIcon className="h-8 w-8" />
        )}
      </div>

      <h2 className="font-extrabold">{post.title}</h2>
      {post.description && (
        <p className="text-muted-foreground truncate">{post.description}</p>
      )}

      {post.published_timestamp && (
        <p className="text-sm text-muted-foreground">
          {formatDate(post.published_timestamp)}
        </p>
      )}

      <Link href={post.url} target="_blank" className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
}
