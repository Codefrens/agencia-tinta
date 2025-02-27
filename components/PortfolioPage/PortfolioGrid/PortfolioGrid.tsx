"use client";

import { Translations } from "@/translations/types";
import React, { useState } from "react";
import styles from "./PortfolioGrid.module.css";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Filters from "../Filters";

const PortfolioGrid = ({
  translations,
}: {
  translations: Translations["common"];
}) => {
  const projects = translations.portfolioGrid;
  const [activeCategory, setActiveCategory] = useState<string>(
    translations.filters[0]
  );

  const filteredProjects =
    activeCategory === translations.filters[0]
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  console.log(filteredProjects);

  return (
    <Container>
      <div className={styles.filters}>
        <Filters
          categories={translations.filters}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <div className={styles.portfolioGrid}>
        {filteredProjects.map((port) => (
          <Card
            key={port.title}
            imgAlt={port.ImageAlt}
            imgSrc={port.ImageUrl}
            title={port.title}
            categories={port.categories}
          />
        ))}
      </div>
    </Container>
  );
};

export default PortfolioGrid;
