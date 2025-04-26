// "use client";

import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import { Metadata } from "next";
import { generateMetadata } from "@/components/seo";

export const metadata: Metadata = generateMetadata({
  title: "DevOps & Project Delivery | InovativAI",
  description: "Explore InovativAi’s DevOps & Project Delivery solutions that streamline development, boost team collaboration, and ensure agile, high-quality software delivery.",
  url: "https://inovativai.com/",
  image: "/images/og-home.jpg",
  keywords: "DevOps Solutions, Agile Project Management, CI/CD Implementation, Project Delivery Services, DevOps Culture, Agile Development, Software Delivery Optimization",
});
export default function DevOpsPage() {
  
  // Handle smooth scrolling for anchor links
  // useEffect(() => {
  //   const handleAnchorClick = (e: MouseEvent) => {
  //     const target = e.target as HTMLElement;
  //     const anchor = target.closest("a");

  //     if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
  //       e.preventDefault();
  //       const element = document.querySelector(anchor.hash);
  //       if (element) {
  //         window.scrollTo({
  //           top: element.getBoundingClientRect().top + window.scrollY - 100,
  //           behavior: "smooth",
  //         });
  //       }
  //     }
  //   };

  //   document.addEventListener("click", handleAnchorClick);
  //   return () => document.removeEventListener("click", handleAnchorClick);
  // }, []);

  return (
    <>
      <HeroSection
        title="DevOps & Project Delivery"
        backgroundImage="/homehero.jpg"
        alt=""
        subtitle="Streamline your development process and accelerate project delivery with our DevOps solutions."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#devops-solutions"
        showLogos={false}
      />

      <section id="devops-solutions" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="DevOps Solutions"
            subtitle="Streamline your development-to-deployment cycle with automation and continuous collaboration.
Build faster, more reliably, and with greater confidence."
          />

          <FeatureSection
            title="Continuous Integration & Deployment"
            description="DevOps bridges the gap between development and operations, enabling faster and more stable software delivery. At InovativAI, our DevOps solutions focus on automation, monitoring, integration, and continuous deployment to support agile and scalable development environments.
We help organizations build a DevOps culture, implement CI/CD pipelines, and automate routine tasks to reduce errors and improve efficiency. Our solutions are adaptable to your infrastructure and ensure smooth collaboration across teams, from code to production.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="CI/CD"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section
        id="agile-and-project-management"
        className="section-padding pt-32"
      >
        <div className="container-custom">
          <SectionHeading
            title="Agile & Project Management"
            subtitle="Drive measurable results with agile practices and precise project control.
Align teams, accelerate delivery, and boost customer satisfaction."
          />

          <FeatureSection
            title="Agile Methodology Implementation"
            description="Agile and project management are critical to delivering successful software projects on time and within scope. Our solutions help businesses adopt agile methodologies, such as Scrum or Kanban, to improve flexibility, transparency, and team productivity.
InovativAI provides guidance on project planning, sprint management, and task tracking to ensure that teams stay focused and aligned. We support a results-driven approach that enhances communication, adapts to change, and delivers continuous value to end users.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Agile Methodology"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Ready to streamline your development process?"
            subtitle="Contact our team today to discuss how our DevOps & Project Delivery services can help you achieve your goals."
          />

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            data-aos="fade-up"
          >
            <Link href="/contact-us" className="btn-primary">
              Contact Sales
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

            <Link
              href="/solutions/cloud-and-infrastructure-performance"
              className="btn-secondary"
            >
              Explore Cloud Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
