import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { generateMetadata } from "@/components/seo";

export const metadata: Metadata = generateMetadata({
  title: "Home | InovativAI",
  description: "Leading AI solutions for the aviation industry.",
  url: "https://inovativai.com/",
  image: "/images/og-home.jpg",
  keywords: "AI, Aviation, Technology, Smart Solutions",
});
export default function Home() {
  return (
    <>
      <HeroSection
        title="Welcome to InovativAI"
        subtitle="InovativAI is a cutting-edge technology company specializing in artificial intelligence solutions tailored for the aviation industry. By harnessing the power of AI, InovativAI enhances passenger experiences, optimizes flight operations, and revolutionizes it through advanced smart solutions and tools."
        backgroundImage="/homehero.jpg"
        alt="hero-image"
      />

      <section className="section-padding  h-screen bg-cover flex  relative bg-center">
        <Image
          width={100}
          height={100}
          src="/home2.png"
          className="absolute inset-0 w-screen max-h-screen"
          alt="av"
        />
        <div className="container-custom h-full flex flex-col justify-center">
          <div className="flex justify-center mb-12">
            <div
              className="inline-flex items-center rounded-full px-4 py-2"
              data-aos="fade-up"
            >
              <Link href="/contact-us" className="hidden md:flex btn-primary ">
                Who We Are
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We are InovativAI, we help founders like you to automate workflows
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At InovativAI, we believe founders should focus on growing their vision — not getting lost in repetitive tasks. Our smart automation solutions simplify your operations, boost efficiency, and free up your time to achieve what matters most.
            </p>
          </div>
        </div>
      </section>

      <FeatureSection
        title="ArMax: The Future of In-Flight Entertainment"
        description={
          <>
            <p>
              ArMax by InovativAi is a next-generation AI-driven IFE system built to transform the passenger experience. With modular architecture, real-time connectivity, and AI-powered personalization, ArMax delivers fast, intuitive, and immersive services onboard. Designed for scalability and future aviation needs, it offers airlines a powerful, secure, and intelligent digital ecosystem.
            </p>
            <br />
            <p>
              Beyond entertainment, ArMax enables airlines to integrate third-party apps through its Connected Partner Platform, unlocking new revenue streams and richer passenger experiences. With intelligent automation, modular upgrades, and AI-powered engagement, ArMax stands ready to lead the next era of connected air travel. Ready to experience the future with ArMax?
            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="AI Automation"
        buttonText="Read More"
        buttonLink="/products/armax"
      // badge="Featured"
      />

      <FeatureSection
        title="Nexora: Redefining the Smart In-Flight Experience"
        description={
          <>
            <p>
              Nexora by InovativAi is a next-generation AI assistant designed to revolutionize how passengers and cabin crews engage with in-flight entertainment systems. Built for personalization, accessibility, and intelligent communication, Nexora delivers features like PNR-based customization, multilingual support, voice-to-text messaging, smart chatbot assistance, and dynamic app recommendations. Whether it’s offering a smooth onboarding experience, enabling real-time crew communication, or providing accessible services like text-to-speech, Nexora ensures every passenger feels connected, supported, and valued throughout their journey. Designed with flexibility and user experience at its core, Nexora brings a human touch to the digital skies.
            </p>
            <br />
            <p>
              Still under active development, Nexora embodies InovativAi’s vision for the future of aviation: intelligent, adaptive, and deeply personal. By bridging real-time communication, accessibility, and personalized content delivery, Nexora transforms conventional IFE platforms into smart, experience-driven ecosystems. Airlines leveraging Nexora gain a competitive advantage through higher passenger satisfaction, operational efficiency, and stronger brand loyalty. Curious how Nexora can elevate your next in-flight experience? Stay tuned—because with Nexora, the future of connected aviation has already begun.
            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Enterprise Security"
        reverse={true}
        buttonText="Read More"
        buttonLink="/products/nexora"
      />

      <FeatureSection
        title="Step Into the Future of Connected Aviation"
        description={
          <>
            <p>We’re proud to unveil a bold new chapter in aviation technology with the introduction of our latest product. Designed to meet the evolving demands of modern air travel, this cutting-edge solution blends advanced innovation, intelligent design, and next-level connectivity to redefine the in-flight experience. By harnessing the power of emerging technologies, we are setting a new standard for how airlines can deliver smarter, faster, and more engaging digital journeys.</p>
            <br />
            <p>
              Want to dive deeper into how Nexora and our latest innovations are shaping the future of aviation? Visit our blog to explore detailed insights about our new product, its advanced features, and the edge technologies driving the next wave of in-flight entertainment. Don’t miss out—your journey into the future of connected travel starts here.
            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Seamless Integration"
        buttonText="Read More"
        buttonLink="/blog"
      />

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Ready to transform your business?"
            subtitle="Get started with InovativAI today and experience the power of AI-driven automation."
          />

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            data-aos="fade-up"
          >
            <Link href="/contact-us" className="btn-primary bg-[#512feb00]">
              Get in touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            <Link href="/products/armax" className="btn-secondary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* <div className="fixed bottom-6 right-6 z-10">
        <Link href="/contact-us" className="btn-primary">
          Use For Free
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div> */}
    </>
  );
}
