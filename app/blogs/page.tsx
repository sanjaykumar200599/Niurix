import type { Metadata } from "next";
import BlogListing from "@/components/blogs/BlogListing";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blogs | Niurix",
  description: "Legacy blogs route retained for backward compatibility.",
  robots: { index: false, follow: false },
};

export default function BlogsPage() {
  return <BlogListing />;
}