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
        backgroundImage="/data-solution.png"
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
            description={
              <>
              <p>
              Artificial Intelligence and Data Science are core pillars of our approach to digital transformation. At InovativAI, we provide AI & Data Science solutions that help businesses collect, process, and understand vast amounts of data. Our expertise lies in designing AI strategies that align with organizational goals and leveraging data science techniques to uncover insights that matter.

              </p>
              <br />
              <p>
              By working closely with clients, we deliver solutions that automate decision-making, reveal trends, and improve forecasting. Whether optimizing processes or discovering new market opportunities, our AI and Data Science solutions empower businesses to make smarter, data-driven decisions.

              </p>
              </>
            }
            imageSrc="/ai-sol/1.png"
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
            description={
              <>
              <p>
              Our Machine Learning solutions are built to adapt, evolve, and scale alongside your business goals. We specialize in developing and deploying custom ML models that leverage both historical and real-time data, empowering organizations to enhance accuracy, optimize performance, and drive smarter decision-making across various functions. Whether it’s forecasting demand, detecting fraud, or uncovering hidden patterns, our ML solutions are designed to deliver reliable, actionable outcomes that create real business impact.

              </p>
              <br />
              <p>
              At InovativAI, we apply machine learning across critical areas such as personalization, predictive analytics, risk management, and process automation. Our models are engineered for seamless integration into your existing systems, ensuring a smooth transition and immediate operational value. Beyond deployment, our ML solutions continue to learn and improve over time, providing organizations with a dynamic, continuously evolving asset that supports innovation, efficiency, and competitive advantage in a rapidly changing digital landscape.
              </p>
              </>
            }
            imageSrc="/ai-sol/2.png"
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
            description={
              <>
              <p>
              In today’s digital era where data usage is growing exponentially, securing information has never been more critical. At InovativAI, our AI Security and Privacy solutions are designed to ensure that your data remains not only protected but also fully compliant with evolving regulations. We embed security directly into the core of AI workflows, utilizing intelligent systems that continuously monitor for threats, detect anomalies before they escalate, and initiate real-time responses to mitigate risks. By integrating advanced protection mechanisms from the ground up, we help organizations create resilient environments where innovation can thrive without compromising on safety.
              </p>
              <br />
              <p>
              Beyond safeguarding systems, we champion a “privacy by design” approach — embedding privacy considerations into every layer of AI development and deployment. We empower organizations to adopt responsible, ethical AI practices that respect user data and maintain regulatory compliance. Our solutions align with major privacy frameworks such as GDPR, HIPAA, and emerging AI governance standards, helping businesses mitigate risks while fostering greater customer trust. With InovativAI, you don't just implement AI — you implement it securely, ethically, and with the confidence that privacy is a foundational pillar, not an afterthought.
              </p>
              </>
            }
            imageSrc="/ai-sol/3.png"
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
            description={
              <>
              <p>
              A strong data foundation is essential for any successful AI initiative. At InovativAI, our AI Data Platform solutions help organizations build the infrastructure needed to manage and scale their data workflows. We guide clients in setting up centralized, secure, and high-performance environments that support data ingestion, processing, and analysis.

              </p>
              <br />
              <p>
              Our platforms enable efficient collaboration between teams and systems, ensuring that the right data is available when needed. With real-time capabilities and cloud scalability, we support the full data lifecycle required for modern AI projects.

              </p>
              </>
            }
            imageSrc="/ai-sol/4.png"
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
            description={
              <>
              <p>
              Our Business Intelligence (BI) solutions are designed to transform raw data into powerful strategic insights that drive better decision-making. At InovativAI, we collaborate closely with clients to build comprehensive BI frameworks that encompass dynamic dashboards, advanced visual analytics, and real-time performance tracking. These tools empower organizations to analyze complex information quickly, spot trends and opportunities, and make informed decisions with speed and confidence.

              </p>
              <br />
              <p>
              By integrating and harmonizing data from multiple sources, we create a unified, holistic view of business operations, giving leaders the clarity needed to optimize strategies and resource allocation. Our BI solutions are user-friendly, highly interactive, and fully customizable to meet the specific needs of each organization. With intuitive interfaces and actionable insights, we help businesses foster a culture of data-driven excellence, improve operational efficiency, and unlock sustainable growth in an increasingly competitive landscape.

              </p>
              </>
            }
            imageSrc="/ai-sol/5.png"
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
            description={
              <>
              <p>
              InovativAi’s Data Analytics solutions help organizations make sense of complex data. We offer end-to-end analytics capabilities, from data cleaning and transformation to visualization and interpretation. Our approach enables businesses to identify trends, monitor key metrics, and uncover areas for improvement.

              </p>
              <br />
              <p>
              With our analytics services, clients gain the ability to forecast outcomes, evaluate performance, and support continuous innovation. We make analytics accessible and actionable, helping businesses at any stage of their data journey.

              </p>
              </>
            }
            imageSrc="/ai-sol/6.png"
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
