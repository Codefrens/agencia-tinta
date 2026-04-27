import Container from "@/components/ui/Container";
import { loadLocalContent } from "@/content/fetch";
import { Metadata } from "next";
import { SEO_METADATA } from "@/utils/SEOmetadata";
import Link from "next/link";
import styles from "./thankYou.module.css";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}): Promise<Metadata> => {
  const lang = (await params).lang;
  const base =
    (SEO_METADATA["thankYouPage"]?.[lang] as Metadata | undefined) ||
    (SEO_METADATA["productionPage"][lang] as Metadata);

  const baseUrl = process.env.BASE_URL || "https://agenciatinta.com";
  const canonical = `${baseUrl}/${lang}/thank-you`;
  const siteName = lang === "es" ? "Agencia Tinta" : "Tinta Agency";
  const ogImage =
    "https://res.cloudinary.com/nicojoystin/image/upload/v1742127198/agencia-tinta/hometinta_g4plpq.jpg";

  return {
    ...base,
    alternates: { ...(base as Metadata).alternates, canonical },
    openGraph: {
      ...(base as Metadata).openGraph,
      title: (base as Metadata).openGraph?.title || (base as Metadata).title,
      description: (base as Metadata).openGraph?.description || (base as Metadata).description,
      url: canonical,
      siteName,
      images:
        (base as Metadata).openGraph?.images ||
        [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      ...(base as Metadata).twitter,
      card: "summary_large_image",
      title: (base as Metadata).twitter?.title || (base as Metadata).title,
      description: (base as Metadata).twitter?.description || (base as Metadata).description,
      site: "@agenciatinta",
      creator: "@agenciatinta",
      images: (base as Metadata).twitter?.images || [ogImage],
    },
  };
};

export default async function ThankYouPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: "es" | "en" }>;
  searchParams: Promise<{ origin: string }>;
}) {
  const lang = (await params).lang;
  const origin = (await searchParams).origin;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content = loadLocalContent("landings", lang, "production") as any;

  return (
    <section className={styles.thankYouSection}>
      <Container>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <div className={styles.checkIcon}>✓</div>
          </div>

          <h1 className={styles.title}>
            {content.thankYou?.title || (lang === "es" ? "¡Gracias por tu mensaje!" : "Thank you for your message!")}
          </h1>

          <p className={styles.subtitle}>
            {content.thankYou?.subtitle || (lang === "es"
              ? "Hemos recibido tu solicitud correctamente. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para discutir tu proyecto."
              : "We have received your request successfully. Our team will contact you within the next 24 hours to discuss your project.")}
          </p>

          <div className={styles.actions}>
            {origin !== 'home' && (
              <Link href={`/${lang}/agencia-publicidad-form`} className={styles.primaryButton}>
                {lang === "es" ? "Volver a la página anterior" : "Back to previous page"}
              </Link>
            )}
            <Link href={`/${lang}`} className={styles.secondaryButton}>
              {lang === "es" ? "Ir al inicio" : "Go to homepage"}
            </Link>
          </div>

          <div className={styles.contactInfo}>
            <p className={styles.contactText}>
              {lang === "es"
                ? "¿Necesitas contactarnos urgentemente?"
                : "Need to contact us urgently?"}
            </p>
            <a href="mailto:hola@agenciatinta.com" className={styles.emailLink}>
              hola@agenciatinta.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
} 
