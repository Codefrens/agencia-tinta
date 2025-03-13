"use client";
import { Translations } from "@/translations/types";
import styles from "./Hero.module.css";
import Container from "@/components/ui/Container";
import VideoButton from "@/components/ui/VideoButton";
import { cubicBezier, motion } from "motion/react";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";

const Hero = ({
  translations,
}: {
  translations: Translations["homePage"]["hero"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoUrl =
    "https://res.cloudinary.com/nicojoystin/video/upload/v1741896043/agencia-tinta/home/Video_Hero_2023_vzjsl0.mp4";

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video:", error);
      });
    }
  }, [isOpen]);

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
            src={
              "https://res.cloudinary.com/nicojoystin/video/upload/v1741896813/agencia-tinta/home/hero_loop_vhtytv.mp4"
            }
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
            <VideoButton onClick={() => setIsOpen(true)}>
              {translations.reelLabel}
            </VideoButton>
          </motion.div>
        </div>
        {/* Modal con el video */}
        {isOpen && (
          <div className={styles.modal} onClick={() => setIsOpen(false)}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <video ref={videoRef} controls className={styles.videoModal}>
                <source src={videoUrl} type="video/mp4" />
              </video>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Hero;
