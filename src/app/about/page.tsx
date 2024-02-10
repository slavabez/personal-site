import React from "react";
import Aside from "@/app/_components/Aside";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me | Slava Bezgachev - Javascript Developer",
  description:
    "This is my personal website, where I occasionally write about web development and other things.",
};

const AboutPage = () => {
  return (
    <div className="flex gap-6">
      <Aside />
      <main className="prose-lg dark:prose-invert flex-grow">
        <h1 className="text-4xl font-bold">About me</h1>
        <p>
          Welcome to my personal space on the web! My name is{" "}
          <span className="underline">Slava Bezgachev.</span> My{" "}
          <Link
            className="underline"
            href="/Resume_Slava_Bezgachev_Feb_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV / Resume in PDF.
          </Link>
        </p>
        <p>
          I&apos;m a dedicated software developer from Kazakhstan, with a deep
          passion for crafting innovative solutions using JavaScript and a suite
          of web technologies.
        </p>
        <p>
          With over 8 years of experience in the field, I specialize in bringing
          ideas to life through clean, efficient code and user-centric design.
          Whether building dynamic web applications or contributing to the
          development of complex platforms, my goal is always to exceed
          expectations and push the boundaries of what&apos;s possible in the
          digital world.
        </p>
        <h2>Technologies I have experience with:</h2>
        <ul className="list-disc">
          <li>
            <strong className="underline">JavaScript</strong>. I&apos;ve worked
            with JavaScript for over 8 years, comfortably solving a wide range
            of problems.
          </li>
          <li>
            <strong className="underline">Node.js</strong>. My go-to for
            server-side development, having built REST APIs, GraphQL servers,
            and more.
          </li>
          <li>
            <strong className="underline">React</strong>. I&apos;ve developed
            numerous projects using React, including this very website
          </li>
          <li>
            <strong className="underline">TypeScript</strong>. I&apos;m
            passionate about TypeScript and incorporate it into all my projects.
          </li>
          <li>
            <strong className="underline">Next.js</strong>. The framework behind
            this website. My preferred choice for full-stack web applications,
            especially for Server-Side Rendering (SSR).
          </li>
        </ul>
        <h2>Types of projects I&apos;ve built or contributed to:</h2>
        <ul className="list-disc">
          <li>
            <strong className="underline">Static websites.</strong> I&apos;ve
            built numerous static websites, such as blogs, promotional websites
            and simple single-purpose websites.
          </li>
          <li>
            <strong className="underline">A complex low-code platform.</strong>{" "}
            I was a senior front-end developer on a team that built a complex
            low-code platform. The platform featured a flexible BPM system,
            customizable entities and relationships between them, and more. Some
            of my accomplishments include:
            <ul className="list-disc">
              <li>
                <span className="underline">Performant forms.</span> I worked on
                creating a universal component that can render forms of any size
                and complexity with great performance. This involved
                re-structuring our code to use events-based state management to
                prevent the form re-rendering unnecessarily
              </li>
              <li>
                <span className="underline">Complex UI elements.</span>{" "}
                I&apos;ve created many complex visual representations of various
                entities and interactions between them. This included
                multi-structured and interlinked entities, tables, drag and drop
                interfaces etc.
              </li>
            </ul>
          </li>
          <li>
            <strong className="underline">
              A comprehensive platform for a client.
            </strong>{" "}
            I helped build a full-stack platform for a client. The platform
            featured both internal and external web apps, with complex business
            logic.
          </li>
          <li>
            <strong className="underline">
              Internal web apps for businesses.
            </strong>{" "}
            I&apos;ve built internal web apps for businesses, integrating
            seamlessly with existing systems and implementing complex business
            logic.
          </li>
        </ul>
        <p>
          Feel free to{" "}
          <Link className="underline" href={"/contact"}>
            contact me
          </Link>{" "}
          if you have any questions or would like to discuss a potential project
          or collaboration. I&apos;m always open to new opportunities and would
          love to hear from you!
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
