import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

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

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{content.title}</h1>
      <p className="text-gray-600">{content.subtitle}</p>
    </div>
  );
}
