import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Hero from "@/components/PortfolioPage/Hero";
import PortfolioGrid from "@/components/PortfolioPage/PortfolioGrid";
import Blob from "@/components/ui/Blob";
import DetailHero from "@/components/PortfolioDetailPage/Hero";
import ContentText from "@/components/PortfolioDetailPage/ContentText";
import OneImage from "@/components/ui/OneImage";
import TwoImage from "@/components/ui/TwoImage";
import VideoComponent from "@/components/ui/VideoComponent/VideoComponent";
import Related from "@/components/PortfolioDetailPage/Related";
import Cta from "@/components/Cta";
import ImagesInRow from "@/components/ui/ImagesInRow";
import UniqueReel from "@/components/ui/UniqueReel";
import { getTranslations } from "../../../translations";
import { SEO_METADATA, generateSEOMetadataPortfolioDetailPage } from "@/utils/SEOmetadata";
import { loadLocalContent } from "@/content/fetch";
import { PortfolioFilters, Translations } from "@/translations/types";

const BASE_URL = process.env.BASE_URL || "https://agenciatinta.com";
const langs = ["es", "en"] as const;

type ResolvedGrid = {
  type: "grid";
  projects: Translations["common"]["portfolioGrid"];
  filters: PortfolioFilters;
  activeCategory: string | null;
  activeSubcategory: string | null;
};

type ResolvedDetail = {
  type: "detail";
  lang: "es" | "en";
  slug: string;
};

type Resolved = ResolvedGrid | ResolvedDetail;

function buildFiltersIndex(filters: PortfolioFilters) {
  const labelToSlug = new Map(filters.categories.map((c) => [c.label, c.slug]));
  const slugToCat = new Map(filters.categories.map((c) => [c.slug, c]));
  const categorySlugs = new Set(filters.categories.map((c) => c.slug));
  const subcatsByCat = new Map(
    filters.categories.map((c) => [
      c.slug,
      new Set(c.subcategories.map((s) => s.slug)),
    ])
  );
  return { labelToSlug, slugToCat, categorySlugs, subcatsByCat };
}

async function resolveSegments(
  lang: "es" | "en",
  segments: string[] | undefined
): Promise<Resolved> {
  const { common } = await getTranslations(lang);
  const projects = common.portfolioGrid;
  const filters = common.portfolioFilters;
  const { labelToSlug, categorySlugs, subcatsByCat } = buildFiltersIndex(filters);
  const projectSlugs = new Set(projects.map((p) => p.slug));

  const segs = segments ?? [];

  if (segs.length === 0) {
    return {
      type: "grid",
      projects,
      filters,
      activeCategory: null,
      activeSubcategory: null,
    };
  }

  if (segs.length === 1) {
    const [x] = segs;
    if (categorySlugs.has(x)) {
      const filtered = projects.filter((p) =>
        p.categories.some((c) => labelToSlug.get(c) === x)
      );
      return {
        type: "grid",
        projects: filtered,
        filters,
        activeCategory: x,
        activeSubcategory: null,
      };
    }
    if (projectSlugs.has(x)) {
      return { type: "detail", lang, slug: x };
    }
    notFound();
  }

  if (segs.length === 2) {
    const [cat, sub] = segs;
    if (categorySlugs.has(cat) && subcatsByCat.get(cat)?.has(sub)) {
      const filtered = projects.filter(
        (p) =>
          p.categories.some((c) => labelToSlug.get(c) === cat) &&
          (p.subcategories?.[cat]?.includes(sub) ?? false)
      );
      return {
        type: "grid",
        projects: filtered,
        filters,
        activeCategory: cat,
        activeSubcategory: sub,
      };
    }
    notFound();
  }

  notFound();
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en"; segments?: string[] }>;
}): Promise<Metadata> => {
  const { lang, segments } = await params;
  const { common } = await getTranslations(lang);
  const filters = common.portfolioFilters;
  const { slugToCat } = buildFiltersIndex(filters);
  const segs = segments ?? [];

  if (segs.length === 0) {
    return SEO_METADATA["portfolioPage"][lang];
  }

  if (segs.length === 1) {
    const [x] = segs;
    const cat = slugToCat.get(x);
    if (cat) {
      const title =
        lang === "es"
          ? `Portfolio de ${cat.label} | Agencia Tinta`
          : `${cat.label} Portfolio | Tinta Agency`;
      const description =
        lang === "es"
          ? `Trabajos de ${cat.label.toLowerCase()} realizados por Agencia Tinta para marcas de distintos sectores.`
          : `${cat.label} projects by Tinta Agency for brands across different sectors.`;
      return {
        title,
        description,
        alternates: {
          canonical: `${BASE_URL}/${lang}/portfolio/${x}`,
          languages: {
            es: `${BASE_URL}/es/portfolio/${x}`,
            en: `${BASE_URL}/en/portfolio/${x}`,
          },
        },
        robots: "index, follow",
      };
    }
    const meta = generateSEOMetadataPortfolioDetailPage(x);
    return meta[lang];
  }

  if (segs.length === 2) {
    const [catSlug, subSlug] = segs;
    const cat = slugToCat.get(catSlug);
    const sub = cat?.subcategories.find((s) => s.slug === subSlug);
    if (cat && sub) {
      const title =
        lang === "es"
          ? `Portfolio de ${cat.label} — ${sub.label} | Agencia Tinta`
          : `${cat.label} — ${sub.label} Portfolio | Tinta Agency`;
      const description =
        lang === "es"
          ? `Trabajos de ${cat.label.toLowerCase()} - ${sub.label.toLowerCase()} de Agencia Tinta.`
          : `${cat.label} - ${sub.label} projects by Tinta Agency.`;
      return {
        title,
        description,
        alternates: {
          canonical: `${BASE_URL}/${lang}/portfolio/${catSlug}`,
          languages: {
            es: `${BASE_URL}/es/portfolio/${catSlug}`,
            en: `${BASE_URL}/en/portfolio/${catSlug}`,
          },
        },
        robots: "index, follow",
      };
    }
  }

  return SEO_METADATA["portfolioPage"][lang];
};

