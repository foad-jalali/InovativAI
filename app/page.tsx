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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
          </div>
        </div>
      </section>

      <FeatureSection
        title="AI-Powered Automation Solutions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="AI Automation"
        buttonText="Learn More"
        buttonLink="/solutions/ai-and-data-solution"
        badge="Featured"
      />

      <FeatureSection
        title="Enterprise-Grade Security"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Enterprise Security"
        reverse={true}
        buttonText="Explore Solutions"
        buttonLink="/solutions/software-engineering-and-development"
      />

      <FeatureSection
        title="Seamless Integration"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Seamless Integration"
        buttonText="See How It Works"
        buttonLink="/solutions/devops-and-project-delivery"
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
