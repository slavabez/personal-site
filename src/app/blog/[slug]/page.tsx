import React from "react";
import { notFound } from "next/navigation";
import { getMdxContentBySlug, getMdxPaths } from "@/lib/mdxUtils";
import { Metadata } from "next";

export async function generateStaticParams() {
  return getMdxPaths();
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const result = await getMdxContentBySlug(slug);
  if (!result) {
    return notFound();
  }

  const { frontmatter, content } = result;

  return {
    title: `${frontmatter.title} | Slava Bezgachev - Javascript Developer`,
    description: frontmatter.description,
  };
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const result = await getMdxContentBySlug(slug);
  if (!result) {
    return notFound();
  }

  const { frontmatter, content } = result;

  return (
    <>
      <h1 className="m-0">{frontmatter.title}</h1>
      <p className="m-0">{frontmatter.date.toString()}</p>
      {frontmatter.tags && (
        <div>
          {frontmatter.tags.map((tag) => (
            <span
              className="text-xs bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded mr-1"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div>{content}</div>
    </>
  );
};

export default BlogPostPage;
