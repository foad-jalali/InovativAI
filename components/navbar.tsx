"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl">Radison</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/armax"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-900/50 to-purple-900 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">ArMax</div>
                            <p className="text-sm leading-tight text-white/70">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/nexora"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">Nexora</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/ai-and-data-solution"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">AI & Data Solutions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70">
                              Artificial Intelligence & Data Science, Machine Learning Models & Applications, and more.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/software-engineering-and-development"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">Software Engineering & Development</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70">
                              Software Architecture, Engineering, Implementation, and more.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/devops-and-project-delivery"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">DevOps & Project Delivery</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70">
                              DevOps Solutions, Agile & Project Management.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solutions/cloud-and-infrastructure-performance"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">Cloud, Infrastructure & Performance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70">
                              Cloud Computing, AI, Cloud, and Data Center Solutions, and more.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/industries/#technology-and-digital-innovation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">Technology and Digital Innovation</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/industries/#aviation-and-aerospace"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">Aviation & Aerospace</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/industries/#finance-and-banking"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">Finance & Banking</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/industries/#healthcare-and-life-sciences"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">Healthcare & Life Sciences</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/industries/#energy-and-oil-and-gas"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">Energy and Oil & Gas</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/industries/#education-and-e-learning"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/20 focus:bg-purple-900/20"
                          >
                            <div className="text-sm font-medium leading-none">Education & e-Learning</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/career" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Career</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/faq" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQ</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact-us" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <Link href="/contact-us" className="hidden md:flex btn-primary">
            Get in touch
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

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden flex flex-col space-y-1.5 z-50 ${isMenuOpen ? "hamburger-active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="p-8 h-full flex flex-col">
              <div className="flex flex-col space-y-6 mt-16">
                <Link href="/" className="text-xl font-medium hover:text-purple-400 transition-colors">
                  Home
                </Link>

                <div className="flex flex-col space-y-2">
                  <span className="text-xl font-medium">Products</span>
                  <Link href="/products/armax" className="pl-4 text-gray-300 hover:text-purple-400 transition-colors">
                    ArMax
                  </Link>
                  <Link href="/products/nexora" className="pl-4 text-gray-300 hover:text-purple-400 transition-colors">
                    Nexora
                  </Link>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-xl font-medium">Solutions</span>
                  <Link
                    href="/solutions/ai-and-data-solution"
                    className="pl-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    AI & Data Solutions
                  </Link>
                  <Link
                    href="/solutions/software-engineering-and-development"
                    className="pl-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Software Engineering & Development
                  </Link>
                  <Link
                    href="/solutions/devops-and-project-delivery"
                    className="pl-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    DevOps & Project Delivery
                  </Link>
                  <Link
                    href="/solutions/cloud-and-infrastructure-performance"
                    className="pl-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    Cloud, Infrastructure & Performance
                  </Link>
                </div>

                <Link href="/industries" className="text-xl font-medium hover:text-purple-400 transition-colors">
                  Industries
                </Link>
                <Link href="/about-us" className="text-xl font-medium hover:text-purple-400 transition-colors">
                  About Us
                </Link>
                <Link href="/blog" className="text-xl font-medium hover:text-purple-400 transition-colors">
                  Blog
                </Link>
                <Link href="/career" className="text-xl font-medium hover:text-purple-400 transition-colors">
                  Career
                </Link>
                <Link href="/faq" className="text-xl font-medium hover:text-purple-400 transition-colors">
                  FAQ
                </Link>
                <Link href="/contact-us" className="text-xl font-medium hover:text-purple-400 transition-colors">
                  Contact Us
                </Link>
              </div>

              <div className="mt-auto">
                <Link href="/contact-us" className="btn-primary w-full justify-center">
                  Get in touch
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
