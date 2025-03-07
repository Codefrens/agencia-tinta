import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Hero from "@/components/PortfolioDetailPage/Hero";
import { getTranslations } from "../../translations";
import ContentText from "@/components/PortfolioDetailPage/ContentText";
import OneImage from "@/components/ui/OneImage";
import TwoImage from "@/components/ui/TwoImage";
import VideoComponent from "@/components/ui/VideoComponent/VideoComponent";
import Related from "@/components/PortfolioDetailPage/Related";
import Cta from "@/components/Cta";
import ImagesInRow from "@/components/ui/ImagesInRow";
import UniqueReel from "@/components/ui/UniqueReel";

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
      {content.sections.map((section, index) => {
        switch (section.type) {
          case "paragraph":
            return (
              <ContentText
                key={section.title}
                title={section.title}
                paragraph={section.description}
              />
            );
          case "oneImage":
            return (
              <OneImage
                key={section.imageAlt}
                imageUrl={section.imageUrl}
                imageAlt={section.imageAlt}
                centered={section.centered}
                aspectRatio={section.aspectRatio}
              />
            );
          case "twoImages":
            return <TwoImage key={index} images={section.images} />;
          case "imagesInRow":
            return <ImagesInRow key={index} images={section.images} />;
          case "uniqueReel":
            return (
              <UniqueReel
                key={index}
                videoSrc={section.videoUrl}
                backText={section.backText}
                posterSrc={section.posterSrc}
                videoAlt={section.videoAlt}
              />
            );
          case "video":
            return (
              <VideoComponent
                key={index}
                posterSrc={section.posterSrc}
                videoSrc={section.videoUrl}
                videoAlt={section.videoAlt}
              />
            );
          default:
            return null;
        }
      })}
      <div style={{ marginTop: "100px" }}>
        <Cta translations={common.cta} />
      </div>
      <Related related={content.related} />
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
