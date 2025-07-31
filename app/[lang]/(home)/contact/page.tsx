import Container from "@/components/ui/Container";
import { getTranslations } from "../../translations";
import styles from "./contactPage.module.css";
import Form from "@/components/Form";
import Image from "next/image";

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
            <Form translations={contactPage.form} />
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
