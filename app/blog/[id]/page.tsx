import { redirect } from "next/navigation";

import PostContentShell from "@/components/shell/PostContentShell";
import { getPostContent } from "@/lib/action";
import { IPost } from "@/types";
import MarkdownComponent from "@/components/Markdown";

export default async function PostContentPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const post: IPost | undefined = await getPostContent(id);

  if (!post) {
    return redirect("/404");
  }

  return (
    <PostContentShell post={post}>
      <MarkdownComponent>{post.body_markdown}</MarkdownComponent>
    </PostContentShell>
  );
}
