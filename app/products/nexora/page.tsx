import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"
import { Metadata } from "next";
import { generateMetadata } from "@/components/seo";

export const metadata: Metadata = generateMetadata({
  title: "Nexora | InovativAI",
  description: "Nexora by InovativAI is a next-gen AI IFE Assistant delivering personalized, multilingual, voice-enabled, and accessible experiences in-flight.",
  url: "https://inovativai.com/",
  image: "/images/og-home.jpg",
  keywords: "Nexora IFE AI Assistant, In-Flight AI Entertainment System, Personalized Passenger Experience, Cabin Crew Messaging Tools, Bilingual IFE Support, Speech-to-Text for Airlines, Accessibility in IFE Systems, Intelligent App Recommendations for Flights",
});
export default function NexoraPage() {
  return (
    <>
      <HeroSection
        title="Nexora: Next-Generation Data Processing"
        backgroundImage="/nexora.jpg"
        alt=""
        subtitle="Nexora is InovativAi’s next-gen IFE AI Assistant, built to personalize and enhance in-flight experiences with multilingual support, voice, and smart entertainment."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact-us"
        // secondaryButtonText="Learn More"
        // secondaryButtonLink="#features"
        showLogos={false}
      />

      <section id="features" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Nexora Features"
            subtitle="Explore the Intelligent Capabilities That Redefine In-Flight Interaction and Personalization"
          />
        </div>
      </section>

      <FeatureSection
        title="Personalized Experience via PNR Integration"
        description={
          <>
            <p>Passengers begin their personalized journey with Nexora by entering their Passenger Name Record (PNR) into the seat-back screen. This step connects the user to a secure backend that retrieves relevant passenger data in real-time, including preferences, service entitlements, and tailored recommendations. With this integration, every interaction on the IFE platform is aligned to individual profiles, offering a custom-curated experience that reflects personal interests and needs. If an incorrect PNR is entered, the system provides gentle feedback with an opportunity to re-enter the correct information, ensuring a smooth and frustration-free start to the user’s journey.

            </p>
            <br />
            <p>
              This functionality marks a significant shift from generic IFE systems to a model where content, notifications, and services are presented based on actual passenger data. It also lays the foundation for deeper personalization across other modules like entertainment, shopping, or messaging, allowing passengers to feel recognized and valued throughout their time onboard.
            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Data Processing"
        // buttonText="Learn More"
        // buttonLink="/contact-us"
      />

      <FeatureSection
        title="Seamless Onboarding Flow"
        description={
          <>
            <p>
              First impressions matter, especially at 30,000 feet. Nexora welcomes passengers with a fast, elegant onboarding experience that introduces system capabilities and customizes the environment according to individual preferences. Within three clear, well-designed steps, users select their preferred language, explore key features, and enter any necessary data for personalization. This smooth and informative process ensures even first-time flyers or non-tech-savvy users feel confident using the system from the start.

            </p>
            <br />
            <p>
              To enhance clarity, each screen is minimal in text but rich in meaning, with clearly labeled navigation controls like “Next” and “Back.” The onboarding design reflects Nexora’s core values: simplicity, inclusivity, and intelligent guidance. By reducing friction and cognitive load early in the flight, Nexora sets the tone for a high-quality user experience throughout the journey.

            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Integration Capabilities"
        reverse={true}
        // buttonText="Learn About Integrations"
        // buttonLink="/contact-us"
      />
      <FeatureSection
        title="Full Bilingual Support: English & French"
        description={
          <>
            <p>
              In a multicultural and bilingual context like Canada, Nexora ensures that passengers can enjoy a fully immersive IFE experience in their language of choice. The platform is equipped with seamless toggling between English and French, offering complete translation coverage across menus, buttons, error messages, notifications, and support content. This bilingual support is activated during onboarding and persists across all screens and modules without requiring the user to make repeated adjustments.

            </p>
            <br />
            <p>
              Beyond mere translation, Nexora’s multilingual engine considers tone, phrasing, and cultural relevance to ensure clarity and comfort for all users. This thoughtful approach promotes accessibility, inclusivity, and consistency—especially important in flights with diverse passenger demographics. Airlines also benefit by reducing confusion, support calls, and negative feedback due to language limitations.

            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Integration Capabilities"
        // buttonText="Learn About Integrations"
        // buttonLink="/contact-us"
      />
      <FeatureSection
        title="Voice-to-Text Messaging for Efficient Cabin Crew Communication"
        description={
          <>
            <p>
              For cabin crew working in high-pressure, physically dynamic environments, Nexora offers a powerful voice-to-text messaging solution. Through a simple tap on the crew interface, flight attendants can activate the built-in microphone, dictate messages in English, and have them transcribed with high accuracy. Before sending, they can review the generated text to ensure clarity and professionalism. This feature significantly reduces the time and effort required to type on limited screen space, especially during turbulence or when multitasking.

            </p>
            <br />
            <p>
              The addition of this tool reflects Nexora’s broader commitment to crew empowerment. It not only improves communication speed but also supports safer and more efficient workflows. In the future, this functionality may extend to multiple languages and real-time translation, further bridging the communication gap between global crews and international passengers.

            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Integration Capabilities"
        reverse={true}
        // buttonText="Learn About Integrations"
        // buttonLink="/contact-us"
      />
      <FeatureSection
        title="Smart Chatbot for Instant In-Flight Assistance"
        description={
          <>
            <p>
              Nexora’s built-in AI-powered chatbot functions as an ever-available assistant for passengers throughout the flight. Integrated with both the seat-back system and the airline’s mobile app, the chatbot answers frequently asked questions related to flight details, baggage policies, in-flight purchases, and destination information. Its natural, conversational tone makes passengers feel like they're talking to a knowledgeable travel companion—not navigating a clunky help system.
            </p>
            <br />
            <p>
              The chatbot also employs prompt suggestions to make user input easier and faster, predicting needs based on context and behavior. As a result, passengers spend less time searching for information and more time enjoying the flight. It reduces the service burden on cabin crew while simultaneously increasing engagement, satisfaction, and brand loyalty for the airline.

            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Integration Capabilities"
        // buttonText="Learn About Integrations"
        // buttonLink="/contact-us"
      />
      <FeatureSection
        title="Interactive Messaging Dashboard for Cabin Crew & Passengers"
        description={
          <>
            <p>
              Two-way communication between crew and passengers is vital, especially in long-haul and international flights. Nexora provides a dedicated messaging interface that allows cabin crew to respond to passenger queries in their preferred language, enhancing clarity and comfort. This dashboard is available through both the seat-back screen and mobile interface, ensuring accessibility across touchpoints.

            </p>
            <br />
            <p>
              All messages are encrypted and timestamped, and passengers are notified when their messages are delivered and read. The system supports multilingual delivery and integrates with other Nexora features like speech-to-text and TTS for accessibility. Overall, the dashboard creates a responsive and inclusive communication channel that makes every passenger feel heard and attended to.

            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Integration Capabilities"
        // buttonText="Learn About Integrations"
        // buttonLink="/contact-us"
      />
      <FeatureSection
        title="Personalized App Recommendations for Entertainment & More"
        description={
          <>
            <p>
              Entertainment isn’t one-size-fits-all. Nexora’s dynamic recommendation system offers personalized suggestions across key domains such as streaming (e.g., Netflix), gaming, e-learning (e.g., Duolingo), and e-commerce (e.g., Amazon). Powered by behavior-based modeling and preference data, the system continuously updates recommendations based on what passengers view, accept, or skip—ensuring relevance and freshness throughout the flight.

            </p>
            <br />
            <p>
              Apps that were previously declined or used are intelligently filtered out unless new content becomes available, and suggestions load in under five seconds even under typical in-flight connectivity conditions. This combination of responsiveness and personalization helps passengers discover meaningful, enjoyable content quickly and effortlessly.

            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Integration Capabilities"
        reverse={true}
        // buttonText="Learn About Integrations"
        // buttonLink="/contact-us"
      />
      <FeatureSection
        title="Accessibility Features with Optional Text-to-Speech Support"
        description={
          <>
            <p>
              Inclusivity is a pillar of Nexora’s design. The optional Text-to-Speech (TTS) feature empowers passengers with visual impairments, reading challenges, or cognitive disabilities to interact fully with the IFE platform. When activated via the accessibility settings, TTS reads all on-screen text aloud, including instructions, menu items, and notifications, using a natural and adjustable voice.

            </p>
            <br />
            <p>
              Users can control the speech speed and volume through easy on-screen controls, and the TTS service supports all system languages. With this feature, Nexora ensures that the flying experience is welcoming and accessible to every individual—reinforcing the idea that intelligent design includes everyone.
            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Integration Capabilities"
        // buttonText="Learn About Integrations"
        // buttonLink="/contact-us"
      />
      <FeatureSection
        title="Why Nexora Is a Game-Changer in IFE AI Assistance"
        description={
          <>
            <p>
              Nexora isn’t just another IFE system—it’s a transformative leap forward in digital inflight interaction. As a smart, responsive AI assistant, Nexora provides a unified platform that handles personalization, accessibility, real-time communication, and intelligent recommendations with precision and empathy. Unlike fragmented legacy systems, Nexora is built from the ground up to serve today’s digitally connected, experience-focused travelers.

            </p>
            <br />
            <p>
              Currently under development, Nexora reflects InovativAi’s long-term vision for a smarter, more adaptive aviation ecosystem. It provides airlines with a future-ready solution to modernize operations, reduce service friction, and offer a more meaningful travel experience. By improving communication between crew and passengers, supporting diverse languages and needs, and adapting content in real time, Nexora positions itself as a key player in the evolution of in-flight technology—bridging the gap between utility, personalization, and innovation in the skies.

            </p>
          </>
        }
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Integration Capabilities"
        reverse={true}
        // buttonText="Learn About Integrations"
        // buttonLink="/contact-us"
      />

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Ready to get started with Nexora?"
            subtitle="Contact our team today to schedule a demo and see how Nexora can transform your data processing."
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

            <Link href="/products/armax" className="btn-secondary">
              Explore ArMax
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
