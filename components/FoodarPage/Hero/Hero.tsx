"use client";
import { Translations } from "@/translations/types";
import styles from "./Hero.module.css";
import Container from "@/components/ui/Container";
import { cubicBezier, motion } from "motion/react";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import Button from "@/components/ui/Button";
import ModelViewer from "@/components/ui/ModelViewer";
import Blob from "@/components/ui/Blob";
import { Suspense } from "react";

const Hero = ({
  translations,
}: {
  translations: Translations["foodarPage"]["hero"];
}) => {
  return (
    <section className={styles.hero}>
      <Blob
        width="50vw"
        height="80vh"
        path={"polygon(7% 41%, 100% 0, 100% 58%, 100% 100%, 7% 60%)"}
        top="10%"
        right="-20%"
      />
      <motion.div
        className={styles.canva}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6, ease: [0.26, 0.01, 0.06, 0.94] }}
      >
        <Suspense fallback={null}>
          <ModelViewer
            src="https://res.cloudinary.com/nicojoystin/image/upload/v1741798340/agencia-tinta/plato_1_fo1m31.glb"
            alt="comida"
            ar
            shadowIntensity={1}
            cameraControls
            touchAction="pan-y"
            autoRotate
            disableZoom
            cameraOrbit="calc(1.5rad + env(window-scroll-y) * 1rad) calc(70deg + env(window-scroll-y) * -10deg)"
          >
            <button
              slot="ar-button"
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                border: "none",
                position: "absolute",
                top: "16px",
                right: "16px",
              }}
            >
              👋 Activate AR
            </button>
          </ModelViewer>
        </Suspense>
      </motion.div>
      <Container>
        <div className={styles.content}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: cubicBezier(0.6, 0.01, 0.3, 1),
            }}
            className={styles.name}
          >
            {translations.name}
          </motion.span>
          <h1 className={styles.title} aria-label={translations.title}>
            <AnimatedTitle title={translations.title} />
          </h1>
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: cubicBezier(0.6, 0.01, 0.3, 1) }}
          >
            <Button fill>{translations.buttonLabel}</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
