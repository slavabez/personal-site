import React from "react";
import { formatDate, getAllMdxData } from "@/lib/mdxUtils";
import Link from "next/link";

interface BlogListProps {
  title?: string;
  limit?: number;
}
const BlogList = async ({ title, limit }: BlogListProps) => {
  const recentPosts = await getAllMdxData(limit ?? 0);
  return (
    <>
      <h1>{title ?? "All blog posts"}</h1>
      <ul className="container space-y-4 p-0 flex flex-col gap-6">
        {recentPosts.map((p) => (
          <li key={p.frontmatter.slug} className="list-none p-0 mx-0">
            <Link href={`/blog/${p.frontmatter.slug}`}>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl my-2">
                {p.frontmatter.title}
              </h2>
            </Link>

            <p className="text-gray-400 dark:text-gray-500 m-0">
              Posted on {formatDate(p.frontmatter.date)}
            </p>
            <p className="m-0">{p.frontmatter.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
