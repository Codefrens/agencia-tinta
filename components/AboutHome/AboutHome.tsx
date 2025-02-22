import React from "react";
import Container from "../ui/Container";
import { Translations } from "@/translations/types";
import styles from "./AboutHome.module.css";
import Button from "../ui/Button";

const AboutHome = ({
  translations,
}: {
  translations: Translations["homePage"]["about"];
}) => {
  return (
    <Container>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>{translations.title}</h2>
        <div className={styles.content}>
          <p className="font-color font-bold">{translations.paragraph1}</p>
          <p className="font-color-gray">{translations.paragraph2}</p>
          <Button className={styles.button}>{translations.buttonLabel}</Button>
        </div>
      </section>
    </Container>
  );
};

export default AboutHome;
