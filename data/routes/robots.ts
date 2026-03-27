import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site/content";

export function buildRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/blogs"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}


