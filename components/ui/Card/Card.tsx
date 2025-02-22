import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

type CardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  categories: string[];
};

const Card = ({ imgSrc, imgAlt, title, categories }: CardProps) => {
  return (
    <article>
      <div className={styles.image}>
        <Image src={imgSrc} alt={imgAlt} objectFit="cover" fill />
      </div>
      <div className={styles.content}>
        <span>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.categories}>
            {categories.map((cat, index) => (
              <p key={index} className={styles.category}>
                {cat}
              </p>
            ))}
          </div>
        </span>
        <span>
          <ArrowRight size={32} />
        </span>
      </div>
    </article>
  );
};

export default Card;
