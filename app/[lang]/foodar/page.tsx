import Hero from "@/components/FoodarPage/Hero";
import { getTranslations } from "../translations";
import Script from "next/script";
import HowItWorks from "@/components/FoodarPage/HowItWorks";
import OneImage from "@/components/ui/OneImage";
import Form from "@/components/Form";

export default async function FoodarPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { foodarPage, contactPage } = await getTranslations(lang);
  const { hero, howItWorks } = foodarPage;
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
      <OneImage
        imageUrl={
          "https://res.cloudinary.com/nicojoystin/image/upload/v1741895413/agencia-tinta/home/Food_AR_epka13.png"
        }
        imageAlt="Realidad aumentada"
        aspectRatio={16 / 9}
        centered
      />
      <Form translations={contactPage.form} />
    </main>
  );
}
