"use client";
import { Translations } from "@/translations/types";
import styles from "./Hero.module.css";
import Container from "@/components/ui/Container";
import { cubicBezier, motion } from "motion/react";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import Button from "@/components/ui/Button";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import ModelViewer from "@/components/ui/ModelViewer";
import Blob from "@/components/ui/Blob";

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
        top="30%"
        right="-20%"
      />
      <motion.div
        className={styles.canva}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6, ease: [0.26, 0.01, 0.06, 0.94] }}
      >
        <ModelCanvas />
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

const ModelCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <PerspectiveCamera makeDefault position={[0, 0.5, 1]} />
      <OrbitControls makeDefault enableZoom={false} enablePan={false} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1}>
          <ModelViewer src="https://res.cloudinary.com/nicojoystin/image/upload/v1741798340/agencia-tinta/plato_1_fo1m31.glb" />
        </Bounds>
      </Suspense>
    </Canvas>
  );
};
