"use client";

import Markdown, { Options } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";

import CodeCopyButton from "./CodeCopyButton";
import { useTheme } from "next-themes";

const MarkdownComponent = (props: Options) => {
  return (
    <Markdown
      {...props}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      components={{
        a: CustomLink,
        pre: CustomPre,
        code: CodeBlock,
      }}
    />
  );
};

const CodeBlock = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const { resolvedTheme } = useTheme();
  const match = /language-(\w+)/.exec(className || "");
  const codeString = String(children).trim();

  if (match) {
    return (
      <div className="not-prose relative">
        <CodeCopyButton code={codeString} />
        <SyntaxHighlighter
          style={resolvedTheme === "dark" ? oneDark : oneLight}
          language={match[1]}
          className="rounded-md"
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <code
      className="bg-muted rounded px-[0.3rem] py-[0.2rem] font-mono"
      {...props}
    >
      {codeString}
    </code>
  );
};

const CustomPre = (props: React.HTMLAttributes<HTMLPreElement>) => (
  <pre className="not-prose" {...props} />
);

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
