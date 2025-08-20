import Container from "@/components/ui/Container";
import { getTranslations } from "../../translations";
import styles from "./cookiesPage.module.css";

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const lang = (await params).lang;
  const { cookiesPage } = await getTranslations(lang);
  
  return (
    <main>
      <Container>
        <section className={styles.cookies}>
          <div className={styles.content}>
            <h1>{cookiesPage.title}</h1>
            <p className={styles.subtitle}>{cookiesPage.subtitle}</p>
            <p className={styles.description}>{cookiesPage.description}</p>
            
            <div className={styles.sections}>
              {/* ¿Qué son las cookies? */}
              <div className={styles.section}>
                <h2>{cookiesPage.content.what.title}</h2>
                <p>{cookiesPage.content.what.content}</p>
                
                <div className={styles.benefits}>
                  <h3>{cookiesPage.content.what.benefits.title}</h3>
                  <ul className={styles.list}>
                    {cookiesPage.content.what.benefits.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <p className={styles.security}>{cookiesPage.content.what.security}</p>
              </div>
              
              {/* Tipos de cookies */}
              <div className={styles.section}>
                <h2>{cookiesPage.content.types.title}</h2>
                
                <div className={styles.subsection}>
                  <h3>{cookiesPage.content.types.byOwner.title}</h3>
                  <ul className={styles.list}>
                    {cookiesPage.content.types.byOwner.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.subsection}>
                  <h3>{cookiesPage.content.types.byDuration.title}</h3>
                  <ul className={styles.list}>
                    {cookiesPage.content.types.byDuration.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.subsection}>
                  <h3>{cookiesPage.content.types.byPurpose.title}</h3>
                  <ul className={styles.list}>
                    {cookiesPage.content.types.byPurpose.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Cookies que usamos */}
              <div className={styles.section}>
                <h2>{cookiesPage.content.ourCookies.title}</h2>
                
                <div className={styles.subsection}>
                  <h3>{cookiesPage.content.ourCookies.technical.title}</h3>
                  <p>{cookiesPage.content.ourCookies.technical.content}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3>{cookiesPage.content.ourCookies.analytics.title}</h3>
                  <p>{cookiesPage.content.ourCookies.analytics.content}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3>{cookiesPage.content.ourCookies.advertising.title}</h3>
                  <p>{cookiesPage.content.ourCookies.advertising.content}</p>
                </div>
              </div>
              
              {/* Cómo gestionar cookies */}
              <div className={styles.section}>
                <h2>{cookiesPage.content.manage.title}</h2>
                <p>{cookiesPage.content.manage.content}</p>
                <ul className={styles.list}>
                  {cookiesPage.content.manage.browsers.map((browser: string, index: number) => (
                    <li key={index}>{browser}</li>
                  ))}
                </ul>
              </div>
              
              {/* Consentimiento y protección de datos */}
              <div className={styles.section}>
                <h2>{cookiesPage.content.consent.title}</h2>
                <div className={styles.consentContent}>
                  {cookiesPage.content.consent.content.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}