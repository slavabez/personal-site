import React from "react";
import { getAllMdxData } from "@/lib/mdxUtils";
import AsideBlogItem from "@/app/_components/AsideBlogItem";

const Aside = async () => {
  const recentPosts = await getAllMdxData(5);

  return (
    <aside className="max-w-52 hidden md:block">
      <h2 className="text-3xl font-bold mb-6">Recent posts</h2>
      <ul className="space-y-6">
        {recentPosts.map((p) => (
          <AsideBlogItem
            title={p.frontmatter.title}
            date={p.frontmatter.date}
            excerpt={p.frontmatter.description}
            slug={p.frontmatter.slug}
            key={p.frontmatter.slug}
            tags={p.frontmatter.tags}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
