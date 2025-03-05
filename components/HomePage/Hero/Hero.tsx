"use client";
import { Translations } from "@/translations/types";
import styles from "./Hero.module.css";
import Container from "@/components/ui/Container";
import VideoButton from "@/components/ui/VideoButton";
import { cubicBezier, motion } from "motion/react";
import classNames from "classnames";

const Hero = ({
  translations,
}: {
  translations: Translations["homePage"]["hero"];
}) => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.video}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6, ease: [0.26, 0.01, 0.06, 0.94] }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ transform: "scale(1)" }}
        >
          <source
            src="https://res.cloudinary.com/nicojoystin/video/upload/v1741201302/agencia-tinta/portfolio/cantina-canalla/videos/Cantina-Franquicia_nngcjz.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
      <Container>
        <div className={styles.content}>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: cubicBezier(0.6, 0.01, 0.3, 1),
            }}
          >
            {translations.subtitle}
          </motion.p>
          <h1 className={styles.title} aria-label={translations.title}>
            <AnimatedTitle
              title={translations.title}
              highlightedWords={translations.highlightWords}
            />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: cubicBezier(0.6, 0.01, 0.3, 1) }}
          >
            <VideoButton>{translations.reelLabel}</VideoButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

const AnimatedTitle = ({
  title,
  highlightedWords,
}: {
  title: string;
  highlightedWords?: string[];
}) => {
  const DURATION = 0.6;
  const DELAY = 0.055;

  const words = title.split(" ");

  return words.map((word, index) => {
    const regex = new RegExp(`(${highlightedWords.join("|")})`, "gi");
    const isHighlighted = regex.test(word);
    return (
      <motion.div key={index} className={styles.wordWrapper} initial="initial">
        {word.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0, rotate: 10 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{
              duration: DURATION,
              delay: DELAY * index,
              ease: "easeInOut",
            }}
            className={classNames(
              isHighlighted ? styles.highlightedWord : "",
              styles.char
            )}
          >
            {char}
          </motion.span>
        ))}
        {isHighlighted && (
          <motion.div
            className={styles.underline}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 2.2 / index,
              ease: cubicBezier(0.6, 0.01, 0.3, 1),
            }}
          />
        )}
      </motion.div>
    );
  });
};
