// src/pages/NotFound.jsx
export default function Error() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 p-6">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg">Oops! This page doesn't exist.</p>
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
        >
          Go to Home
        </a>
      </div>
    );
  }
  