import React from "react";
import { getTranslations } from "../translations";
import Hero from "@/components/PortfolioPage/Hero";
import PortfolioGrid from "@/components/PortfolioPage/PortfolioGrid";

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
      <PortfolioGrid translations={common} />
    </main>
  );
};

export default PortfolioPage;
