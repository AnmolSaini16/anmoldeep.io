import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

import { cn, formatDate } from "@/lib/utils";
import { IPost } from "@/types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type Props = {
  children: React.ReactNode;
  post: IPost;
} & React.HTMLAttributes<HTMLDivElement>;

const PostSection = ({ children, post, className, ...props }: Props) => {
  return (
    <section className={cn("space-y-8", className)} {...props}>
      <Button
        size="sm"
        variant="link"
        className="group px-0 text-muted-foreground transition-colors hover:text-primary hover:no-underline"
        asChild
      >
        <Link href="/blog">
          <ChevronLeft className="w-4 h-4 mr-1 transition-all text-muted-foreground sm:group-hover:text-primary sm:group-hover:-translate-x-1" />
          Back to blog
        </Link>
      </Button>

      {post?.cover_image && (
        <div className="relative aspect-[16/7] border rounded-md bg-secondary shadow-sm hidden sm:block">
          <Image
            src={post.cover_image}
            alt={post.title}
            className="object-cover rounded-md"
            sizes="(min-width: 780px) 650px, calc(50vw + 270px)"
            fill
          />
        </div>
      )}

      <div>
        <div className="mb-2 text-sm text-muted-foreground flex items-center gap-2">
          <span>{formatDate(post.published_timestamp)}</span>
          {post?.reading_time_minutes && (
            <>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span>{post.reading_time_minutes} min read</span>
            </>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary mb-4">
          {post.title}
        </h1>
        {post?.tags && (
          <div className="flex items-center flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <article>{children}</article>

      <Button
        variant="secondary"
        size="sm"
        className="group tracking-wide"
        asChild
      >
        <Link href={post.url} target="_blank">
          Found this interesting? Leave a like!
          <ArrowUpRight className="w-5 h-5 ml-2 text-muted-foreground transition-all sm:group-hover:text-primary sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" />
        </Link>
      </Button>
    </section>
  );
};

export default PostSection;
