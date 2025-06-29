import Image from "next/image";
import Link from "next/link";

import { cn, formatDate } from "@/lib/utils";
import { IPost } from "@/types";
import { Icons } from "./Icons";
import { Separator } from "./ui/separator";

type Props = {
  children: React.ReactNode;
  post: IPost;
} & React.HTMLAttributes<HTMLDivElement>;

const PostSection = ({ children, post, className, ...props }: Props) => {
  return (
    <section className={cn("flex flex-col gap-8", className)} {...props}>
      <Link
        href="/blog"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors group w-fit"
      >
        <Icons.arrowLeft className="size-3.5 transition-all group-hover:-translate-x-0.5" />
        <span>Back to Blog</span>
      </Link>

      {/* Cover Image */}
      {post?.cover_image && (
        <div className="relative aspect-[21/9] overflow-hidden rounded-lg border bg-muted shadow-md hidden sm:block">
          <Image
            src={post.cover_image}
            alt={post.title}
            className="object-cover"
            sizes="(min-width: 1024px) 900px, (min-width: 768px) 700px, 100vw"
            priority
            fill
          />
        </div>
      )}

      {/* Post Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Icons.calendar className="size-3.5" />
            <time dateTime={post.published_timestamp}>
              {formatDate(post.published_timestamp, {
                month: "short",
                day: "2-digit",
                year: "2-digit",
              })}
            </time>
          </div>

          <div className="size-1 bg-muted-foreground rounded-full" />

          {Boolean(post?.reading_time_minutes) && (
            <div className="flex items-center gap-1.5">
              <Icons.clock className="size-3.5" />
              <span>{post.reading_time_minutes} min read</span>
            </div>
          )}
        </div>
      </div>

      <Separator className="w-20 h-0.5" />

      {/* Article Content */}
      <article>{children}</article>
    </section>
  );
};

export default PostSection;
