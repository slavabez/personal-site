import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-8 text-center font-sans flex-grow">
      <h2 className="mb-4 text-center text-4xl font-bold">Page not found</h2>
      <p>
        Try going to the{" "}
        <Link className="text-blue-500 underline" href="/">
          home page
        </Link>
        .
      </p>
    </main>
  );
}
