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
        backgroundImage=""
        alt=""
        showLogos={false}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up">
              <SectionHeading
                title="Our Mission"
                subtitle="At InovativAi, our mission is to transform the aviation industry by embedding the power of advanced artificial intelligence into every touchpoint of the air travel experience. We are committed to enhancing operational efficiency, ensuring superior safety standards, and elevating the overall quality of air travel for passengers and industry stakeholders alike. Through our innovative AI-driven products—such as personalized in-flight entertainment systems and intelligent insuretech solutions tailored specifically for air travelers—we aim to redefine what is possible in aviation. By focusing on smart automation, predictive insights, and seamless experiences, we strive to empower airlines, airports, and aircraft manufacturers to achieve new heights of performance, reliability, and customer satisfaction. Our mission is not just to innovate for today, but to build a sustainable, smarter future for air travel worldwide."
                centered={false}
              />
              {/* <p className="text-gray-300 mb-6">
              At InovativAi, our mission is to transform the aviation industry by embedding the power of advanced artificial intelligence into every touchpoint of the air travel experience. We are committed to enhancing operational efficiency, ensuring superior safety standards, and elevating the overall quality of air travel for passengers and industry stakeholders alike. Through our innovative AI-driven products—such as personalized in-flight entertainment systems and intelligent insuretech solutions tailored specifically for air travelers—we aim to redefine what is possible in aviation. By focusing on smart automation, predictive insights, and seamless experiences, we strive to empower airlines, airports, and aircraft manufacturers to achieve new heights of performance, reliability, and customer satisfaction. Our mission is not just to innovate for today, but to build a sustainable, smarter future for air travel worldwide.
              </p> */}
              {/* <p className="text-gray-300">
                Nam fermentum, nulla luctus pharetra vulputate, felis tellus
                mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p> */}
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
        description="Our vision is to lead the aviation industry into a new era where AI is the driving force behind every flight, every operation, and every interaction. We aspire to create a world where air travel is effortlessly safe, incredibly efficient, and deeply personalized for every passenger. At InovativAi, we foresee a future where airlines, airports, and manufacturers leverage real-time AI analytics for smarter decision-making, predictive maintenance to prevent delays and ensure aircraft longevity, and operational optimization to reduce costs and environmental impact. By pioneering these intelligent solutions, we aim to become the trusted technology partner for the aviation sector, shaping an ecosystem where innovation and safety coexist harmoniously. Our vision extends beyond immediate advancements; we are working towards a smarter, more connected, and sustainable future for global aviation."
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Our Vision"
        reverse={true}
      />

      <FeatureSection
        title="Our Values"
        description="The core values at InovativAi form the foundation of everything we do. We believe in innovation with purpose—using AI not just for the sake of technology, but to truly enhance the human experience of air travel. Safety is at the forefront of our efforts, with every solution designed to uphold and exceed the highest safety standards. We value excellence, pushing the boundaries of what AI can achieve through rigorous research, ethical development practices, and a relentless commitment to quality. Customer-centricity drives our innovations, ensuring that our products and services are built around the real needs and aspirations of passengers and industry partners. Collaboration and transparency are integral to our culture, as we believe that the best solutions emerge from working closely with clients, regulators, and technology leaders. Finally, we are committed to sustainability, recognizing that the future of aviation must balance growth with environmental responsibility. At InovativAi, our values are not just words—they are the principles that guide us as we build the future of air travel."
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
