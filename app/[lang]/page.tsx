import { getTranslations } from "./translations";
import Hero from "@/components/Hero";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { homePage } = await getTranslations(lang);
  const { hero } = homePage;

  return (
    <main>
      <Hero translations={hero} />
      <Hero translations={hero} />
    </main>
  );
}
