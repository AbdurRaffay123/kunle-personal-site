import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Better font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kunle's Portfolio | Full-Stack Developer & Researcher",
    template: "%s | Kunle's Portfolio",
  },
  description:
    "Welcome to Kunle's personal portfolio. Explore my projects in web development, research work, and professional highlights. Full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Kunle",
    "Portfolio",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Web Development",
    "Research",
    "Projects",
  ],
  authors: [{ name: "Kunle" }],
  creator: "Kunle",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Kunle's Portfolio | Full-Stack Developer & Researcher",
    description:
      "Welcome to Kunle's personal portfolio. Explore my projects in web development, research work, and professional highlights.",
    siteName: "Kunle's Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Kunle's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunle's Portfolio | Full-Stack Developer & Researcher",
    description:
      "Welcome to Kunle's personal portfolio. Explore my projects in web development, research work, and professional highlights.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-site-verification-code", // Add your Google Search Console verification
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <div id="root" className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kunle",
              jobTitle: "Full-Stack Developer",
              url: "https://your-domain.com",
              sameAs: [
                "https://github.com/your-github",
                "https://linkedin.com/in/your-linkedin",
                "https://twitter.com/your-twitter",
              ],
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "Research",
                "JavaScript",
                "TypeScript",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
