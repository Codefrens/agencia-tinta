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
  return SEO_METADATA["productionPage"][lang];
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
        <LandingForm lang={lang} formTranslations={content.form} />
      </Hero>

   
      
      <Services 
        title={content.services.title}
        servicesList={content.services.servicesList}
      />

      <Works
        title={content.works.title}
        subtitle={content.works.subtitle}
        works={content.works.worksList}
      />

      <VideoCarousel videos={content.videos} />

      <Benefits
        title={content.benefits.title}
        benefitsList={content.benefits.benefitsList}
      />

      <Testimonials
        title={content.testimonials.title}
        testimonialsList={content.testimonials.testimonialsList}
      />

      <ContactSection 
        lang={lang}
        title={content.contactSection.title}
        subtitle={content.contactSection.subtitle}
        formTranslations={content.form} 
      />
    </>
  );
}