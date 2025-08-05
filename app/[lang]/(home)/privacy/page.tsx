import Container from "@/components/ui/Container";
import { getTranslations } from "../../translations";
import styles from "./privacyPage.module.css";

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
            <p className={styles.subtitle}>{privacyPage.subtitle}</p>
            
            <div className={styles.sections}>
              <div className={styles.section}>
                <h2>{privacyPage.content.responsible.title}</h2>
                <ul className={styles.list}>
                  {privacyPage.content.responsible.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.section}>
                <h2>{privacyPage.content.dataCollected.title}</h2>
                <p>{privacyPage.content.dataCollected.intro}</p>
                <ul className={styles.list}>
                  {privacyPage.content.dataCollected.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.section}>
                <h2>{privacyPage.content.purpose.title}</h2>
                <ul className={styles.list}>
                  {privacyPage.content.purpose.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.section}>
                <h2>{privacyPage.content.legitimacy.title}</h2>
                <p>{privacyPage.content.legitimacy.content}</p>
              </div>
              
              <div className={styles.section}>
                <h2>{privacyPage.content.recipients.title}</h2>
                <p>{privacyPage.content.recipients.intro}</p>
                <ul className={styles.list}>
                  {privacyPage.content.recipients.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.section}>
                <h2>{privacyPage.content.rights.title}</h2>
                <p>{privacyPage.content.rights.content}</p>
              </div>
              
              <div className={styles.section}>
                <h2>{privacyPage.content.retention.title}</h2>
                <p>{privacyPage.content.retention.content}</p>
              </div>
              
              <div className={styles.section}>
                <h2>{privacyPage.content.changes.title}</h2>
                <p>{privacyPage.content.changes.content}</p>
              </div>
            </div>

            <div className={styles.lastUpdate}>
              <p>{privacyPage.content.lastUpdate}</p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}