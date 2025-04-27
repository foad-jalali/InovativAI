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
  description: "Explore InovativAi’s AI & Data Solutions, empowering businesses with AI, machine learning, and data analytics to transform operations and decisions.",
  url: "https://inovativai.com/ai-and-data-solution",
  image: "/images/og-home.jpg",
  keywords: "AI and Data Solutions, Artificial Intelligence Consulting, Machine Learning Services, AI Security Solutions, Business Intelligence Platforms, Data Science for Business, Predictive Analytics, AI Data Platforms",
});
export default function AiAndDataSolutionPage() {
  
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
        title="AI & Data Solutions"
        backgroundImage="/homehero.jpg"
        alt=""
        subtitle="Harness the power of artificial intelligence and data science to drive innovation and growth."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#artificial-intelligence-and-data-science"
        showLogos={false}
      />

      <section
        id="artificial-intelligence-and-data-science"
        className="section-padding pt-32"
      >
        <div className="container-custom">
          <SectionHeading
            title="Artificial Intelligence & Data Science"
            subtitle="Unlock the power of AI to turn data into actionable insights.
From prediction to automation, we fuel smarter decisions."
          />

          <FeatureSection
            title="Custom AI Solutions"
            description="Artificial Intelligence and Data Science are core pillars of our approach to digital transformation. At InovativAI, we provide AI & Data Science solutions that help businesses collect, process, and understand vast amounts of data. Our expertise lies in designing AI strategies that align with organizational goals and leveraging data science techniques to uncover insights that matter.
By working closely with clients, we deliver solutions that automate decision-making, reveal trends, and improve forecasting. Whether optimizing processes or discovering new market opportunities, our AI and Data Science solutions empower businesses to make smarter, data-driven decisions.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="AI Solutions"
            // buttonText="Learn More"
            // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section
        id="machine-learning-models-and-applications"
        className="section-padding pt-32"
      >
        <div className="container-custom">
          <SectionHeading
            title="Machine Learning Models & Applications"
            subtitle="Design, train, and deploy intelligent models that evolve with your data.
Transform complexity into real-world impact with scalable ML solutions."
          />

          <FeatureSection
            title="Predictive Analytics"
            description="Our Machine Learning solutions are built to adapt and evolve with your business. We develop and deploy custom ML models that learn from historical and real-time data, helping organizations improve accuracy and performance across different functions. From demand prediction to fraud detection, our ML solutions deliver reliable outcomes.
InovativAI applies machine learning in areas like personalization, predictive analytics, and process automation. These models are integrated seamlessly into your systems, providing consistent value and continuous improvement over time.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Predictive Analytics"
            reverse={true}
            // buttonText="See Demo"
            // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="ai-security-and-privacy" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="AI Security and Privacy"
            subtitle="Protect intelligence with cutting-edge AI-driven security and privacy.
Balancing innovation and compliance in every algorithm."
          />

          <FeatureSection
            title="Secure AI Implementation"
            description="In an age of increasing data usage, our AI Security and Privacy solutions ensure that your data remains protected and compliant. We focus on embedding security within AI workflows, using intelligent systems that monitor threats, detect anomalies, and respond in real time.
We also prioritize privacy by design, helping organizations adopt responsible AI practices. Our solutions support privacy regulations, ethical AI use, and risk mitigation strategies to safeguard both organizational data and customer trust.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="AI Security"
            // buttonText="Learn More"
            // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="ai-data-platforms" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="AI Data Platforms"
            subtitle="Build robust data foundations for AI innovation and scalability.
Unify, process, and operationalize data with confidence."
          />

          <FeatureSection
            title="Scalable Data Infrastructure"
            description="A strong data foundation is essential for any successful AI initiative. At InovativAI, our AI Data Platform solutions help organizations build the infrastructure needed to manage and scale their data workflows. We guide clients in setting up centralized, secure, and high-performance environments that support data ingestion, processing, and analysis.
Our platforms enable efficient collaboration between teams and systems, ensuring that the right data is available when needed. With real-time capabilities and cloud scalability, we support the full data lifecycle required for modern AI projects.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Data Platforms"
            reverse={true}
            // buttonText="Explore Solutions"
            // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="business-intelligence" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Business Intelligence"
            subtitle="Make sense of your data with intuitive dashboards and smart reporting.
Turn insights into action and strategy into success."
          />

          <FeatureSection
            title="Data-Driven Decision Making"
            description="Our Business Intelligence solutions turn data into strategic insights. At InovativAI, we work with clients to develop BI frameworks that include dashboards, visual analytics, and performance tracking. These tools help organizations make informed decisions quickly and confidently.
By integrating data from multiple sources, we provide a holistic view of business operations. Our BI solutions are user-friendly, interactive, and tailored to deliver insights that support growth and operational excellence.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Business Intelligence"
            // buttonText="Learn More"
            // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="data-analytics" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Data Analytics"
            subtitle="Discover trends, patterns, and opportunities hidden in your data.
Data-driven decisions start with deep and dynamic analysis."
          />

          <FeatureSection
            title="Advanced Analytics Solutions"
            description="InovativAI’s Data Analytics solutions help organizations make sense of complex data. We offer end-to-end analytics capabilities, from data cleaning and transformation to visualization and interpretation. Our approach enables businesses to identify trends, monitor key metrics, and uncover areas for improvement.
With our analytics services, clients gain the ability to forecast outcomes, evaluate performance, and support continuous innovation. We make analytics accessible and actionable, helping businesses at any stage of their data journey.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Data Analytics"
            reverse={true}
            // buttonText="See Demo"
            // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Ready to leverage AI for your business?"
            subtitle="Contact our team today to discuss how our AI & Data Solutions can help you achieve your goals."
          />

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            data-aos="fade-up"
          >
            <Link href="/contact-us" className="btn-primary">
              Contact Us
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
              href="/solutions/software-engineering-and-development"
              className="btn-secondary"
            >
              Explore Software Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
