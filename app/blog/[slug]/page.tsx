import { promises as fs } from "fs";
import path from "path";
import HeroSection from "@/components/hero-section";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}
const BLOG_POSTS_PATH = path.join(process.cwd(), "db", "blogPost.json");

async function getBlogPosts() {
    const data = await fs.readFile(BLOG_POSTS_PATH, "utf8");
    return JSON.parse(data);
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const posts = await getBlogPosts();
    const post = posts.find((p: any) => p.slug === params.slug);

    if (!post) {
        return {
            title: "Post Not Found | InovativAI Blog",
            description: "The blog post you're looking for was not found.",
        };
    }

    return {
        title: `${post.title} | InovativAI Blog`,
        description: post.short_description,
        url: `https://inovativai.com/blog/${post.slug}`,
        image: post.image || "/homehero.jpg",
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const posts = await getBlogPosts();
    const post = posts.find((p: any) => p.slug === params.slug);

    if (!post) {
        return (
            <div className="container-custom pt-20 md:pt-32 pb-1">
                <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            </div>
        );
    }

    return (
        <>
            <div className="container-custom pt-32 pb-16">
                <h1 className="flex flex-wrap gap-2 mb-4 mt-10">{post.title}</h1>
                <p className="flex flex-wrap gap-2 mb-4 mt-10">{post.short_description}</p>
                <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                    <p className="text-gray-400 whitespace-nowrap">{formatDate(post.created_at)}</p>

                    {post.tags && post.tags.length > 0 && (
                        <>
                            <span className="text-gray-600">|</span>
                            {post.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-purple-800/20 text-purple-300 rounded-full whitespace-nowrap"
                                >
                                    {tag}
                                </span>
                            ))}
                        </>
                    )}
                </div>

                <div
                    className="container mx-auto px-4 md:px-8 pt-10 pb-16 rounded-lg text-gray-300 [&>p]:leading-8 [&>h2]:mt-10 [&>h2]:mb-6 [&>h3]:mt-8 [&>h3]:mb-4 [&>img]:mx-auto [&>img]:my-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2"
                    dangerouslySetInnerHTML={{ __html: post.description }}
                />
            </div>
            <section className="section-padding bg-gradient-to-b from-purple-900/20 to-transparent">
                <div className="container-custom">
                    <SectionHeading
                        title="Explore More Insights"
                        subtitle="Dive deeper into our latest articles and discover how innovation is transforming industries worldwide."
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

                        <Link href="/blog" className="btn-secondary">
                            View All Articles
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
