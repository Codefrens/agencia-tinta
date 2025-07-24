"use client";
import { motion } from "motion/react";
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
           
            
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {title}
            </motion.h1>
            <motion.h2
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subtitle}
            </motion.h2>
          </div>

          {/* Espacio para formulario - Derecha */}
          <motion.div
            className={styles.formContent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {children && (
              <div className={styles.formWrapper}>
                {children}
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero; 