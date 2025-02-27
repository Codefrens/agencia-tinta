import Container from "@/components/ui/Container";
import React from "react";
import { getTranslations } from "../translations";
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
      <Container className={styles.wrapper}>
        <section className={styles.contact}>
          <div className={styles.content}>
            <h1>{contactPage.title}</h1>
            <p>{contactPage.subtitle}</p>
            <Form />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={
                "https://res.cloudinary.com/nicojoystin/image/upload/f_auto,q_auto/v1740596157/foodie_xv09ya.avif"
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
