"use client";
import React, { useRef } from "react";
import styles from "./ImageCarrousel.module.css";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";

const images = [
  {
    imageUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741969636/agencia-tinta/agencia/Agencia_2_jioyvh.png",
    imageAlt: "",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741969635/agencia-tinta/agencia/Agencia_1_sfb8qu.png",
    imageAlt: "",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1741969636/agencia-tinta/agencia/Agencia_3_yfv04z.png",
    imageAlt: "",
  },
];

const ImageCarrousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const moveX = useTransform(scrollYProgress, [0, 1], [400, -400]);

  return (
    <section className={styles.imageCarrousel}>
      <motion.div
        ref={ref}
        className={styles.slider}
        initial={{ x: -116.763 }}
        style={{ x: moveX }}
      >
        {images.map((image, index) => (
          <div className={styles.imageCard} key={index}>
            <Image
              src={image.imageUrl}
              alt={image.imageAlt}
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ImageCarrousel;
