"use client";
import React from "react";
import styles from "./AiSection.module.css";
import { Translations } from "@/translations/types";
import Container from "@/components/ui/Container";
import VideoComponent from "@/components/ui/VideoComponent/VideoComponent";
import { motion, useScroll, useTransform } from "motion/react";

const AiSection = ({
  translations,
}: {
  translations: Translations["homePage"]["aiSection"];
}) => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0.5, 0.9], [1, 1.2]);

  return (
    <section>
      <Container className={styles.aiSection}>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
          className={styles.title}
        >
          {translations.title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
          className={styles.paragraph}
        >
          {translations.paragraph}
        </motion.p>
      </Container>
      <motion.div style={{ scale }}>
        <VideoComponent
          videoSrc="https://res.cloudinary.com/nicojoystin/video/upload/v1741895409/agencia-tinta/home/Video_IA_v1_itz1na.mp4"
          posterSrc="https://res.cloudinary.com/nicojoystin/image/upload/v1741895408/agencia-tinta/home/portada_hjv16q.png"
          videoLabelButton={translations.buttonLabel}
        />
      </motion.div>
    </section>
  );
};

export default AiSection;
