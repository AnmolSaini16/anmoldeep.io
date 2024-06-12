import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type Props = { children: string };

const MarkdownComponent = ({ children }: Props) => {
  return (
    <div className="prose dark:prose-invert dark:prose-pre:bg-primary-foreground">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        children={children}
      />
    </div>
  );
};

export default MarkdownComponent;
