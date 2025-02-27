import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export default function PortfolioDetailPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const { lang, slug } = params;

  // Construimos la ruta del archivo JSON basado en el idioma y el slug
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

  // Leemos el JSON del trabajo
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  console.log(content);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{content.title}</h1>
      <p className="text-gray-600">{content.subtitle}</p>
    </div>
  );
}
