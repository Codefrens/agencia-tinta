"use client";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import styles from "./HeroB.module.css";

interface HeroBProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText: string;
}

const HeroB = ({ title, subtitle, backgroundImage, ctaText }: HeroBProps) => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.background}>
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt=""
            fill
            className={styles.backgroundImage}
            priority={true}
          />
        ) : (
          <div className={styles.backgroundPlaceholder} />
        )}
      </div>
      <div className={styles.overlay} />

      <Container>
        <div className={styles.content}>
          {/* Contenido centrado */}
          <div className={styles.textContent}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            
            {/* Botón Call to Action */}
            <div className={styles.ctaWrapper}>
              <Button
                onClick={() => {
                  console.log("Cta clicked");
                }}
                ariaLabel={ctaText}
                className={styles.ctaButton}
                fill={true}
                size="l"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroB;