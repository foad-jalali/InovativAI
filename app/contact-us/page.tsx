import ContactForm from "@/components/contact-form";
import { generateMetadata } from "@/components/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us | InovativAI - Get in Touch",
  description: "Reach out to InovativAI for inquiries about our AI-driven aviation solutions, software development services, or to request a consultation with our experts.",
  url: "https://inovativai.com/contact-us",
  image: "/homehero.jpg",
  keywords: "Contact InovativAI, AI Solutions Contact, Aviation Technology Inquiry, Software Development Consultation, Business Inquiries, Contact AI Experts, Smart Aviation Solutions",
});
export default function ContactUsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ContactForm />
      </div>
    </section>
  );
}
