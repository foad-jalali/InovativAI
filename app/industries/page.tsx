// "use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"
import { Metadata } from "next"
import { generateMetadata } from "@/components/seo"

export const metadata: Metadata = generateMetadata({
  title: "Industries We Serve | InovativAI",
  description: "Discover how InovativAI delivers digital and data-driven solutions across industries, driving innovation and solving real business challenges.",
  url: "https://inovativai.com/industries",
  image: "/images/og-home.jpg",
  keywords: "Digital Solutions for Industries, Technology Consulting, Innovation in Aviation, Healthcare Digital Transformation, Financial Software Solutions, Education Technology Services, Data-Driven Business Strategies",
});
export default function IndustriesPage() {

  // Handle smooth scrolling for anchor links
  // useEffect(() => {
  //   const handleAnchorClick = (e: MouseEvent) => {
  //     const target = e.target as HTMLElement
  //     const anchor = target.closest("a")

  //     if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
  //       e.preventDefault()
  //       const element = document.querySelector(anchor.hash)
  //       if (element) {
  //         window.scrollTo({
  //           top: element.getBoundingClientRect().top + window.scrollY - 100,
  //           behavior: "smooth",
  //         })
  //       }
  //     }
  //   }

  //   document.addEventListener("click", handleAnchorClick)
  //   return () => document.removeEventListener("click", handleAnchorClick)
  // }, [])

  return (
    <>
      <HeroSection
        title="Industries We Serve at InovativAI"
        backgroundImage="/industry.png"
        alt="Industries We Serve"
        subtitle="Tailored solutions for diverse industries, leveraging our expertise to address unique challenges."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#technology-and-digital-innovation"
        showLogos={false}
      />

      <section id="technology-and-digital-innovation" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Technology and Digital Innovation"
            subtitle="Empowering transformation through cutting-edge technology and visionary innovation.
Shape the future with solutions designed for a digital world."
          />

          <FeatureSection
            title="Digital Transformation"
            description={
              <>
                <p>
                  In the fast-paced world of technology, staying ahead requires more than just tools—it takes adaptable strategies and well-engineered systems. At InovativAI, we provide custom digital solutions for tech companies and digital innovators. Our services range from building scalable cloud infrastructure to implementing secure platforms and data-centric applications.

                </p>
                <br />
                <p>
                  We help digital teams enhance product performance, streamline workflows, and drive innovation through smart, efficient development and integration. Whether you're launching a new app, building a SaaS platform, or scaling an existing system, our solutions are designed to support sustainable growth and competitive advantage.

                </p>
              </>
            }
            imageSrc="/industries/1.png"
            imageAlt="Digital Transformation"
          // buttonText="Learn More"
          // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="aviation-and-aerospace" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Aviation & Aerospace"
            subtitle="Elevate performance with precision technology for the skies and beyond.
Innovation that propels safety, efficiency, and exploration."
          />

          <FeatureSection
            title="Aviation & Aerospace Solutions"
            description={
              <>
                <p>
                  Originally rooted in the aviation industry, InovativAI has deep experience solving complex challenges in air travel and aerospace operations. We offer solutions for predictive maintenance, passenger experience optimization, real-time data processing, and operational efficiency.

                </p>
                <br />
                <p>
                  Our systems help airlines and aerospace companies improve safety, reduce downtime, and enhance customer service. From in-flight services to flight data analysis, we bring intelligent automation and reliability to one of the world’s most dynamic industries.

                </p>
              </>
            }
            imageSrc="/industries/2.png"
            imageAlt="Aerospace"
            reverse={true}
          // buttonText="See Demo"
          // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="finance-and-banking" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Finance & Banking"
            subtitle="Secure, agile, and intelligent solutions for the future of finance.
Empowering trust, speed, and growth in a digital economy."
          />

          <FeatureSection
            title="Financial Technology Solutions"
            description={
              <>
                <p>
                  The finance industry requires precision, compliance, and real-time responsiveness. At InovativAI, we deliver data and software solutions that enhance fraud detection, automate risk analysis, and streamline customer interactions in banking and financial services.

                </p>
                <br />
                <p>
                  We work with institutions to modernize legacy systems, integrate smart technologies into daily operations, and improve decision-making through analytics and automation. Our solutions support secure digital transformation in a highly regulated environment, ensuring trust and operational excellence.

                </p>
              </>
            }
            imageSrc="/industries/3.png"
            imageAlt="Finance"
          // buttonText="Learn More"
          // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="healthcare-and-life-sciences" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Healthcare & Life Sciences"
            subtitle="Advancing care and discovery through smart, data-driven innovation.
Better outcomes, powered by technology and compassion."
          />

          <FeatureSection
            title="Healthcare Innovation"
            description={
              <>
                <p>
                  In healthcare and life sciences, accuracy and data security are critical. InovativAI delivers intelligent digital solutions that support medical research, patient care, and operational efficiency. We help healthcare providers leverage data analytics for better diagnoses, personalized care, and resource planning.

                </p>
                <br />
                <p>
                  Our solutions also extend to life sciences companies, enabling faster research cycles, compliance with data privacy laws, and workflow automation. With a focus on ethical development and data protection, we bring innovation while maintaining trust and safety.

                </p>
              </>
            }
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Healthcare"
            reverse={true}
          // buttonText="Explore Solutions"
          // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="energy-and-oil-and-gas" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Energy and Oil & Gas"
            subtitle="Driving operational excellence and sustainability across the energy sector.
Innovative solutions for a dynamic, resource-driven world."
          />

          <FeatureSection
            title="Energy Sector Solutions"
            description={
              <>
                <p>
                  The energy sector faces increasing pressure to operate efficiently and sustainably. At InovativAI, we offer digital and data-driven solutions that help companies in oil, gas, and renewables monitor performance, predict equipment failures, and optimize energy usage.

                </p>
                <br />
                <p>
                  We support field operations with real-time analytics and remote monitoring, ensuring safer and more cost-effective practices. Our solutions drive operational resilience and data-informed decision-making in one of the world’s most essential industries.

                </p>
              </>
            }
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Energy"
          // buttonText="Learn More"
          // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="education-and-e-learning" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Education & e-Learning"
            subtitle="Transform learning with engaging, accessible, and intelligent digital platforms.
Empowering minds anytime, anywhere."
          />

          <FeatureSection
            title="Educational Technology"
            description={
              <>
                <p>
                  Digital transformation is reshaping how education is delivered. At InovativAI, we provide solutions that enhance digital learning platforms, personalize student experiences, and support institutional analytics. We help educators track progress, improve content delivery, and make informed decisions.

                </p>
                <br />
                <p>
                  Whether in traditional education or online learning environments, our solutions support adaptive learning, content recommendation, and administrative automation. We enable a smarter, more accessible, and engaging future for learners and educators alike.

                </p>
              </>
            }
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Education"
            reverse={true}
          // buttonText="See Demo"
          // buttonLink="/contact-us"
          />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Discover how technology is transforming your industry."
            subtitle="Visit our blog for expert articles, case studies, and the latest trends."
          />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4" data-aos="fade-up">
            <Link href="/contact-us" className="btn-primary">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link href="/blog" className="btn-secondary">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
