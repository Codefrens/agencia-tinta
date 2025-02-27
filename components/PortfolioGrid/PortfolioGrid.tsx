import { Translations } from "@/translations/types";
import React from "react";
import styles from "./PortfolioGrid.module.css";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Link from "next/link";

const PortfolioGrid = ({
  translations,
}: {
  translations: {
    portfolio: Translations["homePage"]["portfolio"];
    portfolioGrid: Translations["common"]["portfolioGrid"];
  };
}) => {
  return (
    <Container>
      <div className={styles.portfolioGrid}>
        {translations.portfolioGrid.slice(0, 4).map((port) => (
          <Card
            key={port.title}
            imgAlt={port.ImageAlt}
            imgSrc={port.ImageUrl}
            title={port.title}
            categories={port.categories}
            link={`/portfolio/${port.slug}`}
          />
        ))}
      </div>
      <Link href={"/portfolio"} className={styles.buttonWrapper}>
        <Button className={styles.button} fill>
          {translations.portfolio.morePortfolio}
        </Button>
      </Link>
    </Container>
  );
};

export default PortfolioGrid;
