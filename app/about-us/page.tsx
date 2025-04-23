import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      <HeroSection
        title="About InovativAI"
        subtitle="We are a team of experts dedicated to transforming businesses through AI-powered automation and innovative solutions."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Our Solutions"
        secondaryButtonLink="/solutions/ai-and-data-solution"
        showLogos={false}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up">
              <SectionHeading
                title="Our Mission"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
                centered={false}
              />
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar
                tempor. Cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
              </p>
              <p className="text-gray-300">
                Nam fermentum, nulla luctus pharetra vulputate, felis tellus
                mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div
              className="relative rounded-lg overflow-hidden shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/placeholder.svg?height=1080&width=1920"
                alt="Our Mission"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="Our Vision"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Our Vision"
        reverse={true}
      />

      <FeatureSection
        title="Our Values"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor."
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Our Values"
      />

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the experts behind InovativAI's innovative solutions."
          />

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
              >
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt={`Team Member ${item}`}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">John Doe</h3>
                  <p className="text-purple-400 mb-4">
                    Chief Technology Officer
                  </p>
                  <p className="text-gray-300 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Join Our Team"
            subtitle="We're always looking for talented individuals to join our team."
          />

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            data-aos="fade-up"
          >
            <Link href="/career" className="btn-primary">
              View Open Positions
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
          </div>
        </div>
      </section>
    </>
  );
}
