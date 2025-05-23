"use client";

import { useState } from "react";
import HeroSection from "@/components/hero-section";
import SectionHeading from "@/components/section-heading";

export default function FaqClient() {
    const faqItems = [
        {
            question: "What is InovativAI?",
            answer: "InovativAI is a technology company specializing in AI-driven solutions for aviation, cloud, data, and software engineering."
        },
        {
            question: "What industries does InovativAI serve?",
            answer: "We primarily focus on aviation but also offer Technology and Digital Innovation, Aviation & Aerospace, Finance & Banking, Healthcare & Life Sciences, Energy and Oil & Gas, Education & e-Learning and software engineering solutions across industries."
        },
        {
            question: "What AI products has InovativAI developed for aviation?",
            answer: "Our products include ArMax, an AI-powered In-Flight Entertainment system, and Nexora, an AI assistant enhancing passenger experiences."
        },
        {
            question: "Does InovativAI provide custom AI solutions?",
            answer: "Yes, we offer tailored AI, machine learning, and data analytics solutions to meet specific business needs and drive smarter decisions."
        },
        {
            question: "What cloud services does InovativAI offer?",
            answer: "We help businesses with cloud migration, data center design, AI hardware strategies, and performance optimization."
        },
        {
            question: "What software engineering services are available at InovativAI?",
            answer: "We provide software architecture design, embedded development, testing, secure development, UX/UI design, and implementation services."
        },
        {
            question: "How does InovativAI ensure security in its solutions?",
            answer: "Security is integral to all our solutions, from secure software practices to robust cloud infrastructures and AI system protections."
        },
        {
            question: "Can InovativAI help with real-time air data analytics and predictive maintenance?",
            answer: "Yes, we are expanding into real-time air data analytics, predictive maintenance, and operational optimization for aviation."
        },
        {
            question: "Is Nexora available for airlines today?",
            answer: "Nexora is currently under development, designed to deliver personalized, multilingual, and accessible in-flight experiences."
        },
        {
            question: "How can businesses partner with InovativAI?",
            answer: "Businesses can connect with us through our website to discuss customized solutions, partnerships, or schedule a consultation."
        }
    ];


    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <>
            {/* <HeroSection
        title="Frequently Asked Questions"
        backgroundImage="/homehero.jpg"
        alt=""
        subtitle="Find answers to common questions about InovativAI and our services."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about-us"
        showLogos={false}
      /> */}

            <section className="section-padding mt-24">
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
                                            className={`w-6 h-6 transition-transform ${openItem === index ? "transform rotate-180" : ""
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
                                        className={`mt-3 transition-all duration-300 overflow-hidden ${openItem === index
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
