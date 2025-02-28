import React from "react";
import styles from "./ImageCarrousel.module.css";
import Image from "next/image";

const images = [
  {
    imageUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1740596157/foodie_xv09ya.avif",
    imageAlt: "Logo de Tinta",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1740596157/foodie_xv09ya.avif",
    imageAlt: "Logo de Tinta",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/nicojoystin/image/upload/v1740596157/foodie_xv09ya.avif",
    imageAlt: "Logo de Tinta",
  },
];

const ImageCarrousel = () => {
  return (
    <section className={styles.imageCarrousel}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div className={styles.imageCard} key={index}>
            <Image
              src={image.imageUrl}
              alt={image.imageAlt}
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCarrousel;
