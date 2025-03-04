"use client";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "./Card.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  categories: string[];
  link: string;
};

const Card = ({ imgSrc, imgAlt, title, categories, link }: CardProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothOptions = { stiffness: 300, damping: 20, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, smoothOptions);
  const smoothMouseY = useSpring(mouseY, smoothOptions);
  const [isHover, setIsHover] = useState(false);

  const mouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const { left, top } = ref.current.getBoundingClientRect();
    const x = e.clientX - left - 50; // Ajuste para centrar
    const y = e.clientY - top - 25; // Ajuste para centrar

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.a
      href={link}
      className={styles.card}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className={styles.imageWrapper}>
        <motion.div
          className={styles.floatButton}
          style={{ x: smoothMouseX, y: smoothMouseY }}
          animate={isHover ? "enter" : "exit"}
          initial="initial"
          transition={{ duration: 0.1, ease: "easeInOut" }}
          variants={{
            initial: { scale: 0 },
            enter: { scale: 1, transition: { duration: 0.3 } },
            exit: { scale: 0, transition: { duration: 0.1 } },
          }}
        >
          Ver
        </motion.div>

        <motion.div
          animate={isHover ? "enter" : "exit"}
          initial="initial"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          variants={{
            initial: { scale: 1, opacity: 1 },
            enter: { scale: 1.05, opacity: 0.4 },
            exit: { scale: 1, opacity: 1 },
          }}
          className={styles.imageMotion}
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            className={styles.image}
            width={600}
            height={600}
          />
        </motion.div>
      </div>

      <article className={styles.content}>
        <span>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.categories}>
            {categories.map((cat, index) => (
              <p key={index} className={styles.category}>
                {cat}
              </p>
            ))}
          </div>
        </span>
        <div className={styles.arrowWrapper}>
          <motion.span
            className={styles.arrow}
            animate={isHover ? "enter" : "exit"}
            initial="initial"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            variants={{
              initial: { x: -32 },
              enter: { x: 0 },
              exit: { x: -32 },
            }}
          >
            <ArrowRight className={styles.arrowIcon} />
          </motion.span>
          <motion.span
            className={styles.arrow}
            animate={isHover ? "enter" : "exit"}
            initial="initial"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            variants={{
              initial: { x: -42 },
              enter: { x: 0 },
              exit: { x: -42 },
            }}
          >
            <ArrowRight className={styles.arrowIcon} />
          </motion.span>
        </div>
      </article>
    </motion.a>
  );
};

export default Card;
