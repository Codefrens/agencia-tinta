import type { MetadataRoute } from "next";

export default function robots({
  params,
}: {
  params: { lang: "es" | "en" };
}): MetadataRoute.Robots {
  const baseUrl = process.env.BASE_URL || "https://agenciatinta.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/${params.lang}/sitemap.xml`,
  };
}
