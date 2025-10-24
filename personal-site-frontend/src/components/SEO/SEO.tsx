/**
 * Comprehensive SEO component for meta tags and Open Graph
 * Implements all required SEO metadata for search engines and social media
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
  author?: string;
  section?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

const SITE_NAME = "Olukunle Owolabi";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export function generateMetadata({
  title,
  description,
  image,
  path = "",
  date,
  tags = [],
  type = "website",
  author = "Olukunle Owolabi",
  section,
  modifiedTime,
  noindex = false,
}: SEOProps): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const ogImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_IMAGE;
  
  // Ensure description is within optimal length (150-160 characters)
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + "..." 
    : description;

  const metadata: Metadata = {
    title: fullTitle,
    description: optimizedDescription,
    keywords: [
      "AI Engineer",
      "Machine Learning", 
      "LLM",
      "Applied Science",
      "PhD",
      "Meta",
      "Tufts",
      "End-to-End ML",
      "Recommender Systems",
      "Anomaly Detection",
      ...tags
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_US",
      title: fullTitle,
      description: optimizedDescription,
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
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: optimizedDescription,
      images: [ogImage],
      creator: "@olukunle",
      site: "@olukunle",
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    category: "Technology",
  };

  return metadata;
}

// SEO metadata for specific page types
export const SEO_PRESETS = {
  home: {
    title: "Olukunle Owolabi | Lead AI Engineer & Applied Scientist",
    description: "Lead AI Engineer & Applied Scientist with 7+ years of End-to-End AI & ML experience. Ex Meta Engineer, PhD at Tufts. Specializing in LLMs, Recommender Systems, Anomaly Detection, and more.",
    path: "/",
    type: "website" as const,
  },
  projects: {
    title: "AI & ML Projects",
    description: "Explore my portfolio of AI and Machine Learning projects including LLMs, Recommender Systems, Anomaly Detection, and more.",
    path: "/project",
    type: "website" as const,
  },
  research: {
    title: "Research & Publications", 
    description: "Discover my research work and publications in AI, Machine Learning, and Applied Science.",
    path: "/research",
    type: "website" as const,
  },
  notes: {
    title: "Technical Notes",
    description: "Browse my collection of technical notes, tutorials, and insights on AI, ML, and software development.",
    path: "/notes",
    type: "website" as const,
  },
  blog: {
    title: "AI & ML Blog",
    description: "Read my latest articles and insights on AI, Machine Learning, and technology trends.",
    path: "/blog", 
    type: "website" as const,
  },
  contact: {
    title: "Contact Me",
    description: "Get in touch with me for collaborations, consulting, or to discuss AI and ML opportunities.",
    path: "/contact",
    type: "website" as const,
  },
  notepad: {
    title: "Digital Notepad",
    description: "A simple digital notepad for quick notes and thoughts.",
    path: "/notepad",
    type: "website" as const,
  },
};

// For page components to use
export default function SEO(props: SEOProps) {
  // This is just a placeholder component
  // Metadata is generated using generateMetadata function
  return null;
}

