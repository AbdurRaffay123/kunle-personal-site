import { Metadata } from "next";
import { generateMetadata as genMeta, SEO_PRESETS } from "@/components/SEO/SEO";

export const metadata: Metadata = genMeta(SEO_PRESETS.notes);

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}










