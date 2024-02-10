import React from "react";
import BlogList from "@/app/_components/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Slava Bezgachev - Javascript Developer",
  description:
    "This is my personal website, where I occasionally write about web development and other things.",
};

const BlogIndexPage = () => {
  return <BlogList />;
};

export default BlogIndexPage;
