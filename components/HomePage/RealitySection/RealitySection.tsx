import React from "react";
import styles from "./RealitySection.module.css";
import Container from "../../ui/Container";
import { Translations } from "@/translations/types";
import Image from "next/image";
import Button from "../../ui/Button";

const RealitySection = ({
  translations,
}: {
  translations: Translations["homePage"]["realitySection"];
}) => {
  return (
    <section className={styles.realitySection}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{translations.title}</h2>
            <p className={styles.paragraph}>{translations.paragraph}</p>
            <Button>{translations.buttonLabel}</Button>
          </div>
          <div className={styles.image}>
            <Image
              src={translations.imgSrc}
              alt={translations.imgAlt}
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RealitySection;
