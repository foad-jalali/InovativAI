// "use client";

import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import { Metadata } from "next";
import { generateMetadata } from "@/components/seo";

export const metadata: Metadata = generateMetadata({
  title: "AI & Data Solutions | InovativAI",
  description: "Explore InovativAi’s Cloud, Infrastructure & Performance solutions to help businesses scale securely through cloud, data center, and AI hardware strategies.",
  url: "https://inovativai.com/",
  image: "/images/og-home.jpg",
  keywords: "Cloud Infrastructure Solutions, Data Center Design, GPU for AI Workloads, High-Performance Computing Services, Cloud Migration Consulting, AI and Cloud Integration, HPC Infrastructure, AI Hardware Optimization",
});
export default function CloudInfrastructurePage() {
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
        title="Cloud, Infrastructure & Performance"
        backgroundImage="/homehero.jpg"
        alt=""
        subtitle="Optimize your infrastructure and leverage cloud technologies for maximum performance and scalability."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#cloud-computing"
        showLogos={false}
      />

      <section id="cloud-computing" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Cloud Computing"
            subtitle="Scale seamlessly and innovate faster with secure, flexible cloud environments.
Empower your business with on-demand infrastructure and global reach."
          />

          <FeatureSection
            title="Cloud Migration & Optimization"
            description="Cloud computing enables flexible, on-demand access to computing resources. At InovativAI, we offer cloud solutions that support migration, architecture planning, and cloud-native development. Our focus is on helping businesses adopt the cloud in a way that improves scalability, reduces operational costs, and increases agility.
We work across public, private, and hybrid environments, providing strategies for efficient cloud deployment and management. Whether starting from scratch or optimizing existing cloud systems, our solutions ensure performance, security, and alignment with business goals.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Cloud Migration"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section
        id="ai-cloud-and-data-center-solutions"
        className="section-padding pt-32"
      >
        <div className="container-custom">
          <SectionHeading
            title="AI, Cloud, and Data Center Solutions"
            subtitle="Integrated solutions bridging AI, cloud, and data infrastructure.
Drive agility, intelligence, and resilience across your IT ecosystem."
          />

          <FeatureSection
            title="AI-Optimized Infrastructure"
            description="AI, cloud, and data center technologies are increasingly interconnected. At InovativAI, we design integrated solutions that bring these elements together to support smart, data-driven operations. Our strategies ensure seamless data flow, compute optimization, and AI readiness across all platforms.
We help businesses build AI-capable environments that scale with demand. By aligning infrastructure with machine learning and analytics workloads, we ensure that data and applications run efficiently and securely.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="AI Infrastructure"
            reverse={true}
            buttonText="See Demo"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section
        id="data-center-design-and-implementation"
        className="section-padding pt-32"
      >
        <div className="container-custom">
          <SectionHeading
            title="Data Center Design and Implementation"
            subtitle="From blueprint to build — intelligent data centers tailored for performance.
Future-ready architecture, optimized for power, cooling, and scalability."
          />

          <FeatureSection
            title="Modern Data Center Architecture"
            description="Modern data centers must support high availability, energy efficiency, and future scalability. InovativAI offers data center design and implementation solutions that align with the specific needs of each business. From layout and power management to cooling and network infrastructure, we provide complete design strategies.
Our implementation approach ensures minimal downtime and a smooth transition. We focus on reliability, performance, and operational efficiency, creating data centers that support both traditional workloads and modern digital services.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Data Center"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="gpu-and-ai-hardware" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="GPU and AI Hardware"
            subtitle="Accelerate your AI workloads with cutting-edge GPU and compute hardware.
Built for speed, precision, and enterprise-grade performance."
          />

          <FeatureSection
            title="High-Performance Computing Hardware"
            description="GPU and AI hardware are essential for accelerating high-compute tasks such as machine learning, deep learning, and large-scale data processing. At InovativAI, we help businesses design infrastructure strategies that include the right hardware stack for their AI goals.
We advise on deployment, scalability, and workload optimization using cutting-edge GPU and AI accelerators. Our solutions ensure that hardware investments are aligned with performance needs and long-term business objectives.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="GPU Hardware"
            reverse={true}
            buttonText="Explore Solutions"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="hpc" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="High-Performance Computing (HPC)"
            subtitle="Tackle complex simulations and data challenges with HPC at scale.
Maximize computational power for research, analytics, and AI."
          />

          <FeatureSection
            title="Scalable HPC Solutions"
            description="High-Performance Computing (HPC) supports complex simulations, modeling, and real-time analytics. InovativAI delivers HPC solutions that combine processing power, data throughput, and reliability to meet the most demanding workloads.
Our team provides end-to-end strategies, including infrastructure planning, workload management, and system optimization. These solutions are ideal for research institutions, financial modeling, and any business requiring high-speed computing resources.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="HPC Solutions"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Ready to optimize your infrastructure?"
            subtitle="Contact our team today to discuss how our Cloud, Infrastructure & Performance services can help you achieve your goals."
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

            <Link href="/industries" className="btn-secondary">
              Explore Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
