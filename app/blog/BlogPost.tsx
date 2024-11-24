import Link from "next/link";

import { formatDate } from "@/lib/utils";
import { IPost } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogPost({ post }: { post: IPost }) {
  return (
    <Link href={`/blog/${post.slug}`} aria-label={`View ${post.title}`}>
      <Card className="size-full transition sm:hover:bg-secondary/40 border border-dashed">
        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-lg sm:text-xl">{post.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-xs text-muted-foreground">
            {formatDate(post.published_timestamp)}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
