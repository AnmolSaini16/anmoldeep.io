import Markdown, { Options } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

const MarkdownComponent = (props: Options) => {
  return (
    <Markdown
      {...props}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        a: CustomLink,
      }}
    />
  );
};

const CustomLink = ({
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return href ? (
    <Link
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline-offset-4"
    />
  ) : null;
};

export default MarkdownComponent;
