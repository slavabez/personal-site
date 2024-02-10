import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import LookingForAJobBanner from "@/app/_components/LookingForAJobBanner";
import Analytics from "@/app/Analytics";

const inter = Inter({ subsets: ["latin"] });

const LOOKING_FOR_JOBS = !!process.env.LOOKING_FOR_JOBS;

export const metadata: Metadata = {
  title: "Slava Bezgachev - Javascript Developer",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bezgachev.com",
  ),
  description:
    "This is my personal website, where I occasionally write about web development and other things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-950 min-h-[100vh]`}
      >
        <Analytics />
        <header className="border-b border-gray-200 dark:border-gray-800 relative">
          <div className="container p-4 max-w-[850px] m-auto">
            <div className="flex items-center justify-between space-x-4">
              <Link
                className="flex items-center space-x-2 text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="/"
              >
                <Image
                  src="/avatar_slava.png"
                  alt="Slava Bezgachev profile image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hidden sm:block">
                  Blog & thoughts
                </span>
              </Link>
              <nav className="flex items-center space-x-4">
                <Link
                  className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="/contact"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
          {LOOKING_FOR_JOBS && <LookingForAJobBanner />}
        </header>
        <div className="max-w-[850px] m-auto py-12 md:py-24 px-4 lg:py-32 gap-8">
          {children}
        </div>
        <footer></footer>
      </body>
    </html>
  );
}
