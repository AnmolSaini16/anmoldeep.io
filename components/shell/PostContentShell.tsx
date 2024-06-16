import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { cn, formatDate } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { Badge } from "../ui/badge";
import { IPost } from "@/types";
import { Button } from "../ui/button";

type Props = {
  children: React.ReactNode;
  post: IPost;
} & React.HTMLAttributes<HTMLDivElement>;

const PostContentShell = ({ children, post, className, ...props }: Props) => {
  return (
    <div className={cn("space-y-10", className)} {...props}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" passHref>
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog" passHref>
                Blog
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.title.slice(0, 20) + " ..."}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {post?.cover_image && (
        <div className="relative h-[275px] w-full border rounded-md bg-secondary shadow-sm hidden sm:block">
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
        <div className="mb-2 flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            {formatDate(post.published_timestamp)}
          </p>
          {post?.reading_time_minutes && (
            <>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <p className="text-sm text-muted-foreground">
                {post.reading_time_minutes} min read
              </p>
            </>
          )}
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary mb-4">
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

      <div>{children}</div>

      <div>
        <Button
          variant="secondary"
          size="xs"
          asChild
          className="group gap-1.5 rounded-full font-normal"
        >
          <Link href={post.url} target="_blank">
            Found this interesting? Leave a like!
            <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground transition-all md:group-hover:text-primary md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PostContentShell;
