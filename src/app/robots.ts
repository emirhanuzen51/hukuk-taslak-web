import type { MetadataRoute } from "next";
import { lawyer } from "@/lib/lawyer";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${lawyer.site}/sitemap.xml`,
  };
}
