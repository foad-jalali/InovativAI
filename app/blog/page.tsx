import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "April 15, 2023",
      image: "/placeholder.svg?height=1080&width=1920",
    },
    {
      id: 2,
      title: "How Machine Learning is Transforming Industries",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "March 28, 2023",
      image: "/placeholder.svg?height=1080&width=1920",
    },
    {
      id: 3,
      title: "The Importance of Data Security in AI Applications",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "February 12, 2023",
      image: "/placeholder.svg?height=1080&width=1920",
    },
    {
      id: 4,
      title: "Cloud Computing: The Backbone of Modern Business",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "January 30, 2023",
      image: "/placeholder.svg?height=1080&width=1920",
    },
    {
      id: 5,
      title: "DevOps Best Practices for Agile Teams",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "December 15, 2022",
      image: "/placeholder.svg?height=1080&width=1920",
    },
    {
      id: 6,
      title: "The Role of UX Design in Software Development",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      date: "November 22, 2022",
      image: "/placeholder.svg?height=1080&width=1920",
    },
  ]

  return (
    <>
      <HeroSection
        title="Blog & Insights"
        subtitle="Stay updated with the latest trends, insights, and news in AI, technology, and business automation."
        primaryButtonText="Subscribe"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Latest Articles"
        secondaryButtonLink="#blog-posts"
        showLogos={false}
      />

      <section id="blog-posts" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Latest Articles"
            subtitle="Explore our collection of articles on AI, technology, and business automation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={640}
                    height={360}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-purple-400 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <Link href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                    Read More
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
            ))}
          </div>

          <div className="flex justify-center mt-12" data-aos="fade-up">
            <Link href="#" className="btn-primary">
              View All Articles
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
      </section>

      <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container-custom">
          <SectionHeading
            title="Subscribe to Our Newsletter"
            subtitle="Stay updated with our latest articles, insights, and news."
          />

          <div className="max-w-xl mx-auto" data-aos="fade-up">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
