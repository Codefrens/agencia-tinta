"use client";
import React from "react";
import { Translations } from "@/translations/types";
import styles from "./AboutHome.module.css";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Blob from "@/components/ui/Blob";
import { motion, useScroll, useTransform } from "motion/react";

const AboutHome = ({
  translations,
}: {
  translations: Translations["homePage"]["about"];
}) => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [150, 700], [0, 1]);

  return (
    <Container>
      <motion.section className={styles.wrapper} style={{ opacity }}>
        <Blob
          width="50vw"
          height="80vh"
          path={"polygon(0 18%, 34% 35%, 85% 58%, 36% 78%, 0 91%)"}
          top="0"
          left="-20%"
        />
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
          className={styles.title}
        >
          {translations.title}
        </motion.h2>
        <div className={styles.content}>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
            className="font-color font-bold"
          >
            {translations.paragraph1}
          </motion.p>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
            className="font-color-gray"
          >
            {translations.paragraph2}
          </motion.p>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
          >
            <Link href="/agency">
              <Button className={styles.button}>
                {translations.buttonLabel}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </Container>
  );
};

export default AboutHome;
