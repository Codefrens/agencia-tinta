"use client";
import React from "react";
import styles from "./RealitySection.module.css";
import Container from "../../ui/Container";
import { Translations } from "@/translations/types";
import Image from "next/image";
import Button from "../../ui/Button";
import { motion, useScroll, useTransform } from "motion/react";
import { useRouter } from "next/navigation";

const RealitySection = ({
  translations,
}: {
  translations: Translations["homePage"]["realitySection"];
}) => {
  const { scrollYProgress } = useScroll();
  const { push } = useRouter();

  const scale = useTransform(scrollYProgress, [0.6, 0.8], [0.95, 1]);

  return (
    <section className={styles.realitySection}>
      <Container>
        <div className={styles.grid}>
          <motion.div
            className={styles.wrapper}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
          >
            <h2 className={styles.title}>{translations.title}</h2>
            <p className={styles.paragraph}>{translations.paragraph}</p>
            <Button onClick={() => push("/foodar")}>
              {translations.buttonLabel}
            </Button>
          </motion.div>
          <motion.div className={styles.image} style={{ scale }}>
            <Image
              src={translations.imgSrc}
              alt={translations.imgAlt}
              fill
              objectFit="cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default RealitySection;
