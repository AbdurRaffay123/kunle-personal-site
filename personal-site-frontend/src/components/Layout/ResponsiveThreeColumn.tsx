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

export default function ResponsiveThreeColumn({
  main,
  metadata,
  toc,
}: ResponsiveThreeColumnProps) {
  return (
    <Container className="py-6 md:py-8 lg:py-12">
      {/* Mobile Layout: Single Column Stack */}
      <div className="flex flex-col space-y-6 md:hidden">
        {/* Metadata - First on mobile */}
        <aside className="order-1">
          {metadata}
        </aside>

        {/* Table of Contents - Second on mobile */}
        <aside className="order-2">
          {toc}
        </aside>

        {/* Main Content - Last on mobile */}
        <article className="order-3">
          {main}
        </article>
      </div>

      {/* Tablet Layout: Two Columns */}
      <div className="hidden md:grid md:grid-cols-12 md:gap-6 lg:hidden">
        {/* Sidebar Column - First on tablet */}
        <aside className="md:col-span-5 space-y-4 order-1">
          {/* Metadata */}
          <div>
            {metadata}
          </div>

          {/* Table of Contents */}
          <div>
            {toc}
          </div>
        </aside>

        {/* Main Content - Second on tablet */}
        <div className="md:col-span-7 order-2">
          {main}
        </div>
      </div>

      {/* Desktop Layout: Three Columns */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {main}
        </div>

        {/* Right Sidebar Column */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Metadata - First */}
          <div>
            {metadata}
          </div>

          {/* Table of Contents - Second */}
          <div>
            {toc}
          </div>
        </aside>
      </div>
    </Container>
  );
}
