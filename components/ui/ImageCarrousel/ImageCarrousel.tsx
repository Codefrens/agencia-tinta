"use client";
import { useRef } from "react";
import styles from "./ImageCarrousel.module.css";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";

const images = [
  {
    imageUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1757617286/agencia-tinta/agencia/EQUIPO_wilzd3.webp",
    imageAlt: "Equipo fundador de Tinta",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741969636/agencia-tinta/agencia/Agencia_3_yfv04z.png",
    imageAlt: "",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741969636/agencia-tinta/agencia/Agencia_2_jioyvh.png",
    imageAlt: "",
  },
];

const ImageCarrousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const moveX = useTransform(scrollYProgress, [0, 1], [400, -200]);

  return (
    <section className={styles.imageCarrousel}>
      <motion.div
        ref={ref}
        className={styles.slider}
        initial={{ x: 0 }}
        style={{ x: moveX }}
      >
        {images.map((image, index) => (
          <div className={styles.imageCard} key={index}>
            <Image
              src={image.imageUrl}
              alt={image.imageAlt}
              width={700}
              height={700}
              className={styles.image}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ImageCarrousel;
