import type { Metadata } from "next";
import { siteUrl } from "@/data/site/content";

export type MetadataInput = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
};

export function toMetadata(seo: MetadataInput): Metadata {
  const canonical = new URL(seo.canonicalPath, siteUrl).toString();
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical },
    robots: seo.noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: "Niurix",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

