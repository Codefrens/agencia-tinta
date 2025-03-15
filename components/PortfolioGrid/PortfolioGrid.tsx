"use client";
import { Translations } from "@/translations/types";
import React from "react";
import styles from "./PortfolioGrid.module.css";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Link from "next/link";
import { motion } from "motion/react";

const PortfolioGrid = ({
  translations,
}: {
  translations: {
    portfolio: Translations["homePage"]["portfolio"];
    portfolioGrid: Translations["common"]["portfolioGrid"];
  };
}) => {
  const cards = {
    initial: { y: 50 },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.26, 0.01, 0.06, 0.94] },
    },
  };

  return (
    <Container>
      <motion.div
        className={styles.portfolioGrid}
        variants={cards}
        initial="initial"
        whileInView="visible"
      >
        {translations.portfolioGrid.slice(0, 4).map((port) => (
          <motion.div key={port.title}>
            <Card
              imgAlt={port.imageAlt}
              imgSrc={port.imageUrl}
              title={port.title}
              categories={port.categories}
              link={`/portfolio/${port.slug}`}
            />
          </motion.div>
        ))}
      </motion.div>
      <Link href={"/portfolio"} className={styles.buttonWrapper}>
        <Button className={styles.button} fill>
          {translations.portfolio.morePortfolio}
        </Button>
      </Link>
    </Container>
  );
};

export default PortfolioGrid;
