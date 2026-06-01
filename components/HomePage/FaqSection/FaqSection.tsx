"use client";

import React, { useId, useState } from "react";
import Container from "@/components/ui/Container";
import { Translations } from "@/translations/types";
import styles from "./FaqSection.module.css";
import { AnimatePresence, motion } from "motion/react";

const FaqSection = ({
  translations,
}: {
  translations: Translations["homePage"]["faq"];
}) => {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      className={styles.faqSection}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
    >
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleLight}>{translations.titleLight} </span>
            <span className={styles.titleBold}>{translations.titleBold}</span>
          </h2>
          <p className={styles.subtitle}>{translations.subtitle}</p>
        </div>

        <div className={styles.accordion}>
          {translations.items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              data-open={openIndex === index ? "true" : "false"}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.26, 0.01, 0.06, 0.94] }}
            >
              <button
                type="button"
                className={styles.summary}
                aria-expanded={openIndex === index}
                aria-controls={`${baseId}-${index}`}
                onClick={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              >
                <span className={styles.question}>{item.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  <span className={styles.iconHorizontal} />
                  <span className={styles.iconVertical} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`${baseId}-${index}`}
                    className={styles.contentOuter}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: {
                        duration: 0.35,
                        ease: [0.26, 0.01, 0.06, 0.94],
                      },
                      opacity: { duration: 0.15, ease: "easeOut" },
                    }}
                  >
                    <div className={styles.contentInner}>
                      <p className={styles.answer}>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default FaqSection;
