import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"
import { Metadata } from "next";
import { generateMetadata } from "@/components/seo";

export const metadata: Metadata = generateMetadata({
  title: "ArMax | InovativAI",
  description: "ArMax by InovativAI is an AI-driven IFE system featuring Nexora Assistant and a partner platform for smart, scalable, and immersive air travel.",
  url: "https://inovativai.com/",
  image: "/armax.jpg",
  keywords: "ArMax IFE System, AI-Driven In-Flight Entertainment, Nexora AI Assistant, Connected IFE Platform, Smart IFE Architecture, In-Flight Connectivity",
});
export default function ArmaxPage() {
  return (
    <>
      <HeroSection
        title="ArMax: AI-Driven IFE System for the Future of Connected In-Flight Experience"
        backgroundImage="/armax.jpg"
        alt="armax"
        subtitle="Transforming In-Flight Entertainment with Smart, Personalized, and Seamlessly Connected Experiences"
        primaryButtonText="Get Started"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#features"
        showLogos={false}
      />

      <section id="features" className="section-padding mt-20">
        <div className="container-custom">
          <SectionHeading
            title="ArMax Features"
            subtitle="Discover the Advanced Features Powering Tomorrow’s Smart In-Flight Experiences"
          />
        </div>
      </section>

      <FeatureSection
        title="Inside ArMax: A Step-by-Step Look at Our IFE Architecture"
        description={
          <>
            <p>To better understand how ArMax works, here's a breakdown of its operational architecture:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                <strong>Content Preparation & Syncing:</strong> Content is securely prepared and updated through ground-based servers. Using encrypted channels, data is uploaded via satellite or ATG (Air-to-Ground) connections to the aircraft.
              </li>
              <li>
                <strong>Centralized Onboard IFE Server:</strong> The core of the system is the onboard IFE server, equipped with high-capacity SSD/NVMe storage, ECC RAM, and GPU acceleration. This server manages real-time content delivery, caching, and user data processing under a Linux-based embedded OS.
              </li>
              <li>
                <strong>Connectivity Router & Network Distribution:</strong> A high-speed connectivity router integrates satellite or ground signals and distributes data internally across the cabin. Dual NICs ensure bandwidth optimization and redundancy.
              </li>
              <li>
                <strong>Passenger Access via Wi-Fi & Screens:</strong> The system connects to Wi-Fi 6 access points and seatback screens, allowing passengers to use their own devices or the provided touch-enabled HD displays for browsing, streaming, and services.
              </li>
              <li>
                <strong>Real-Time Interaction & AI Integration:</strong> Through embedded AI and system-wide analytics, ArMax adapts content, services, and recommendations in real time, optimizing based on passenger behavior, preferences, and system performance.
              </li>
            </ul>
            <p>What We’ve Engineered:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>Seamless data flow between cloud and cabin via encrypted links</li>
              <li>GPU-accelerated content processing for 1080p/4K delivery</li>
              <li>Multilingual UI with airline branding customization</li>
              <li>Secure DRM layers and encrypted storage modules</li>
              <li>Modular structure allowing future service and hardware upgrades</li>
            </ul>
          </>
        }
        imageSrc="/armax/1.png"
        imageAlt="Workflow Automation"
        // buttonText="Learn More"
        // buttonLink="/contact-us"
      />

      <FeatureSection
        title="The Intelligent Software Driving the ArMax Experience"
        description={
          <>
            <p>At the core of ArMax’s intelligence is its smart software stack. From content delivery to predictive maintenance, every aspect is automated and optimized. The system supports adaptive streaming (HLS/MPEG-DASH), secure transfer protocols (HTTPS, TLS), and advanced CMS platforms for real-time updates, even while in flight.
            </p>
            <p>It also offers powerful tools for airlines to customize the experience—from dynamic UIs that match brand identity, to app modules for shopping, games, and entertainment. Data collected is used to improve both operational efficiency and passenger satisfaction through continuous AI model refinement.
            </p>
          </>
        }
        imageSrc="/armax/2.webp"
        imageAlt="Analytics Dashboard"
        reverse={true}
        // buttonText="See Demo"
        // buttonLink="/contact-us"
      />

      <FeatureSection
        title="The ArMax Advantage: AI and the Connected Partner Platform"
        description={
          <>
            <p>
              What truly differentiates ArMax from other IFE systems is its dual focus on AI intelligence and an open Connected Partner Platform. The AI engine enables personalized content delivery, real-time decision making, and health monitoring of hardware components, allowing airlines to stay proactive instead of reactive.
            </p>
            <br />
            <p>
              Meanwhile, the Connected Partner Platform allows third-party applications—such as e-commerce, language learning, meditation, or food ordering—to integrate seamlessly. This modularity unlocks new monetization paths for airlines and a more diverse, enjoyable experience for passengers.
            </p>
            <br />
            <p>
              Whereas most legacy systems are locked into static, vendor-driven environments, ArMax offers a living ecosystem that evolves with airline goals and passenger expectations. It provides airlines a strong competitive edge in personalization, efficiency, and engagement.
            </p>
          </>

        }
        imageSrc="/armax/3.png"
        imageAlt="Enterprise Security"
        // buttonText="Learn About Security"
        // buttonLink="/contact-us"
      />
      <FeatureSection
        title="Bringing Intelligence and Connectivity Together – The Future with ArMax"
        description={
          <>
            <p>
              ArMax is not just another IFE platform—it’s a fully integrated AI-driven digital ecosystem that brings together performance, personalization, and partner integration. Built with modern aviation in mind, it blends smart architecture with adaptive software, underpinned by emerging technologies like Nexora and MLOps practices.
            </p>
            <br />
            <p>
              As ArMax continues to evolve, it will redefine how in-flight entertainment and connectivity is delivered, giving airlines a flexible, secure, and future-ready platform. With seamless integration, intelligent automation, and scalability at its core, ArMax is poised to lead the next chapter of connected air travel.
            </p>
          </>

        }
        imageSrc="/armax/4.jpg"
        imageAlt="Enterprise Security"
        reverse={true}
        // buttonText="Learn About Security"
        // buttonLink="/contact-us"
      />

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Ready to get started with ArMax?"
            subtitle="Contact our team today to schedule a demo and see how ArMax can transform your business."
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

            <Link href="/products/nexora" className="btn-secondary">
              Explore Nexora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
