import Hero from "@/components/FoodarPage/Hero";
import { getTranslations } from "../translations";

export default async function FoodarPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { foodarPage } = await getTranslations(lang);
  const { hero } = foodarPage;
  return (
    <main>
      <Hero translations={hero} />
    </main>
  );
}
