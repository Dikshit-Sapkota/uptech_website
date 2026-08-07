// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold">404</h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="mt-4 text-gray-600 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}