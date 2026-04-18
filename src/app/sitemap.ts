import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://estudiojuridicoflapo.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://estudiojuridicoflapo.com/privacidad",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://estudiojuridicoflapo.com/terminos",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
