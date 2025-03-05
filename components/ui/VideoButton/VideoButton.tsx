import React from "react";
import classNames from "classnames";
import styles from "./VideoButton.module.css";
import { PlayCircle } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";

const VideoButton = ({
  onClick,
  children,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const firstTextVariants = {
    initial: { y: 0 },
    hover: {
      y: -50,
      transition: { duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] },
    },
  };

  const secondTextVariants = {
    initial: { y: 50 },
    hover: {
      y: 0,
      transition: { duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <motion.button
      aria-label="Play video"
      onClick={onClick}
      className={classNames(styles.button, className)}
      initial={buttonVariants.initial}
      variants={buttonVariants}
      whileHover={"hover"}
    >
      <span className={styles.icon}>
        <PlayCircle size={40} weight="fill" />
      </span>
      <motion.span className={styles.textContainer}>
        <motion.span variants={firstTextVariants}>{children}</motion.span>
        <motion.span
          aria-hidden
          className={styles.text}
          variants={secondTextVariants}
          initial={secondTextVariants.initial}
        >
          {children}
        </motion.span>
      </motion.span>
    </motion.button>
  );
};

export default VideoButton;
