import Link from "next/link";
import Image from "next/image";

import { cn, formatDate } from "@/lib/utils";
import { IPost } from "@/types";
import { Button } from "./ui/button";
import { Icons } from "./Icons";

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
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Icons.calender className="size-4" />
            <time dateTime={post.published_timestamp}>
              {formatDate(post.published_timestamp)}
            </time>
          </div>

          {post?.reading_time_minutes && (
            <div className="flex items-center gap-1.5">
              <Icons.clock className="size-4" />
              <span>{post.reading_time_minutes} min read</span>
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-gray dark:prose-invert">
        {children}
      </article>

      {/* Call to Action */}
      <div className="border-t pt-8">
        <Button
          variant="secondary"
          className="group font-medium tracking-wide"
          asChild
        >
          <Link href={post.url} target="_blank" rel="noopener noreferrer">
            Found this interesting? Leave a like!
            <Icons.arrowUpRight className="size-4 ml-1.5 text-muted-foreground transition-all sm:group-hover:text-primary sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default PostSection;
