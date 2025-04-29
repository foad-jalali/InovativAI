import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showPartnerBadge?: boolean;
  showLogos?: boolean;
  backgroundImage: string;
  children?: ReactNode;
  alt: string;
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
  backgroundImage,
  alt,
  children,
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-end md:items-center pt-24 pb-32">
      <Image
        alt={alt}
        src={backgroundImage}
        className="w-screen h-screen object-cover object-[75%_25%] absolute inset-0"
        width={100}
        height={100}
      />
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
            <span className="text-sm">InovativAI - AI Automation Partner</span>
          </div>
        )} */}

        <h1
          className="text-lg md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-3xl mb-2 md:mb-6 text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h1>

        <p
          className="text-sm md:text-xl text-gray-300 max-w-2xl mb-10 text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
