import React from "react";
import styles from "./Hero.module.css";
import Container from "@/components/ui/Container";
import { Translations } from "@/translations/types";

const Hero = ({
  translations,
}: {
  translations: Translations["portfolioPage"]["hero"];
}) => {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.title}>{translations.title}</h1>
      </Container>
    </section>
  );
};

export default Hero;
