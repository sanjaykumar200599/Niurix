import type { Metadata } from "next";
import BlogListing from "@/components/blogs/BlogListing";
import { toMetadata } from "@/data/site/seo";

export const revalidate = 3600;

export const metadata: Metadata = toMetadata({
  title: "Blogs | Niurix",
  description: "Legacy blogs route retained for backward compatibility.",
  canonicalPath: "/blogs",
  noindex: true,
  previewImage: "/assets/homepreview.png",
});

export default function BlogsPage() {
  return <BlogListing />;
}
