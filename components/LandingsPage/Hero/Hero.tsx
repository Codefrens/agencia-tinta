"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  children?: React.ReactNode; // Para el formulario que se agregará después
}

const Hero = ({ title, subtitle, backgroundImage, children }: HeroProps) => {
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
            sizes="100vw"
          />
        ) : (
          <div className={styles.backgroundPlaceholder} />
        )}
      </div>
        <div className={styles.overlay} />

      <Container>
        <div className={styles.content}>
          {/* Contenido de texto - Izquierda */}
          <div className={styles.textContent}>
           
            
            <h1
              className={styles.title}
             
            >
              {title}
            </h1>
            <h2
              className={styles.subtitle}
             
            >
              {subtitle}
            </h2>
          </div>

          {/* Espacio para formulario - Derecha */}
          <div
            className={styles.formContent}
           
          >
            {children && children}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero; 