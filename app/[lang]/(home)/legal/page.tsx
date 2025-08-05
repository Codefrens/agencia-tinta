import Container from "@/components/ui/Container";
import { getTranslations } from "../../translations";
import styles from "./legalPage.module.css";

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
              <div className={styles.section}>
                <h2>{legalPage.content.owner.title}</h2>
                <ul className={styles.list}>
                  {legalPage.content.owner.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.section}>
                <h2>{legalPage.content.intellectual.title}</h2>
                <p>{legalPage.content.intellectual.content}</p>
              </div>
              
              <div className={styles.section}>
                <h2>{legalPage.content.responsibility.title}</h2>
                <p>{legalPage.content.responsibility.content}</p>
              </div>
              
              <div className={styles.section}>
                <h2>{legalPage.content.legislation.title}</h2>
                <p>{legalPage.content.legislation.content}</p>
              </div>
            </div>

            <div className={styles.lastUpdate}>
              <p>{legalPage.content.lastUpdate}</p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}