import { notFound } from "next/navigation";
import { Metadata } from "next";

import PostSection from "@/components/PostSection";
import { getPost, getPosts } from "@/lib/action";
import { IPost } from "@/types";
import MarkdownComponent from "@/components/Markdown";
import { Shell } from "@/components/Shell";
import { siteConfig } from "@/config";

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
  params: { slug: string };
}): Promise<Metadata> {
  const post: IPost | undefined = await getPost(params.slug);

  if (!post) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      ...siteConfig.openGraph,
      title: post.title,
      description: post.description,
      images: post.cover_image
        ? [{ url: post.cover_image as string, alt: post.title }]
        : undefined,
    },
  };
}

export default async function PostContentPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post: IPost | undefined = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <Shell className="max-w-[700px]">
      <PostSection post={post}>
        <MarkdownComponent>{post.body_markdown}</MarkdownComponent>
      </PostSection>
    </Shell>
  );
}
