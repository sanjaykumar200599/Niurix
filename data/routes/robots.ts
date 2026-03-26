import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site/content";

export function buildRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/blogs", "/products/ONT-T2001", "/products/OLT-XGSPON-8P"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}


