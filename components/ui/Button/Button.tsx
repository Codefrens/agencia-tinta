import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({
  onClick,
  children,
  ariaLabel,
  fill = false,
  className,
}: {
  children: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  fill?: boolean;
  className?: string;
}) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={classNames(styles.button, className, fill && styles.fill)}
    >
      {children}
    </button>
  );
};

export default Button;
