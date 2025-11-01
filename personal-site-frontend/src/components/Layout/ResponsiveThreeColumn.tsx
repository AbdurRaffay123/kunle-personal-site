/**
 * Responsive Three-Column Layout for Notes Page
 * Mobile-first approach with progressive enhancement
 */

import { ReactNode } from "react";
import Container from "@/components/UI/Container";

interface ResponsiveThreeColumnProps {
  main: ReactNode;
  metadata: ReactNode;
  toc: ReactNode;
}

export default function ResponsiveThreeColumn({ main, metadata, toc }: ResponsiveThreeColumnProps) {
  return (
    <Container className="py-6 md:py-8 lg:py-12">
      {/* One grid for all breakpoints */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
        {/* Main */}
        <article
          className={`/* mobile: after sidebar */ /* tablet: right side */ /* desktop: left side */ order-2 md:order-2 md:col-span-7 lg:order-1 lg:col-span-8`}
        >
          {main}
        </article>

        {/* Sidebar (Metadata + TOC together) */}
        <aside
          className={`/* mobile: first */ /* tablet: left column */ /* desktop: right column */ order-1 space-y-6 md:order-1 md:col-span-5 lg:order-2 lg:col-span-4`}
        >
          {/* Metadata */}
          <div
            className="rounded-lg border p-4 md:p-5 lg:p-6"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            {metadata}
          </div>

          {/* Table of Contents */}
          <div>{toc}</div>
        </aside>
      </div>
    </Container>
  );
}