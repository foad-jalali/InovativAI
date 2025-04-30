import { generateMetadata } from "@/components/seo";
import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = generateMetadata({
  title: "FAQs | InovativAI - Frequently Asked Questions",
  description: "Find answers to the most common questions about InovativAI's AI-driven aviation solutions, software development services, and technology innovations.",
  url: "https://inovativai.com/faq",
  image: "/homehero.jpg",
  keywords: "InovativAI FAQs, AI Solutions FAQs, Aviation Technology FAQs, Software Development FAQs, AI in Aviation, Smart Aviation FAQs, InovativAI Support",
});

export default function FaqPage() {
  return (
    <>
      <FaqClient />
    </>
  );
}
