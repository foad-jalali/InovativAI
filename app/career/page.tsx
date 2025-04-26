import HeroSection from "@/components/hero-section";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";

export default function CareerPage() {
  return (
    <>
      {/* <HeroSection
        title="Join Our Team"
        subtitle="Explore career opportunities at InovativAI and be part of a team that's transforming the future of business automation."
        primaryButtonText="View Open Positions"
        primaryButtonLink="#open-positions"
        secondaryButtonText="About Us"
        secondaryButtonLink="/about-us"
        showLogos={false}
      /> */}

      <section id="open-positions" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Join Our Team"
            subtitle="We're always looking for talented individuals to join our team."
          />

          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
          >
            {[
              "AI Engineer",
              "Software Developer",
              "DevOps Engineer",
              "UX Designer",
              "Data Scientist",
              "Project Manager",
            ].map((position, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{position}</h3>
                <p className="text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet.
                </p>
                <Link
                  href="#application-form"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                >
                  Apply Now
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
            ))}
          </div>
        </div>
      </section>

      <section
        id="application-form"
        className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent"
      >
        <div className="container-custom">
          <SectionHeading
            title="Apply Now"
            subtitle="Fill out the form below to apply for a position at InovativAI."
          />

          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <form className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium mb-2"
                >
                  Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-sm font-medium mb-2"
                >
                  Portfolio
                </label>
                <input
                  type="file"
                  id="portfolio"
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button type="submit" className="btn-primary justify-center">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
