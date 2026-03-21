import type { MetadataRoute } from "next";
import { buildSitemap } from "@/data/routes/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap();
}
