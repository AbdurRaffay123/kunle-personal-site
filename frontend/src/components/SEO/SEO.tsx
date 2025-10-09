/**
 * SEO component for meta tags and Open Graph
 */

import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  path?: string;
  date?: string;
  tags?: string[];
  type?: "website" | "article";
}

const SITE_NAME = "Olukunle Owolabi";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function generateMetadata({
  title,
  description,
  image,
  path = "",
  date,
  tags,
  type = "website",
}: SEOProps): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/og-image.png`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: tags,
    authors: [{ name: "Olukunle Owolabi" }],
    creator: "Olukunle Owolabi",
    publisher: "Olukunle Owolabi",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(date && type === "article" && { publishedTime: date }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@olukunle",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  return metadata;
}

// For page components to use
export default function SEO(props: SEOProps) {
  // This is just a placeholder component
  // Metadata is generated using generateMetadata function
  return null;
}

