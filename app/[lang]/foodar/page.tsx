import Hero from "@/components/FoodarPage/Hero";
import { getTranslations } from "../translations";
import Script from "next/script";
import HowItWorks from "@/components/FoodarPage/HowItWorks";
import Form from "@/components/Form";
import Pricing from "@/components/FoodarPage/Pricing/Pricing";
import Benefits from "@/components/FoodarPage/Benefits";
import Container from "@/components/ui/Container";

export default async function FoodarPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { foodarPage, contactPage } = await getTranslations(lang);
  const { hero, howItWorks, pricing, benefits } = foodarPage;
  return (
    <main>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <Hero translations={hero} />
      <HowItWorks translations={howItWorks} />
      <Benefits translations={benefits} />
      <Pricing translations={pricing} />
      <Container>
        <Form translations={contactPage.form} />
      </Container>
    </main>
  );
}
