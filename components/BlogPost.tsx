import Link from "next/link";

import { IPost } from "@/types";
import { formatDate } from "@/lib/utils";

export const BlogPost = ({ post }: { post: IPost }) => (
  <Link
    href={`/blog/${post.slug}`}
    aria-label={`Read ${post.title}`}
    className="group"
  >
    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm py-2 border-b group-hover:border-primary/40 transition-all">
      <span className="text-muted-foreground text-left min-w-[50px] mb-1 sm:mb-0 sm:mr-4 group-hover:text-primary transition-colors">
        {formatDate(post.published_timestamp)}
      </span>

      <span className="flex-1 pl-0 sm:pl-2 truncate font-medium text-primary">
        {post.title}
      </span>
    </div>
  </Link>
);
