"use client";
import Container from "@/components/ui/Container";
import OneImage from "@/components/ui/OneImage";
import { motion } from "motion/react";
import styles from "./Benefits.module.css";
import { Translations } from "@/translations/types";
import Image from "next/image";

const Benefits = ({
  translations,
}: {
  translations: Translations["foodarPage"]["benefits"];
}) => {
  return (
    <Container>
      <OneImage
        imageUrl={translations.imageUrl}
        imageAlt="Realidad aumentada"
        aspectRatio={16 / 9}
        centered
      />
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
        className={styles.sectionTitle}
      >
        {translations.title} /
      </motion.h2>
      <section className={styles.container}>
        <div className={styles.grid}>
          {translations.features.map((feature, index) => (
            <BenefitCard
              key={index}
              title={feature.title}
              description={feature.description}
              iconUrl={feature.iconUrl}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Benefits;

const BenefitCard = ({
  title,
  description,
  iconUrl,
}: {
  title: string;
  description: string;
  iconUrl: string;
}) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
      className={styles.feature}
    >
      <Image
        className={styles.icon}
        src={iconUrl}
        alt={""}
        width={120}
        height={38}
        priority
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
};
