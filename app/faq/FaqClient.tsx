"use client";

import { useState } from "react";
import HeroSection from "@/components/hero-section";
import SectionHeading from "@/components/section-heading";

export default function FaqClient() {
  const faqItems = [
    { question: "What is InovativAI?", answer: "..." },
    { question: "How can AI automation benefit my business?", answer: "..." },
    { question: "What industries does InovativAI serve?", answer: "..." },
    { question: "How does the implementation process work?", answer: "..." },
    { question: "What is the typical timeline for implementation?", answer: "..." },
    { question: "How does InovativAI ensure data security?", answer: "..." },
    { question: "What support options are available?", answer: "..." },
    { question: "How can I get started with InovativAI?", answer: "..." },
  ];

  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        backgroundImage="/homehero.jpg"
        alt=""
        subtitle="Find answers to common questions about InovativAI and our services."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about-us"
        showLogos={false}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Common Questions"
            subtitle="Browse through our frequently asked questions to find the information you need."
          />

          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="divide-y divide-white/10">
              {faqItems.map((item, index) => (
                <div key={index} className="py-6">
                  <button
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-xl font-semibold">{item.question}</h3>
                    <svg
                      className={`w-6 h-6 transition-transform ${
                        openItem === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`mt-3 transition-all duration-300 overflow-hidden ${
                      openItem === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Still Have Questions?"
            subtitle="Contact our team for more information about our services and solutions."
          />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4" data-aos="fade-up">
            <a href="/contact-us" className="btn-primary">
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
