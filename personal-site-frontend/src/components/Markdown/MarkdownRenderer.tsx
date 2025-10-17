/**
 * Markdown renderer with syntax highlighting and KaTeX support
 */

"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
import Link from "next/link";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-lg dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
        components={{
          // Custom image component using Next/Image
          img: ({ src, alt }) => {
            if (!src || typeof src !== 'string') return null;
            return (
              <span className="block my-6">
                <Image
                  src={src}
                  alt={alt || ""}
                  width={800}
                  height={600}
                  className="rounded-lg"
                  style={{ width: "100%", height: "auto" }}
                />
              </span>
            );
          },
          // Custom link component
          a: ({ href, children }) => {
            if (!href) return <>{children}</>;
            
            // Internal links
            if (href.startsWith("/") || href.startsWith("#")) {
              return (
                <Link href={href} className="text-primary hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                  {children}
                </Link>
              );
            }
            
            // External links
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {children}
              </a>
            );
          },
          // Custom code block
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !match;

            if (isInline) {
              return (
                <code
                  className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          // Headings with anchor links
          h1: ({ children, ...props }) => (
            <h1 id={slugify(String(children))} {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 id={slugify(String(children))} {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 id={slugify(String(children))} {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 id={slugify(String(children))} {...props}>
              {children}
            </h4>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

