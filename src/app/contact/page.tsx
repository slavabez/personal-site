import React from "react";
import Aside from "@/app/_components/Aside";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts | Slava Bezgachev - Javascript Developer",
  description:
    "This is my personal website, where I occasionally write about web development and other things.",
};

const ContactMePage = () => {
  return (
    <div className="flex gap-6">
      <Aside />
      <main className="prose dark:prose-invert flex-grow">
        <h1 className="text-4xl font-bold">Contact me</h1>

        <p className="text-lg">
          You can contact me at{" "}
          <a href="mailto:bezgachev@gmail.com">my personal email</a>.
        </p>

        <p className="text-lg">
          My GitHub profile is{" "}
          <a href="https://github.com/slavabez">@slavabez</a>.
        </p>
        <p className="text-lg">
          Twitter: <a href="https://twitter.com/slavabez">@slavabez</a>
        </p>
      </main>
    </div>
  );
};

export default ContactMePage;
