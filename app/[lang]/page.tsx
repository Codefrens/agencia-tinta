import AboutHome from "@/components/HomePage/AboutHome";
import { getTranslations } from "./translations";
import Hero from "@/components/HomePage/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Clients from "@/components/Clients";
import AiSection from "@/components/HomePage/AiSection";
import Cta from "@/components/Cta";
import RealitySection from "@/components/HomePage/RealitySection";
import Blob from "@/components/ui/Blob";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { homePage, common } = await getTranslations(lang);
  const { hero, about, portfolio, aiSection, realitySection } = homePage;
  const { cta } = common;
  return (
    <main>
      <Hero translations={hero} />
      <AboutHome translations={about} />
      <PortfolioGrid
        translations={{ portfolioGrid: common.portfolioGrid, portfolio }}
      />
      <Clients />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Blob
          width="50vw"
          height="80vh"
          path={"polygon(7% 41%, 100% 0, 100% 58%, 100% 100%, 7% 60%)"}
          top="30%"
          right="-20%"
        />
        <AiSection translations={aiSection} />
        <RealitySection translations={realitySection} />
      </div>
      <Cta translations={cta} />
    </main>
  );
}
