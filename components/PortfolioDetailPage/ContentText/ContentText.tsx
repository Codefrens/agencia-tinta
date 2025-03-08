"use client";
import React, { useRef } from "react";
import styles from "./ContentText.module.css";
import Container from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "motion/react";

const ContentText = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <Container>
      <motion.section ref={ref} className={styles.wrapper} style={{ opacity }}>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
          className={styles.title}
        >
          {title} /
        </motion.h2>
        <motion.div
          className={styles.content}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] }}
        >
          <p className={styles.paragraph}>{paragraph}</p>
        </motion.div>
      </motion.section>
    </Container>
  );
};

export default ContentText;
