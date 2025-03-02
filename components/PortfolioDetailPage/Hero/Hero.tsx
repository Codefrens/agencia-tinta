import Container from "@/components/ui/Container";
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

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
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </Container>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            className={styles.image}
            width={900}
            height={500}
          />
        </div>
      </div>

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
