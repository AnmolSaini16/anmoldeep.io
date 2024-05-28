import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Suspense } from "react";

import { formatDate } from "@/lib/utils";
import { IPost } from "@/types";
import { getPostVIews } from "@/lib/action";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPost({
  post,
  index,
}: {
  post: IPost;
  index: number;
}) {
  const postViewsPromise = getPostVIews(post.id);
  return (
    <>
      <article className="group relative flex items-start justify-between gap-8">
        <div className="space-y-0.5 min-w-0">
          <h2 className="font-semibold">{post.title}</h2>
          {post.description && (
            <p className="text-muted-foreground leading-snug truncate">
              {post.description}
            </p>
          )}
          <div className="flex items-center justify-between pt-1">
            {post.published_timestamp && (
              <p className="text-sm text-muted-foreground">
                {formatDate(post.published_timestamp)}
              </p>
            )}
            <Suspense fallback={<Skeleton className="w-10 h-5" />}>
              <PostViews postViewsPromise={postViewsPromise} />
            </Suspense>
          </div>
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
    </>
  );
}

const PostViews = async ({
  postViewsPromise,
}: {
  postViewsPromise: Promise<number | undefined>;
}) => {
  const postViews = await postViewsPromise;

  return (
    <>
      {postViews !== undefined && (
        <p className="text-sm text-muted-foreground flex items-center gap-0.5">
          <Eye className="w-4 h-4" />
          {postViews?.toLocaleString()}
        </p>
      )}
    </>
  );
};
