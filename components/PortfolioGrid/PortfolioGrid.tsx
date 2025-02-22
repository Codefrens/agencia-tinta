import { Translations } from "@/translations/types";
import React from "react";
import styles from "./PortfolioGrid.module.css";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Button from "../ui/Button";

const PortfolioGrid = ({
  translations,
}: {
  translations: Translations["homePage"]["portfolio"];
}) => {
  return (
    <Container>
      <div className={styles.portfolioGrid}>
        {translations.portfolioGrid.map((port) => (
          <Card
            key={port.title}
            imgAlt={port.ImageAlt}
            imgSrc={port.ImageUrl}
            title={port.title}
            categories={port.categories}
          />
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Button className={styles.button} fill>
          {translations.morePortfolio}
        </Button>
      </div>
    </Container>
  );
};

export default PortfolioGrid;
