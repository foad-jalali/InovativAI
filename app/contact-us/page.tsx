import HeroSection from "@/components/hero-section";
import SectionHeading from "@/components/section-heading";
import { generateMetadata } from "@/components/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us | InovativAI - Get in Touch",
  description: "Reach out to InovativAI for inquiries about our AI-driven aviation solutions, software development services, or to request a consultation with our experts.",
  url: "https://inovativai.com/contact-us",
  image: "/images/og-contact.jpg",
  keywords: "Contact InovativAI, AI Solutions Contact, Aviation Technology Inquiry, Software Development Consultation, Business Inquiries, Contact AI Experts, Smart Aviation Solutions",
});
export default function ContactUsPage() {
  return (
    <>
      {/* <HeroSection
        title="Contact Us"
        backgroundImage="/homehero.jpg"
        alt=""
        subtitle="Get in touch with our team to learn more about our services and solutions."
        primaryButtonText="Call Us"
        primaryButtonLink="tel:+1234567890"
        secondaryButtonText="Email Us"
        secondaryButtonLink="mailto:info@InovativAI.com"
        showLogos={false}
      /> */}

      <section className="section-padding mt-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-up">
              <SectionHeading
                title="Get In Touch"
                subtitle="Fill out the form below to get in touch with our team."
                centered={false}
              />

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
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary justify-center">
                  Send Message
                </button>
              </form>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out to us through any of the following channels."
                centered={false}
              />

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+1-587-987-0697</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@inovativai.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-gray-300">
                      302 - 10650 113 Street NW,
                      <br />
                      Edmonton, Alberta T5H 3H6,
                      <br />
                      CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
