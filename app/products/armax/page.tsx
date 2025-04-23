import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"

export default function ArmaxPage() {
  return (
    <>
      <HeroSection
        title="ArMax: Advanced AI Automation Platform"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#features"
        showLogos={false}
      />

      <section id="features" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="ArMax Features"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
          />
        </div>
      </section>

      <FeatureSection
        title="Intelligent Workflow Automation"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Workflow Automation"
        buttonText="Learn More"
        buttonLink="/contact-us"
      />

      <FeatureSection
        title="Advanced Analytics Dashboard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Analytics Dashboard"
        reverse={true}
        buttonText="See Demo"
        buttonLink="/contact-us"
      />

      <FeatureSection
        title="Enterprise-Grade Security"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Enterprise Security"
        buttonText="Learn About Security"
        buttonLink="/contact-us"
      />

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Ready to get started with ArMax?"
            subtitle="Contact our team today to schedule a demo and see how ArMax can transform your business."
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

            <Link href="/products/nexora" className="btn-secondary">
              Explore Nexora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
