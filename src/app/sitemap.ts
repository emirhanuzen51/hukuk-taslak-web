import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { articles } from "@/lib/articles";
import { lawyer } from "@/lib/lawyer";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = lawyer.site;
  return [
    ...[
      "",
      "/hakkimda",
      "/calisma-alanlari",
      "/hukuki-bilgiler",
      "/iletisim",
      "/kvkk",
      "/cerez-politikasi",
    ].map((path) => ({ url: `${base}${path}` })),
    ...areas.map((a) => ({ url: `${base}/calisma-alanlari/${a.slug}` })),
    ...articles.map((a) => ({ url: `${base}/hukuki-bilgiler/${a.slug}` })),
  ];
}
