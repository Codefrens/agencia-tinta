"use client";
import React from "react";
import styles from "./AnimatedTitle.module.css";
import classNames from "classnames";
import { motion, cubicBezier } from "motion/react";

const AnimatedTitle = ({
  title,
  highlightedWords = [],
}: {
  title: string;
  highlightedWords?: string[];
}) => {
  const DURATION = 0.6;
  const DELAY = 0.055;

  const words = title.split(" ");

  return words.map((word, index) => {
    const regex =
      highlightedWords.length > 0
        ? new RegExp(`(${highlightedWords.join("|")})`, "gi")
        : null;
    const isHighlighted = regex ? regex.test(word) : false;

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

export default AnimatedTitle;
