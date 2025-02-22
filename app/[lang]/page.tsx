import AboutHome from "@/components/AboutHome";
import { getTranslations } from "./translations";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { homePage } = await getTranslations(lang);
  const { hero, about, portfolio } = homePage;

  console.log(portfolio);

  return (
    <main>
      <Hero translations={hero} />
      <AboutHome translations={about} />
      <PortfolioGrid translations={portfolio} />
    </main>
  );
}
