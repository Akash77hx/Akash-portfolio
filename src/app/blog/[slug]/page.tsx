import BlogDetailSection from "@/components/sections/blog-detail-section";
import React from 'react'

export async function generateStaticParams() {
  return [
    { slug: "first-post" },
    { slug: "second-post" },
  ];
}

// Static placeholder blog data
const posts: any = {
  "first-post": {
    title: "First Post",
    url: "/blog/first-post",
    description: "This is a placeholder for the first post.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    categories: [],
    createdAt: "2024-01-01",
    publishedAt: "2024-01-01",
    views: 0,
  },
  "second-post": {
    title: "Second Post",
    url: "/blog/second-post",
    description: "This is a placeholder for the second post.",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: [],
    createdAt: "2024-01-02",
    publishedAt: "2024-01-02",
    views: 0,
  },
};

const Blog = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const data = posts[slug];
    if (!data) return <div>Not found</div>;
    return (
        <main className="relative flex flex-col items-center justify-center w-full overflow-hidden">
            <BlogDetailSection data={data} />
        </main>
    )
};

export default Blog
