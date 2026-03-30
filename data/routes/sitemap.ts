import type { MetadataRoute } from "next";
import { industries, policyPages, products, siteUrl, solutions } from "@/data/site/content";

export function buildSitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-03-11T00:00:00.000Z");
  const entries: MetadataRoute.Sitemap = [{ url: `${siteUrl}/`, lastModified, changeFrequency: "weekly" }];

  for (const solution of solutions) {
    entries.push({ url: `${siteUrl}${solution.seo.canonicalPath}`, lastModified, changeFrequency: "weekly" });
  }

  for (const product of products.filter((item) => !item.seo.noindex)) {
    entries.push({ url: `${siteUrl}${product.seo.canonicalPath}`, lastModified, changeFrequency: "weekly" });
  }

  entries.push({ url: `${siteUrl}/software`, lastModified, changeFrequency: "weekly" });

  for (const industry of industries) {
    entries.push({ url: `${siteUrl}${industry.seo.canonicalPath}`, lastModified, changeFrequency: "weekly" });
  }

  entries.push({ url: `${siteUrl}/contact-us`, lastModified, changeFrequency: "weekly" });

  for (const page of policyPages) {
    entries.push({ url: `${siteUrl}${page.seo.canonicalPath}`, lastModified, changeFrequency: "monthly" });
  }

  return entries;
}

