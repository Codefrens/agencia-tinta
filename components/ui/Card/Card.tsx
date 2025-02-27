import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

type CardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  categories: string[];
  link: string;
};

const Card = ({ imgSrc, imgAlt, title, categories, link }: CardProps) => {
  return (
    <a href={link} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          className={styles.image}
          width={600}
          height={600}
        />
      </div>
      <article className={styles.content}>
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
      </article>
    </a>
  );
};

export default Card;
