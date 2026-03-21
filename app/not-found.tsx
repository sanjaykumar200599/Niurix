import Link from "next/link";

export default function NotFound() {
  return (
    <div className="nx-container py-24 text-center">
      <h1 className="nx-section-title">Page Not Found</h1>
      <p className="mt-4 text-brand-muted">The requested page is unavailable.</p>
      <Link href="/" className="mt-8 inline-flex rounded-[10px_0px] bg-brand-orange px-6 py-3 text-white">
        Back to Home
      </Link>
    </div>
  );
}

