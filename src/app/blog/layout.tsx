import React from "react";
import Aside from "@/app/_components/Aside";

export default function BlogListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6">
      <Aside />
      <main className="prose dark:prose-invert flex-grow">{children}</main>
    </div>
  );
}
