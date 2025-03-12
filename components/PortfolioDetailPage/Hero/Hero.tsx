"use client";
import Container from "@/components/ui/Container";
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { motion } from "motion/react";

const Hero = ({
  title,
  subtitle,
  year,
  yearLabel,
  imageUrl,
  imageAlt,
  sector,
  sectorLabel,
  clientLabel,
  categories,
}: {
  title: string;
  subtitle: string;
  year: string;
  imageUrl: string;
  imageAlt: string;
  sector: string;
  categories: string[];
  yearLabel: string;
  sectorLabel: string;
  clientLabel: string;
}) => {
  return (
    <section className={styles.hero}>
      <Container className={styles.content}>
        <span className={styles.year}>{year}</span>
        <h1 className={styles.title}>
          <AnimatedTitle title={title} />
        </h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.26, 0.01, 0.06, 0.94] }}
          className={styles.subtitle}
        >
          {subtitle}
        </motion.p>
      </Container>
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.26, 0.01, 0.06, 0.94] }}
      >
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            className={styles.image}
            width={1440}
            height={500}
          />
        </div>
      </motion.div>

      <div className={styles.info}>
        <div className={styles.infoItems}>
          <div>
            <p className={styles.label}>{yearLabel}</p>
            <p className={styles.value}>{year}</p>
          </div>
          <div>
            <p className={styles.label}>{clientLabel}</p>
            <p className={styles.value}>{title}</p>
          </div>
          <div>
            <p className={styles.label}>{sectorLabel}</p>
            <p className={styles.value}>{sector}</p>
          </div>
        </div>
        <div className={styles.categories}>
          {categories.map((cat, index) => (
            <p key={index} className={styles.pill}>
              {cat}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
