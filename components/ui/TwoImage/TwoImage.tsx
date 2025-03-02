import React from "react";
import styles from "./TwoImage.module.css";
import Image from "next/image";

const TwoImage = ({
  images,
}: {
  images: {
    imageUrl: string;
    imageAlt: string;
  }[];
}) => {
  return (
    <div className={styles.imageWrapper}>
      {images.map((image) => (
        <div key={image.imageAlt} className={styles.imageContainer}>
          <Image
            src={image.imageUrl}
            alt={image.imageAlt}
            className={styles.image}
            width={900}
            height={500}
          />
        </div>
      ))}
    </div>
  );
};

export default TwoImage;
