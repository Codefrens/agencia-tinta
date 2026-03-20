import Container from "@/components/ui/Container";
import { getTranslations } from "../../translations";
import styles from "./privacyPage.module.css";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> => {
  const lang = (await params).lang;
  const baseUrl = process.env.BASE_URL || "https://agenciatinta.com";
  const canonical = `${baseUrl}/${lang}/privacy`;
  const title =
    lang === "es" ? "Política de privacidad | Agencia Tinta" : "Privacy policy | Tinta Agency";
  const description =
    lang === "es"
      ? "Información sobre protección de datos y privacidad en agenciatinta.com."
      : "Information about data protection and privacy on agenciatinta.com.";
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

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { privacyPage } = await getTranslations(lang);
  
  return (
    <main>
      <Container>
        <section className={styles.privacy}>
          <div className={styles.content}>
            <h1>{privacyPage.title}</h1>
            <div className={styles.multiParagraph}>
              {privacyPage.subtitle.split('\n').map((paragraph: string, index: number) => (
                <p key={index} className={styles.subtitle}>{paragraph}</p>
              ))}
            </div>
            
            <div className={styles.sections}>
              {/* 1. Responsable del tratamiento */}
              <div className={styles.section}>
                <h2>{privacyPage.content.responsible.title}</h2>
                <ul className={styles.list}>
                  {privacyPage.content.responsible.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* 2. Datos que recopilamos */}
              <div className={styles.section}>
                <h2>{privacyPage.content.dataCollected.title}</h2>
                <p>{privacyPage.content.dataCollected.intro}</p>
                <ul className={styles.list}>
                  {privacyPage.content.dataCollected.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* 3. Finalidad del tratamiento */}
              <div className={styles.section}>
                <h2>{privacyPage.content.purpose.title}</h2>
                <p>{privacyPage.content.purpose.intro}</p>
                <ul className={styles.list}>
                  {privacyPage.content.purpose.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* 4. Legitimación */}
              <div className={styles.section}>
                <h2>{privacyPage.content.legitimacy.title}</h2>
                <p>{privacyPage.content.legitimacy.intro}</p>
                <ul className={styles.list}>
                  {privacyPage.content.legitimacy.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* 5. Destinatarios de los datos */}
              <div className={styles.section}>
                <h2>{privacyPage.content.recipients.title}</h2>
                <p>{privacyPage.content.recipients.intro}</p>
                <ul className={styles.list}>
                  {privacyPage.content.recipients.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className={styles.additional}>{privacyPage.content.recipients.additional}</p>
              </div>
              
              {/* 6. Transferencias internacionales */}
              <div className={styles.section}>
                <h2>{privacyPage.content.internationalTransfers.title}</h2>
                <p>{privacyPage.content.internationalTransfers.content}</p>
              </div>
              
              {/* 7. Conservación de los datos */}
              <div className={styles.section}>
                <h2>{privacyPage.content.retention.title}</h2>
                <p>{privacyPage.content.retention.content}</p>
              </div>
              
              {/* 8. Derechos del usuario */}
              <div className={styles.section}>
                <h2>{privacyPage.content.userRights.title}</h2>
                <p>{privacyPage.content.userRights.intro}</p>
                <ul className={styles.list}>
                  {privacyPage.content.userRights.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* 9. Ejercicio de derechos */}
              <div className={styles.section}>
                <h2>{privacyPage.content.exercisingRights.title}</h2>
                <p>{privacyPage.content.exercisingRights.content}</p>
              </div>
              
              {/* 10. Reclamaciones ante la Autoridad de Control */}
              <div className={styles.section}>
                <h2>{privacyPage.content.complaints.title}</h2>
                <p>{privacyPage.content.complaints.intro}</p>
                <ul className={styles.list}>
                  {privacyPage.content.complaints.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* 11. Cambios en la política */}
              <div className={styles.section}>
                <h2>{privacyPage.content.policyChanges.title}</h2>
                <p>{privacyPage.content.policyChanges.content}</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}