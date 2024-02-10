import React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/mdxUtils";

interface AsideBlogItemProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
}

const AsideBlogItem = ({
  date,
  excerpt,
  title,
  slug,
  tags,
}: AsideBlogItemProps) => {
  return (
    <li>
      <Link href={`/blog/${slug}`}>
        <span className="leading-tight text-lg font-semibold hover:underline hover:text-gray-900 dark:hover:text-gray-50">
          {title}
        </span>
        <p className="text-sm text-gray-500 dark:text-gray-400">{excerpt}</p>
        <time
          dateTime={date}
          className="block text-xs text-gray-700 dark:text-gray-200 mt-1"
        >
          {formatDate(date)}
        </time>
        {tags && (
          <div className="flex space-x-2 mt-1">
            {tags.splice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </li>
  );
};

export default AsideBlogItem;
