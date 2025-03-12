import React from "react";
import styles from "./OneImage.module.css";
import Image from "next/image";
import classNames from "classnames";

const OneImage = ({
  imageUrl,
  imageAlt,
  centered = false,
  aspectRatio,
}: {
  imageUrl: string;
  imageAlt: string;
  centered?: boolean;
  aspectRatio?: number;
}) => {
  return (
    <div
      className={classNames(styles.imageWrapper, centered && styles.centered)}
    >
      <div
        className={styles.imageContainer}
        style={aspectRatio ? { aspectRatio } : null}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          className={styles.image}
          width={1400}
          height={500}
        />
      </div>
    </div>
  );
};

export default OneImage;
