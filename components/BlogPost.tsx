"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { IPost } from "@/types";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "./Icons";

export const BlogPost = ({ post }: { post: IPost }) => (
  <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="size-full overflow-hidden transition sm:hover:bg-secondary/40 border-dashed">
        <CardHeader className="p-4">
          <CardTitle className="text-xl tracking-tight transition-colors group-hover:text-primary">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-4 pt-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Icons.calender className="size-3.5" />
              <time dateTime={post.published_timestamp}>
                {formatDate(post.published_timestamp)}
              </time>
            </div>

            {post.reading_time_minutes && (
              <div className="flex items-center gap-1.5">
                <Icons.clock className="size-3.5" />
                <span>{post.reading_time_minutes} min read</span>
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  </Link>
);
