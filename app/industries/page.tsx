"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"

export default function IndustriesPage() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(anchor.hash)
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <>
      <HeroSection
        title="Industries We Serve"
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
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
          />

          <FeatureSection
            title="Digital Transformation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Digital Transformation"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="aviation-and-aerospace" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Aviation & Aerospace"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
          />

          <FeatureSection
            title="Aerospace Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Aerospace"
            reverse={true}
            buttonText="See Demo"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="finance-and-banking" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Finance & Banking"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
          />

          <FeatureSection
            title="Financial Technology Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Finance"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="healthcare-and-life-sciences" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Healthcare & Life Sciences"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
          />

          <FeatureSection
            title="Healthcare Innovation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Healthcare"
            reverse={true}
            buttonText="Explore Solutions"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="energy-and-oil-and-gas" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Energy and Oil & Gas"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
          />

          <FeatureSection
            title="Energy Sector Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Energy"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="education-and-e-learning" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Education & e-Learning"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
          />

          <FeatureSection
            title="Educational Technology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Education"
            reverse={true}
            buttonText="See Demo"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Ready to transform your industry?"
            subtitle="Contact our team today to discuss how our industry-specific solutions can help you achieve your goals."
          />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4" data-aos="fade-up">
            <Link href="/contact-us" className="btn-primary">
              Contact Sales
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

            <Link href="/about-us" className="btn-secondary">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
