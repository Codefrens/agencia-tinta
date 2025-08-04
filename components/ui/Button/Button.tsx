"use client";
import React, { useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";
import { motion } from "motion/react";

const Button = ({
  onClick,
  children,
  ariaLabel,
  fill = false,
  className,
  size = "m",
}: {
  children: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  fill?: boolean;
  className?: string;
  size?: "m" | "l";
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

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

  return (
    <motion.button
      ref={ref}
      aria-label={ariaLabel}
      onClick={onClick}
      className={classNames(styles.button, className, fill && styles.fill, size === "l" && styles.large)}
      whileHover="hover"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
    >
      <motion.div className={styles.textContainer}>
        <motion.span
          variants={firstTextVariants}
          animate={firstTextVariants.initial}
        >
          {children}
        </motion.span>
        <motion.span
          aria-hidden
          className={styles.text}
          variants={secondTextVariants}
          initial={secondTextVariants.initial}
          animate={secondTextVariants.initial}
        >
          {children}
        </motion.span>
      </motion.div>
    </motion.button>
  );
};

export default Button;
