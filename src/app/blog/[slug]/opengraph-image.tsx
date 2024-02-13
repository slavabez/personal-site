import { ImageResponse } from "next/og";
import {
  FrontmatterFields,
  getMdxContentBySlug,
  getMdxMetaBySlug,
} from "@/lib/mdxUtils";

export const alt = "Slava B. blog post";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Using Next.js Image generation to generate a static image with the blog data
export default async function OGImage({
  params,
}: {
  params: { slug: string };
}) {
  const blogPostData = getMdxMetaBySlug(params.slug);

  if (!blogPostData) {
    return new ImageResponse(
      (
        <div tw="flex flex-col gap-4 items-center justify-center h-[630px] w-[1200px] text-center bg-slate-50 text-slate-900">
          <h1 tw="text-6xl">404. Page not found</h1>
          <p tw="text-4xl">
            Could not find the requested resource. Please check the URL and try
            again.
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  }

  const date = new Date(blogPostData.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Cut the summary to 300 characters
  const summary =
    blogPostData.description.length > 300
      ? blogPostData.description.slice(0, 300) + "..."
      : blogPostData.description;

  return new ImageResponse(
    (
      <div tw="flex flex-col gap-4 items-center justify-center h-[630px] w-[1200px] text-center bg-slate-50 text-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://gravatar.com/avatar/7951f7bae37af4b59b74c96db5de6bff?s=400&d=robohash&r=x"
          alt="Slava Bezgachev profile photo"
          tw="w-40 rounded-full"
        />
        <h1 tw="text-6xl">{blogPostData.title}</h1>
        <p tw="text-2xl text-slate-500">Posted on {formattedDate}</p>
        <p tw="text-4xl">{summary}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
