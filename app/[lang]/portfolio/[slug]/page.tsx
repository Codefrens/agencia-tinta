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
