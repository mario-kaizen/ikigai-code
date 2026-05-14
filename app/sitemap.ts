import type { MetadataRoute } from "next";
import { modules } from "@/lib/modules";

export const dynamic = "force-static";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://code.mariopaguio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/the-loop`, priority: 0.9 },
    { url: `${BASE_URL}/toolkit`, priority: 0.8 },
  ];

  const moduleRoutes = modules.map((m) => ({
    url: `${BASE_URL}/modules/${m.slug}`,
    priority: 0.9,
  }));

  return [...staticRoutes, ...moduleRoutes].map((r) => ({
    ...r,
    lastModified: now,
    changeFrequency: "weekly" as const,
  }));
}
