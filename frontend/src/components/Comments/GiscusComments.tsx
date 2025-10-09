/**
 * Giscus comments component with fallback
 */

"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface GiscusCommentsProps {
  term?: string;
  className?: string;
}

const GISCUS_REPO = process.env.NEXT_PUBLIC_GISCUS_REPO;
const GISCUS_REPO_ID = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
const GISCUS_CATEGORY = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
const GISCUS_CATEGORY_ID = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

export default function GiscusComments({ term, className = "" }: GiscusCommentsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!ref.current || !GISCUS_REPO) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", GISCUS_REPO);
    script.setAttribute("data-repo-id", GISCUS_REPO_ID || "");
    script.setAttribute("data-category", GISCUS_CATEGORY || "General");
    script.setAttribute("data-category-id", GISCUS_CATEGORY_ID || "");
    script.setAttribute("data-mapping", term ? "specific" : "pathname");
    if (term) {
      script.setAttribute("data-term", term);
    }
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", resolvedTheme === "dark" ? "dark" : "light");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    ref.current.appendChild(script);

    return () => {
      if (ref.current) {
        ref.current.innerHTML = "";
      }
    };
  }, [term, resolvedTheme]);

  // If Giscus is not configured, show fallback
  if (!GISCUS_REPO) {
    return (
      <div className={`rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 ${className}`}>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Comments
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Comments will be visible when the backend is configured. Configure
          Giscus by setting the following environment variables:
        </p>
        <ul className="mt-4 list-inside list-disc text-sm text-gray-600 dark:text-gray-400">
          <li>NEXT_PUBLIC_GISCUS_REPO</li>
          <li>NEXT_PUBLIC_GISCUS_REPO_ID</li>
          <li>NEXT_PUBLIC_GISCUS_CATEGORY</li>
          <li>NEXT_PUBLIC_GISCUS_CATEGORY_ID</li>
        </ul>
      </div>
    );
  }

  return <div ref={ref} className={className} />;
}

