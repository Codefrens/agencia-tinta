import React from "react";
import styles from "./Container.module.css";
import classNames from "classnames";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames(className, styles.container)}>{children}</div>
  );
};

export default Container;
