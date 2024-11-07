import { notFound } from "next/navigation";
import { Metadata } from "next";

import PostContentShell from "@/components/PostContentShell";
import { getPostContent, getPosts } from "@/lib/action";
import { IPost } from "@/types";
import MarkdownComponent from "@/components/Markdown";
import { Shell } from "@/components/Shell";

export async function generateStaticParams() {
  const posts = await getPosts();
  return (
    posts?.map((post) => ({
      id: post.id.toString(),
    })) ?? []
  );
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post: IPost | undefined = await getPostContent(params.id);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
  };
}

export default async function PostContentPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const post: IPost | undefined = await getPostContent(id);

  if (!post) {
    return notFound();
  }

  return (
    <Shell className="max-w-[700px]">
      <PostContentShell post={post}>
        <MarkdownComponent>{post.body_markdown}</MarkdownComponent>
      </PostContentShell>
    </Shell>
  );
}
