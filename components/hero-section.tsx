import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  showPartnerBadge?: boolean
  showLogos?: boolean
}

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText = "Our Services",
  primaryButtonLink = "/solutions/ai-and-data-solution",
  secondaryButtonText = "See Plans",
  secondaryButtonLink = "/contact-us",
  showPartnerBadge = true,
  showLogos = true,
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* {showPartnerBadge && (
          <div
            className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative w-6 h-6 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-xs">R</span>
            </div>
            <span className="text-sm">Radison - AI Automation Partner</span>
          </div>
        )} */}

        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="300">
          {subtitle}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link href={primaryButtonLink} className="btn-primary">
            {primaryButtonText}
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

          <Link href={secondaryButtonLink} className="btn-secondary">
            {secondaryButtonText}
          </Link>
        </div>

        {showLogos && (
          <div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/placeholder.svg?height=40&width=120" alt="Client Logo" width={120} height={40} />
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/placeholder.svg?height=40&width=120" alt="Client Logo" width={120} height={40} />
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/placeholder.svg?height=40&width=120" alt="Client Logo" width={120} height={40} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
