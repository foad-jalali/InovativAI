"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import SectionHeading from "./section-heading";

export default function CareerForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        resume: null as File | null,
        coverLetter: null as File | null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, files } = e.target;

        if (files) {
            setFormData((prev) => ({
                ...prev,
                [id]: files[0],
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [id]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const form = new FormData();
            form.append("fullName", `${formData.firstName} ${formData.lastName}`);
            form.append("email", formData.email);

            if (formData.resume) {
                form.append("resume", formData.resume);
            }
            if (formData.coverLetter) {
                form.append("coverLetter", formData.coverLetter);
            }

            const res = await fetch("/api/send-email", {
                method: "POST",
                body: form,
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Application submitted successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    resume: null,
                    coverLetter: null,
                });
            } else {
                toast.error("Failed to submit application. Please try again later.");
            }
        } catch (error) {
            console.error("Submit error:", error);
            toast.error("An unexpected error occurred!");
        } finally {
            setIsSubmitting(false);
        }
    };

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

            <section id="open-positions" className="section-padding mt-24">
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
                            ["AI Engineer", "Designs and implements intelligent systems using machine learning, data science, and AI technologies."],
                            ["Front-End Developer", "Builds user-facing applications with a focus on design, responsiveness, and seamless user experience."],
                            ["Business Analyst", "Analyzes business needs, gathers requirements, and bridges the gap between stakeholders and development teams."],
                            ["Project Manager", "Manages project planning, resources, and execution to deliver results on time, within budget, and to quality standards."],
                            ["Product Manager", "Defines product vision, strategy, and roadmap to deliver solutions that meet customer and business needs."],
                            ["Product Owner", "Prioritizes and manages the product backlog, ensuring development teams deliver maximum value."],
                        ].map((position, index) => (
                            <div
                                key={index}
                                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
                            >
                                <h3 className="text-xl font-bold mb-2">{position[0]}</h3>
                                <p className="text-gray-300 mb-4">
                                    {position[1]}
                                </p>
                                <Link
                                    href="#application-form"
                                    className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                                >
                                    <span>Apply Now</span>
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
            {/* 
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
                        <form onSubmit={handleSubmit} className="grid gap-6" encType="multipart/form-data">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="resume" className="block text-sm font-medium mb-2">
                                    Resume
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    onChange={handleChange}
                                    accept=".pdf,.doc,.docx"
                                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
                                    Cover Letter
                                </label>
                                <input
                                    type="file"
                                    id="coverLetter"
                                    onChange={handleChange}
                                    accept=".pdf,.doc,.docx"
                                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary justify-center flex items-center"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 mr-2 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            ></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Application"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section> */}

            <section
                id="application-form"
                className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent"
            >
                <div className="container-custom">
                    <SectionHeading
                        title="Join InovativAI and Build the Future"
                        subtitle="We're looking for talented individuals. Apply now and become part of a team shaping tomorrow's technology."
                    />

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4" data-aos="fade-up">
                        <Link href="mailto:contact@inovativai.com" className="btn-primary">
                            Send Resume
                        </Link>

                        {/* <Link href="mailto:careers@inovativai.com" className="btn-secondary">
                            Send Resume
                        </Link> */}
                    </div>
                </div>
            </section>

        </>
    );
}
