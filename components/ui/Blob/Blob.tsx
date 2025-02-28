import React from "react";
import styles from "./Blob.module.css";

const Blob = ({
  width,
  height,
  path,
  top,
  left,
  right,
  bottom,
  blur,
}: {
  width?: string;
  height?: string;
  path?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blur?: string;
}) => {
  return (
    <div className={styles.blurContainer} style={{ top, left, right, bottom }}>
      <div
        className={styles.blob}
        style={{ width, height, clipPath: path, filter: `blur(${blur})` }}
      />
    </div>
  );
};

export default Blob;
