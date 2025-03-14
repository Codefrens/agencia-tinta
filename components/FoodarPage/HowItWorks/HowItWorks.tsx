import React from "react";
import Container from "@/components/ui/Container";
import styles from "./HowItWorks.module.css";
import { Translations } from "@/translations/types";
import Image from "next/image";
import Blob from "@/components/ui/Blob";

const HowItWorks = ({
  translations,
}: {
  translations: Translations["foodarPage"]["howItWorks"];
}) => {
  return (
    <Container>
      <section className={styles.wrapper}>
        <Blob
          width="60vw"
          height="80vh"
          path={"polygon(0 0, 0 100%, 61% 50%)"}
          top="10%"
          left="-40%"
        />
        <h2 className={styles.title}>{translations.title} /</h2>
        <div className={styles.content}>
          {translations.cards.map((card, index) => (
            <Cards {...card} number={card.id} key={index} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default HowItWorks;

const Cards = ({
  title,
  number,
  imageUrl,
  imageAlt,
}: {
  title: string;
  number: string;
  imageUrl: string;
  imageAlt: string;
}) => {
  return (
    <div className={styles.cards}>
      <div className={styles.imageCard}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardNumber}>{number}</p>
      </div>
    </div>
  );
};
