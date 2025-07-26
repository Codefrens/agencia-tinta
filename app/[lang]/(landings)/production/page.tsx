import Hero from "@/components/LandingsPage/Hero";
import Services from "@/components/LandingsPage/Services";
import Works from "@/components/LandingsPage/Works";
import Benefits from "@/components/LandingsPage/Benefits";
import Testimonials from "@/components/LandingsPage/Testimonials";
import LandingForm from "@/components/LandingsPage/LandingForm";
import { loadLocalContent } from "@/content/fetch";

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
        <LandingForm formTranslations={content.form} />
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

      <Benefits
        title={content.benefits.title}
        benefitsList={content.benefits.benefitsList}
      />

      <Testimonials
        title={content.testimonials.title}
        testimonialsList={content.testimonials.testimonialsList}
      />
    </>
  );
}