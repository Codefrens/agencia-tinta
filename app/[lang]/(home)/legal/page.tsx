import Container from "@/components/ui/Container";
import { getTranslations } from "../../translations";
import styles from "./legalPage.module.css";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> => {
  const lang = (await params).lang;
  const baseUrl = process.env.BASE_URL || "https://agenciatinta.com";
  const canonical = `${baseUrl}/${lang}/legal`;
  const title =
    lang === "es" ? "Aviso legal | Agencia Tinta" : "Legal notice | Tinta Agency";
  const description =
    lang === "es"
      ? "Aviso legal y condiciones de uso de agenciatinta.com."
      : "Legal notice and terms of use for agenciatinta.com.";
  const siteName = lang === "es" ? "Agencia Tinta" : "Tinta Agency";
  const ogImage =
    "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg";

  return {
    title,
    description,
    robots: "index, follow",
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: [ogImage],
    },
  };
};

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { legalPage } = await getTranslations(lang);
  
  return (
    <main>
      <Container>
        <section className={styles.legal}>
          <div className={styles.content}>
            <h1>{legalPage.title}</h1>
            <p className={styles.subtitle}>{legalPage.subtitle}</p>
            
            <div className={styles.sections}>
              {/* 1. Datos identificativos */}
              <div className={styles.section}>
                <h2>{legalPage.content.identificationData.title}</h2>
                <ul className={styles.list}>
                  {legalPage.content.identificationData.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* 2. Objeto del sitio web */}
              <div className={styles.section}>
                <h2>{legalPage.content.websiteObjective.title}</h2>
                <div className={styles.multiParagraph}>
                  {legalPage.content.websiteObjective.content.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* 3. Propiedad intelectual e industrial */}
              <div className={styles.section}>
                <h2>{legalPage.content.intellectualProperty.title}</h2>
                <div className={styles.multiParagraph}>
                  {legalPage.content.intellectualProperty.content.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* 4. Uso de la web y responsabilidad */}
              <div className={styles.section}>
                <h2>{legalPage.content.webUsageAndResponsibility.title}</h2>
                <div className={styles.multiParagraph}>
                  {legalPage.content.webUsageAndResponsibility.intro.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <ul className={styles.list}>
                  {legalPage.content.webUsageAndResponsibility.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* 5. Actualización de la información */}
              <div className={styles.section}>
                <h2>{legalPage.content.informationUpdate.title}</h2>
                <p>{legalPage.content.informationUpdate.content}</p>
              </div>
              
              {/* 6. Comunicaciones comerciales */}
              <div className={styles.section}>
                <h2>{legalPage.content.commercialCommunications.title}</h2>
                <div className={styles.multiParagraph}>
                  {legalPage.content.commercialCommunications.content.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* 7. Uso de cookies */}
              <div className={styles.section}>
                <h2>{legalPage.content.cookiesUsage.title}</h2>
                <p>{legalPage.content.cookiesUsage.content}</p>
              </div>
              
              {/* 8. Legislación aplicable y jurisdicción */}
              <div className={styles.section}>
                <h2>{legalPage.content.applicableLegislation.title}</h2>
                <p>{legalPage.content.applicableLegislation.content}</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}