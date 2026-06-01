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

        <div className={styles.intro}>
          <p className={styles.lead}>{translations.lead}</p>

          <div className={styles.blocks}>
            {translations.sections.map((section, index) => (
              <div key={index} className={styles.block}>
                <h2 className={styles.h2}>{section.title}</h2>
                <p className={styles.paragraph}>{section.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
