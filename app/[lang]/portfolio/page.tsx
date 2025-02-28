import React from "react";
import { getTranslations } from "../translations";
import Hero from "@/components/PortfolioPage/Hero";
import PortfolioGrid from "@/components/PortfolioPage/PortfolioGrid";
import Blob from "@/components/ui/Blob";

const PortfolioPage = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) => {
  const lang = (await params).lang;
  const { portfolioPage, common } = await getTranslations(lang);

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
        <PortfolioGrid translations={common} />
      </div>
    </main>
  );
};

export default PortfolioPage;
