import type { Metadata } from "next";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords?: string;
  type?: string;
  robots?: string;
  locale?: string;
  siteName?: string;
}

export function generateMetadata({
  title,
  description,
  url,
  image,
  keywords = "AI, Aviation, Technology, Innovation",
  type = "website",
  robots = "index, follow",
  locale = "en_US",
  siteName = "InovativAI",
}: SeoProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.split(", "),
    alternates: {
      canonical: url,
    },
    robots,
    openGraph: {
      title,
      description,
      url,
      type,
      siteName,
      locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    } as any,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
