import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site/content";

export function buildRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/blogs", "/products/ONT-G2410", "/products/OLT-SOLT33-16P"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
