import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "aos/dist/aos.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "InovativAI",
//   description:
//     "Experience the future of business with intelligent, scalable automation solutions tailored to your needs",
//   generator: "v0.dev",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="UL-gV3xS9c8ODgiaZK2xyekQZY0iB2LdKQv4x9XrrBU" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* ✅ AOS Scripts */}
        <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="beforeInteractive" />
        <Script id="aos-init" strategy="afterInteractive">
          {`
            AOS.init({
              duration: 600,
              once: false,
              mirror: false
            });
          `}
        </Script>
      </body>
    </html>
  )
}
