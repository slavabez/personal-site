import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "node:path";
import { globSync } from "glob";
import remarkGfm from "remark-gfm";
// @ts-ignore
import rehypePrism from "@mapbox/rehype-prism";

const MDX_PATH = "./public/articles/**/*.mdx";

export interface FrontmatterFields {
  title: string;
  description: string;
  date: string;
  lastmod: string;
  slug: string;
  tags: string[];
}

export interface MdxMeta {
  tags: string[];
  articles: FrontmatterFields[];
}

export function getMdxFiles() {
  const dir = path.join(process.cwd(), MDX_PATH);
  return globSync(dir);
}

export async function getMdxPaths() {
  // Read the directory
  const files = await getMdxMeta();
  return files.articles.map((file) => {
    return {
      slug: file.slug,
    };
  });
}

export async function getMdxMeta() {
  try {
    // Attempt to read the file locally
    if (!fs.existsSync("./public/blogmeta.json")) {
      // Attempt to read the file remotely
      const url = new URL("/blogmeta.json", process.env.NEXT_PUBLIC_SITE_URL);
      const res = await fetch(url.toString());
      const data = await res.json();
      return data as MdxMeta;
    }
    const file = fs.readFileSync("./public/blogmeta.json", "utf-8");
    return JSON.parse(file) as unknown as MdxMeta;
  } catch (error) {
    console.error("Error reading blogmeta.json", error);
    return {
      tags: [],
      articles: [],
    } as MdxMeta;
  }
}

/**
 * Get all blog posts, with the metadata separated from the content
 * @param limit - optional. Zero for no limit
 */
export async function getAllMdxData(limit: number = 0) {
  const files = getMdxFiles();
  const allMdxContent = await Promise.all(
    files.map(async (file) => {
      const fileContent = fs.readFileSync(file, "utf-8");
      const { frontmatter, content } = await compileMDX<FrontmatterFields>({
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

  const sorted = allMdxContent.sort((a, b) =>
    a.frontmatter.date > b.frontmatter.date ? -1 : 1,
  );

  if (limit > 0) {
    return sorted.slice(0, limit);
  }
  return sorted;
}

export async function getMdxContentBySlug(slug: string) {
  const allMdxContent = await getAllMdxData();
  return allMdxContent.find((mdx) => mdx.frontmatter.slug === slug);
}

export async function getMdxMetaBySlug(slug: string) {
  let data = await getMdxMeta();
  return data.articles.find((mdx) => mdx.slug === slug);
}

export function formatDate(inputDate: string) {
  const date = new Date(inputDate);
  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
