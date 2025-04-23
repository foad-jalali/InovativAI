import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image width={50} height={50} src="/logo.png" alt="logo" />
              <span className="font-bold text-xl text-white">InovativAI</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Experience the future of business with intelligent, scalable
              automation solutions tailored to your needs.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <Link
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              ></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/solutions/ai-and-data-solution"
                  className="hover:text-white"
                >
                  AI & Data Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/software-engineering-and-development"
                  className="hover:text-white"
                >
                  Software Engineering & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/devops-and-project-delivery"
                  className="hover:text-white"
                >
                  DevOps & Project Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/cloud-and-infrastructure-performance"
                  className="hover:text-white"
                >
                  Cloud & Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-2">
              123 Innovation Drive, Tech City
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Email: info@inovativai.com
            </p>
            <p className="text-gray-400 text-sm">Phone: +44 1234 567890</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} InovativAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
