   import Services from "@/components/LandingsPage/Services";
import Works from "@/components/LandingsPage/Works";
import VideoCarousel from "@/components/LandingsPage/VideoCarousel";
import Benefits from "@/components/LandingsPage/Benefits";
import Testimonials from "@/components/LandingsPage/Testimonials";
import { loadLocalContent } from "@/content/fetch";
import { Metadata } from "next";
import { SEO_METADATA } from "@/utils/SEOmetadata";
import HeroB from "@/components/LandingsPage/HeroB";
import CtaCall from "@/components/LandingsPage/CtaCall";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> => {
  const lang = (await params).lang;
  return SEO_METADATA["aestheticPage"][lang];
};

export default async function AestheticPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {

  const lang = (await params).lang;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content = loadLocalContent("landings", lang, "aesthetic") as any;


  return (
    <>
    <HeroB
        title={content.hero.title}
        subtitle={content.hero.description}
        backgroundImage={content.hero.backgroundImage}
        ctaText={content.hero.ctaText}
      />
   
      
      <Services 
        title={content.services.title}
        servicesList={content.services.servicesList}
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
        benefitsList={content.benefits.benefitsList}
      />

      <Testimonials
        titleLight={content.testimonials.titleLight}
        titleBold={content.testimonials.titleBold}
        testimonialsList={content.testimonials.testimonialsList}
      />
      <CtaCall translations={content.cta} />
    </>
  );
}
