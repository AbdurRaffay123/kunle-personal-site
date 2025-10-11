import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import ConditionalLayout from "@/components/Layout/ConditionalLayout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Olukunle Owolabi | Lead AI Engineer & Applied Scientist",
    template: "%s | Olukunle Owolabi",
  },
  description:
    "Lead AI Engineer & Applied Scientist with 7+ years of End-to-End AI & ML experience. Ex Meta Engineer, PhD at Tufts. Specializing in LLMs, Recommender Systems, Anomaly Detection, and more.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "Recommender Systems",
    "Applied Science",
    "PhD",
    "Meta",
    "Tufts",
    "End-to-End ML",
  ],
  authors: [{ name: "Olukunle Owolabi" }],
  creator: "Olukunle Owolabi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "Olukunle Owolabi | Lead AI Engineer & Applied Scientist",
    description:
      "Lead AI Engineer & Applied Scientist with 7+ years of End-to-End AI & ML experience.",
    siteName: "Olukunle Owolabi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Olukunle Owolabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olukunle Owolabi | Lead AI Engineer & Applied Scientist",
    description:
      "Lead AI Engineer & Applied Scientist with 7+ years of End-to-End AI & ML experience.",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} bg-white font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </ThemeProvider>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Olukunle Owolabi",
              jobTitle: "Lead AI Engineer & Applied Scientist",
              description:
                "Lead AI Engineer & Applied Scientist with 7+ years of End-to-End AI & ML experience.",
              url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              alumniOf: {
                "@type": "Organization",
                name: "Tufts University",
              },
              worksFor: {
                "@type": "Organization",
                name: "Meta (Former)",
              },
              knowsAbout: [
                "Machine Learning",
                "Large Language Models",
                "Recommender Systems",
                "Anomaly Detection",
                "Fraud Detection",
                "Forecasting",
                "Optimization",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
