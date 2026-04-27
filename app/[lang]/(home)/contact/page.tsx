import Container from "@/components/ui/Container";
import { getTranslations } from "../../translations";
import styles from "./contactPage.module.css";
import Form from "@/components/Form";
import Image from "next/image";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> => {
  const lang = (await params).lang;
  const baseUrl = process.env.BASE_URL || "https://agenciatinta.com";
  const canonical = `${baseUrl}/${lang}/contact`;
  const title =
    lang === "es"
      ? "Contacto | Agencia Tinta"
      : "Contact | Tinta Agency";
  const description =
    lang === "es"
      ? "Contacta con Agencia Tinta para producción audiovisual, fotografía y marketing digital."
      : "Contact Tinta Agency for audiovisual production, photography and digital marketing.";
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

const ContactPage = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) => {
  const lang = (await params).lang;
  const { contactPage } = await getTranslations(lang);
  return (
    <main>
      <Container>
        <section className={styles.contact}>
          <div className={styles.content}>
            <h1>{contactPage.title}</h1>
            <p>{contactPage.subtitle}</p>
            <Form translations={contactPage.form} lang={lang} />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={
                "https://res.cloudinary.com/nicojoystin/image/upload/v1741971288/agencia-tinta/Contacto_k6i95w.png"
              }
              alt={""}
              className={styles.image}
              width={800}
              height={0}
            />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default ContactPage;
