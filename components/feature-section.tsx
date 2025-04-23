import Image from "next/image"
import Link from "next/link"

interface FeatureSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  buttonText?: string
  buttonLink?: string
  badge?: string
}

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  buttonText,
  buttonLink,
  badge,
}: FeatureSectionProps) => {
  return (
    <section className="feature-section">
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
          <div className={`${reverse ? "md:order-2" : ""}`} data-aos="fade-up">
            {badge && (
              <div className="inline-block bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-full px-3 py-1 text-sm mb-4">
                {badge}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-300 mb-6">{description}</p>
            {buttonText && buttonLink && (
              <Link href={buttonLink} className="btn-primary">
                {buttonText}
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
            )}
          </div>
          <div className={`${reverse ? "md:order-1" : ""}`} data-aos="fade-up" data-aos-delay="100">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
