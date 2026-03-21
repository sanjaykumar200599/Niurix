"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body className="bg-white text-brand-black">
        <main className="mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center justify-center px-6 py-20 text-center">
          <h1 className="text-[32px] font-display leading-tight">Something went wrong</h1>
          <p className="mt-4 max-w-[640px] text-[18px] font-sans text-brand-muted">{error.message || "An unexpected error occurred."}</p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-8 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-[18px] font-sans text-white transition hover:bg-white hover:text-black"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
