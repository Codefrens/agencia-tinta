"use client";
import Container from "@/components/ui/Container";
import styles from "./HowItWorks.module.css";
import { Translations } from "@/translations/types";
import Image from "next/image";
import Blob from "@/components/ui/Blob";
import { motion } from "motion/react";

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
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
          className={styles.title}
        >
          {translations.title} /
        </motion.h2>
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
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
      className={styles.cards}
    >
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
    </motion.div>
  );
};
