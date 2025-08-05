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
            
            <div className={styles.sections}>
              <div className={styles.section}>
                <h2>{cookiesPage.content.what.title}</h2>
                <p>{cookiesPage.content.what.content}</p>
              </div>
              
              <div className={styles.section}>
                <h2>{cookiesPage.content.types.title}</h2>
                
                <div className={styles.subsection}>
                  <h3>{cookiesPage.content.types.technical.title}</h3>
                  <p>{cookiesPage.content.types.technical.content}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3>{cookiesPage.content.types.analytics.title}</h3>
                  <p>{cookiesPage.content.types.analytics.content}</p>
                </div>
                
                <div className={styles.subsection}>
                  <h3>{cookiesPage.content.types.advertising.title}</h3>
                  <p>{cookiesPage.content.types.advertising.content}</p>
                </div>
              </div>
              
              <div className={styles.section}>
                <h2>{cookiesPage.content.manage.title}</h2>
                <p>{cookiesPage.content.manage.content}</p>
              </div>
              
              <div className={styles.section}>
                <h2>{cookiesPage.content.sharing.title}</h2>
                <p>{cookiesPage.content.sharing.content}</p>
                <ul className={styles.list}>
                  {cookiesPage.content.sharing.companies.map((company: string, index: number) => (
                    <li key={index}>{company}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.section}>
                <h2>{cookiesPage.content.changes.title}</h2>
                <p>{cookiesPage.content.changes.content}</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}