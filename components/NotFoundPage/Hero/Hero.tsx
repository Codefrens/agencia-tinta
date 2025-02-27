import React from "react";
import styles from "./Hero.module.css";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Button from "@/components/ui/Button";

const Hero = ({
  title,
  subtitle,
  button,
}: {
  title: string;
  subtitle: string;
  button: string;
}) => {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <Link href="/" className={styles.button}>
          <Button>{button}</Button>
        </Link>
      </Container>
    </section>
  );
};

export default Hero;
