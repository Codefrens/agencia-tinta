import Hero from "@/components/LandingsPage/Hero";
import Services from "@/components/LandingsPage/Services";
import Works from "@/components/LandingsPage/Works";
import VideoCarousel from "@/components/LandingsPage/VideoCarousel";
import Benefits from "@/components/LandingsPage/Benefits";
import Testimonials from "@/components/LandingsPage/Testimonials";
import ContactSection from "@/components/LandingsPage/ContactSection";
import LandingForm from "@/components/LandingsPage/LandingForm";
import { loadLocalContent } from "@/content/fetch";
import { Metadata } from "next";
import { SEO_METADATA } from "@/utils/SEOmetadata";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> => {
  const lang = (await params).lang;
  const base = SEO_METADATA["productionPage"][lang] as Metadata;
  const baseUrl = process.env.BASE_URL || "https://agenciatinta.com";
  const canonical = `${baseUrl}/${lang}/agencia-publicidad-form`;
  const siteName = lang === "es" ? "Agencia Tinta" : "Tinta Agency";
  const ogImage =
    "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg";

  return {
    ...base,
    alternates: { ...(base as Metadata).alternates, canonical },
    openGraph: {
      ...(base as Metadata).openGraph,
      title: (base as Metadata).openGraph?.title || (base as Metadata).title,
      description: (base as Metadata).openGraph?.description || (base as Metadata).description,
      url: canonical,
      siteName,
      images:
        (base as Metadata).openGraph?.images ||
        [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      ...(base as Metadata).twitter,
      card: "summary_large_image",
      title: (base as Metadata).twitter?.title || (base as Metadata).title,
      description: (base as Metadata).twitter?.description || (base as Metadata).description,
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: (base as Metadata).twitter?.images || [ogImage],
    },
  };
};

export default async function ProductionPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {

  const lang = (await params).lang;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content = loadLocalContent("landings", lang, "production") as any;

  return (
    <>
      <Hero
        title={content.hero.title}
        subtitle={content.hero.description}
        backgroundImage={content.hero.backgroundImage}
      >
        <LandingForm lang={lang} formTranslations={content.form} source="landing-aesthetic" />
      </Hero>

      <Services
        title={content.services.title}
        subtitle={content.services.subtitle}
        servicesList={content.services.servicesList}
        source="landing-aesthetic"
      />

      <Works
        title={content.works.title}
        subtitle={content.works.subtitle}
        works={content.works.worksList}
      />

      <VideoCarousel title={content.videos.title} subtitle={content.videos.subtitle} videos={content.videos.videosList || []} />

      <Benefits
        titleLight={content.benefits.titleLight}
        titleBold={content.benefits.titleBold}
        subtitle={content.benefits.subtitle}
        benefitsList={content.benefits.benefitsList}
        source="landing-aesthetic"
      />

      <Testimonials
        titleLight={content.testimonials.titleLight}
        titleBold={content.testimonials.titleBold}
        testimonialsList={content.testimonials.testimonialsList}
      />

      <ContactSection
        lang={lang}
        titleLight={content.contactSection.titleLight}
        titleBold={content.contactSection.titleBold}
        subtitle={content.contactSection.subtitle}
        formTranslations={content.form}
        source="landing-aesthetic"
      />
    </>
  );
}
