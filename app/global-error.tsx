"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <div className="nx-container py-20">
          <h2 className="nx-section-title text-brand-black">Unexpected Error</h2>
          <p className="mt-3 text-brand-muted">{error.message || "Something went wrong."}</p>
          <button onClick={() => reset()} className="mt-6 rounded-[10px_0px] bg-brand-orange px-5 py-2 text-white">
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
