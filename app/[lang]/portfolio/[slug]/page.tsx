import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Hero from "@/components/PortfolioDetailPage/Hero";
import { getTranslations } from "../../translations";

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en"; slug: string }>;
}) {
  const { lang, slug } = await params;
  const { common } = await getTranslations(lang);

  const filePath = path.join(
    process.cwd(),
    "translations",
    "portfolio",
    lang,
    `${slug}.json`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const heroContent = {
    ...content.hero,
    clientLabel: common.client,
    yearLabel: common.year,
    sectorLabel: common.sector,
  };

  return (
    <main>
      <Hero {...heroContent} />
    </main>
  );
}

export async function generateStaticParams() {
  const langs = ["es", "en"];
  const portfolioDir = path.join(process.cwd(), "translations", "portfolio");

  let paths: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    const langDir = path.join(portfolioDir, lang);
    if (fs.existsSync(langDir)) {
      const files = fs.readdirSync(langDir);
      const slugs = files.map((file) => file.replace(".json", ""));
      paths = [...paths, ...slugs.map((slug) => ({ lang, slug }))];
    }
  }

  return paths;
}
