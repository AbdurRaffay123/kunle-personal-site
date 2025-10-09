/**
 * Two-column layout for content pages with sidebar
 */

import { ReactNode } from "react";
import Container from "@/components/UI/Container";

interface TwoColumnProps {
  main: ReactNode;
  sidebar: ReactNode;
  sidebarPosition?: "left" | "right";
  stickysidebar?: boolean;
}

export default function TwoColumn({
  main,
  sidebar,
  sidebarPosition = "right",
  stickysidebar = true,
}: TwoColumnProps) {
  return (
    <Container className="py-12">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Main content */}
        <div
          className={`lg:col-span-8 ${sidebarPosition === "left" ? "lg:order-2" : ""}`}
        >
          {main}
        </div>

        {/* Sidebar */}
        <aside
          className={`lg:col-span-4 ${sidebarPosition === "left" ? "lg:order-1" : ""}`}
        >
          <div className={stickysidebar ? "sticky top-24" : ""}>
            {sidebar}
          </div>
        </aside>
      </div>
    </Container>
  );
}

