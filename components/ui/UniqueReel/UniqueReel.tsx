"use client";
import React, { useRef } from "react";
import ReelVideo from "../ReelVideo";
import styles from "./UniqueReel.module.css";
import { motion, useScroll, useTransform } from "motion/react";

const UniqueReel = ({
  videoSrc,
  backText,
  posterSrc,
  videoAlt,
}: {
  videoSrc: string;
  backText?: string;
  videoAlt: string;
  posterSrc: string;
}) => {
  const text = backText
    ? [backText.split(" ").join(" "), backText.split(" ").join(" ")]
    : null;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textLeft = useTransform(scrollYProgress, [0, 1], [-600, 400]);
  const textRight = useTransform(scrollYProgress, [0, 1], [600, -400]);

  return (
    <div ref={ref} className={styles.uniqueReel}>
      {text && (
        <div className={styles.backText}>
          {text.map((text, index) => (
            <motion.p
              className={styles.text}
              key={index}
              style={{ x: index / 2 ? textRight : textLeft }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      )}
      <div className={styles.videoContainer}>
        <ReelVideo
          videoSrc={videoSrc}
          posterSrc={posterSrc}
          videoAlt={videoAlt}
        />
      </div>
      <div className={styles.videoContainer}>
        <ReelVideo
          videoSrc={videoSrc}
          posterSrc={posterSrc}
          videoAlt={videoAlt}
        />
      </div>
    </div>
  );
};

export default UniqueReel;
