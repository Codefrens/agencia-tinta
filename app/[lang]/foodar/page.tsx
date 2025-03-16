import Hero from "@/components/FoodarPage/Hero";
import { getTranslations } from "../translations";
import Script from "next/script";
import HowItWorks from "@/components/FoodarPage/HowItWorks";
import Form from "@/components/Form";
import Pricing from "@/components/FoodarPage/Pricing/Pricing";
import Benefits from "@/components/FoodarPage/Benefits";
import Container from "@/components/ui/Container";
import { Metadata } from "next";
import { SEO_METADATA } from "@/utils/SEOmetadata";
import styles from "./foodar.module.css";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> => {
  const lang = (await params).lang;
  return SEO_METADATA["foodarPage"][lang];
};

export default async function FoodarPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { foodarPage, contactPage } = await getTranslations(lang);
  const { hero, howItWorks, pricing, benefits, contactForm } = foodarPage;
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
        <section className={styles.contact}>
          <div className={styles.content}>
            <h1>{contactForm.title}</h1>
          </div>
          <div className={styles.imageContainer}>
            <Form translations={contactPage.form} />
          </div>
        </section>
      </Container>
    </main>
  );
}
