"use client";
import React from "react";
import Container from "@/components/ui/Container";
import styles from "./AgencyInformation.module.css";
import { Translations } from "@/translations/types";
import { motion } from "motion/react";

const AgencyInformation = ({
  translations,
}: {
  translations: Translations["agencyPage"];
}) => {
  return (
    <Container>
      <motion.section className={styles.wrapper}>
        <h2 className={styles.title}>{translations.title}</h2>
        <div className={styles.content}>
          <p className="font-color font-medium">{translations.paragraph1}</p>
          <p className="font-color-gray">{translations.paragraph2}</p>
          <p className={styles.quote}>{translations.quote}</p>
        </div>
      </motion.section>
      <motion.section className={styles.wrapper}>
        <h2 className={styles.title}>{translations.serviceTitle}</h2>
        <div className={styles.serviceContent}>
          {translations.services.map((service, index) => (
            <div key={index}>
              <motion.h3
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
                className="font-color font-bold"
              >
                {service.title}
              </motion.h3>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
                className="font-color-gray"
              >
                {service.description}
              </motion.p>
              <ul className="font-color-gray">
                {service.tags.map((tag, index) => (
                  <motion.li
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.26, 0.01, 0.06, 0.94],
                    }}
                    key={index}
                  >
                    {tag}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>
    </Container>
  );
};

export default AgencyInformation;
