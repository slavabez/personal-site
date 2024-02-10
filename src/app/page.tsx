import React from "react";
import BlogList from "@/app/_components/BlogList";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slava Bezgachev - Javascript Developer",
  description:
    "This is my personal website, where I occasionally write about web development and other things.",
};

export default function Home() {
  return (
    <main className="m-auto prose dark:prose-invert">
      <h1 className="text-5xl font-bold">Welcome to my page!</h1>
      <p className="text-xl">
        This is a blog about my thoughts and experiences as a software
        developer.
      </p>
      <p className="text-xl">
        I occasionally write about web dev, servers, hardware and any other
        things I have on my mind.
      </p>
      <p className="text-xl">
        Read more about me on the <Link href="/about">about me page</Link> or
        view my contact details on the <Link href="/contact">contact page</Link>
        .
      </p>
      <hr />
      <BlogList title="Latest posts" limit={3} />
    </main>
  );
}
