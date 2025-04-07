import Image from "next/image";

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
      {/* Cover Image */}
      {post?.cover_image && (
        <div className="relative aspect-[21/9] overflow-hidden rounded-lg border bg-muted shadow-md hidden sm:block">
          <Image
            src={post.cover_image}
            alt={post.title}
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(min-width: 1024px) 900px, (min-width: 768px) 700px, 100vw"
            priority
            fill
          />
        </div>
      )}

      {/* Post Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Icons.calender className="size-3.5" />
            <time dateTime={post.published_timestamp}>
              {formatDate(post.published_timestamp)}
            </time>
          </div>

          {post?.reading_time_minutes && (
            <div className="flex items-center gap-1.5">
              <Icons.clock className="size-3.5" />
              <span>{post.reading_time_minutes} min read</span>
            </div>
          )}
        </div>
      </div>

      <Separator className="w-20 h-0.5" />

      {/* Article Content */}
      <article className="prose prose-gray dark:prose-invert">
        {children}
      </article>
    </section>
  );
};

export default PostSection;