export default async function PortfolioRoute({
  params,
}: {
  params: Promise<{ lang: "es" | "en"; segments?: string[] }>;
}) {
  const { lang, segments } = await params;
  const resolved = await resolveSegments(lang, segments);

  if (resolved.type === "detail") {
    const { lang, slug } = resolved;
    const { common } = await getTranslations(lang);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content = loadLocalContent("portfolio", lang, slug) as any;

    const heroContent = {
      ...content.hero,
      clientLabel: common.client,
      sectorLabel: common.sector,
    };

    return (
      <main>
        <DetailHero {...heroContent} />
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
                  backText={section.backText}
                  videos={section.videos}
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
          <Cta lang={lang} translations={common.cta} />
        </div>
        <Related lang={lang} related={content.related} />
      </main>
    );
  }

  const { projects, filters, activeCategory, activeSubcategory } = resolved;
  const { portfolioPage } = await getTranslations(lang);

  return (
    <main>
      <Hero translations={portfolioPage.hero} />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Blob
          width="100vw"
          height="80vh"
          path={"polygon(0 53%, 53% 33%, 100% 58%, 100% 100%, 0 100%)"}
          bottom="-30%"
        />
        <PortfolioGrid
          lang={lang}
          projects={projects}
          filters={filters}
          activeCategory={activeCategory}
          activeSubcategory={activeSubcategory}
        />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const portfolioDir = path.join(process.cwd(), "translations", "portfolio");
  const params: { lang: string; segments: string[] }[] = [];

  for (const lang of langs) {
    params.push({ lang, segments: [] });

    const langDir = path.join(portfolioDir, lang);
    if (fs.existsSync(langDir)) {
      const files = fs.readdirSync(langDir);
      const projectSlugs = files.map((file) => file.replace(".json", ""));

      for (const slug of projectSlugs) {
        params.push({ lang, segments: [slug] });
      }
    }

    const { common } = await getTranslations(lang);
    for (const cat of common.portfolioFilters.categories) {
      params.push({ lang, segments: [cat.slug] });
      for (const sub of cat.subcategories) {
        params.push({ lang, segments: [cat.slug, sub.slug] });
      }
    }
  }

  return params;
}
