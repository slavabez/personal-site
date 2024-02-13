import fs from "fs";
import path from "node:path";
import { globSync } from "glob";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const MDX_PATH = "./public/articles/**/*.mdx";

export async function getAllMdxData() {
  const dir = path.join(process.cwd(), MDX_PATH);
  const files = globSync(dir);
  const allMdxContent = await Promise.all(
    files.map(async (file) => {
      const fileContent = fs.readFileSync(file, "utf-8");
      const { frontmatter, content } = await compileMDX({
        source: fileContent,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrism],
          },
        },
      });
      return {
        frontmatter,
        content,
      };
    }),
  );

  return allMdxContent.sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1,
  );
}

(async () => {
  const data = await getAllMdxData();
  const tags = new Set();

  const allMeta = data.map((i) => {
    if (i.frontmatter.tags) {
      i.frontmatter.tags.forEach((tag) => tags.add(tag));
    }
    return i.frontmatter;
  });
  const meta = {
    tags: Array.from(tags),
    articles: allMeta,
  };
  fs.writeFileSync("./.blogmeta.json", JSON.stringify(meta));
})();
