import type { MetadataRoute } from "next";
import { buildRobots } from "@/data/routes/robots";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return buildRobots();
}
