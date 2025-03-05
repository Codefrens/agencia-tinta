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
          videoSrc="https://player.vimeo.com/video/882997319"
          posterSrc="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          videoLabelButton={translations.buttonLabel}
        />
      </motion.div>
    </section>
  );
};

export default AiSection;
