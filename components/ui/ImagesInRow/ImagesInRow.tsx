import React from "react";
import styles from "./ImagesInRow.module.css";
import Image from "next/image";
import classNames from "classnames";

const ImagesInRow = ({
  images,
}: {
  images: {
    imageUrl: string;
    imageAlt: string;
  }[];
}) => {
  return (
    <div
      className={classNames(
        styles[`grid-cols-${images.length}`],
        styles.imageWrapper
      )}
    >
      {images.map((image, index) => (
        <div
          key={`${image.imageAlt}-${index}`}
          className={styles.imageContainer}
        >
          <Image
            src={image.imageUrl}
            alt={image.imageAlt}
            className={styles.image}
            width={900}
            height={900}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesInRow;
