"use client";

import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";

export default function SoftwareEngineeringPage() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <HeroSection
        title="Software Engineering & Development"
        subtitle="Build robust, scalable software solutions with our expert engineering and development services."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#software-architecture"
        showLogos={false}
      />

      <section id="software-architecture" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Software Architecture"
            subtitle="Design scalable, maintainable, and resilient systems from the ground up.
Architect the future with robust structures and smart patterns."
          />

          <FeatureSection
            title="Scalable Architecture Design"
            description="Software architecture defines the structure and foundation of any software system. At InovativAI, we help businesses design architecture that supports scalability, maintainability, and performance. Our architectural solutions are tailored to project size, complexity, and long-term goals.
We work with organizations to define best-fit patterns and principles that guide development from the ground up. Whether it's monolithic, microservices, or event-driven architecture, our solutions ensure a strong technical foundation for sustainable growth.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Software Architecture"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="software-engineering" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Software Engineering"
            subtitle="Craft reliable and efficient software with engineering excellence.
From code to delivery, we build solutions that last."
          />

          <FeatureSection
            title="Custom Software Development"
            description="Our software engineering solutions focus on applying best practices, methodologies, and principles to software development. We support the full software lifecycle, from planning and design to coding and maintenance, using agile and DevOps-driven approaches.
At InovativAI, we ensure that each solution is efficient, robust, and aligned with user needs and technical constraints. Our engineering process is transparent and collaborative, enabling teams to deliver reliable systems that evolve with business demands.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Software Engineering"
            reverse={true}
            buttonText="See Demo"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="software-implementation" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Software Implementation"
            subtitle="Seamless integration of software into your business ecosystem.
Bringing ideas to life through precise and efficient deployment."
          />

          <FeatureSection
            title="Efficient Implementation Strategies"
            description="Implementation is where ideas become functional systems. Our software implementation solutions guide organizations through the deployment and integration of software applications into existing environments. We ensure seamless transitions with minimal disruption.
Whether it's deploying a new platform or integrating with third-party tools, our team focuses on smooth rollouts, compatibility, and user adoption. Our goal is to help businesses realize value quickly and reliably.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Software Implementation"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section id="embeded-software-design" className="section-padding pt-32">
        <div className="container-custom">
          <SectionHeading
            title="Embedded Software Design"
            subtitle="Build smart systems with tightly integrated embedded software.
Precision, performance, and control — from microchips to machines."
          />

          <FeatureSection
            title="Embedded Software Design"
            description="Embedded software powers many modern devices, from IoT sensors to medical equipment. At InovativAI, we provide embedded software design solutions that combine efficiency, performance, and reliability.
We specialize in building software for resource-constrained environments where timing, stability, and precision are critical. Our solutions are tailor
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Web Development"
            reverse={true}
            buttonText="Explore Solutions"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section
        id="software-testing-and-quality-assurance"
        className="section-padding pt-32"
      >
        <div className="container-custom">
          <SectionHeading
            title="Software Testing and Quality Assurance"
            subtitle="Ensure flawless performance with rigorous testing and QA standards.
Detect issues early, deliver confidently."
          />

          <FeatureSection
            title="Software Testing and Quality Assurance"
            description="Quality assurance is key to delivering reliable software. Our testing and QA solutions ensure that every system we support meets functional and non-functional requirements before going live. We use automated and manual testing methods to validate performance, usability, and security.
From unit testing to system-level validation, our QA approach catches issues early and ensures continuous improvement. Our goal is to reduce risk, enhance user satisfaction, and support long-term maintainability.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Web Development"
            buttonText="Explore Solutions"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section
        id="software-testing-and-quality-assurance"
        className="section-padding pt-32"
      >
        <div className="container-custom">
          <SectionHeading
            title="Software Security"
            subtitle="Protect your software from threats with proactive security practices.
Secure by design, resilient by nature."
          />

          <FeatureSection
            title="Software Security"
            description="Security is a core aspect of all our development solutions. We offer software security solutions that identify, prevent, and mitigate vulnerabilities across the software lifecycle. Our team integrates secure coding practices, conducts threat modeling, and supports compliance with industry standards.
Whether it's application-level protection or secure deployment practices, our approach ensures that security is embedded from the start, not bolted on later. We help clients build trust by protecting data and safeguarding systems.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="Web Development"
            reverse={true}
            buttonText="Explore Solutions"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section
        id="ux-design-and-accessibility"
        className="section-padding pt-32"
      >
        <div className="container-custom">
          <SectionHeading
            title="UX Design and Accessibility"
            subtitle="Design intuitive experiences that everyone can enjoy and access.
Where usability meets inclusivity for maximum impact."
          />

          <FeatureSection
            title="User-Centered Design"
            description="User experience and accessibility are essential for adoption and usability. At InovativAI, our UX Design and Accessibility solutions focus on creating intuitive, inclusive, and user-friendly software interfaces.
We design experiences that cater to all users, including those with disabilities, ensuring compliance with accessibility standards. Our UX process involves research, prototyping, and iterative feedback to deliver designs that are both functional and engaging.
"
            imageSrc="/placeholder.svg?height=1080&width=1920"
            imageAlt="UI/UX Design"
            buttonText="Learn More"
            buttonLink="/contact-us"
          />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Ready to build your software solution?"
            subtitle="Contact our team today to discuss how our Software Engineering & Development services can help you achieve your goals."
          />

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            data-aos="fade-up"
          >
            <Link href="/contact-us" className="btn-primary">
              Contact Sales
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

            <Link
              href="/solutions/devops-and-project-delivery"
              className="btn-secondary"
            >
              Explore DevOps Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
